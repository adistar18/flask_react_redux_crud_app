import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from  'redux-form';
import _ from 'lodash';
import moment from 'moment';
import EditUserParticularsForm from './EditUserParticularsForm';
import UserAddressForm from './UserAddressForm';
import StaffDetailsForm from './StaffDetailsForm';
import ClientDetailsForm from './ClientDetailsForm';
import { removeJWT } from 'Authentication/actions';
import { editUser } from 'Entities/UsersActions';
import { addStaff, editStaff } from 'Entities/StaffActions';
import { addClient, editClient } from 'Entities/ClientsActions';
import { hideModal, loadFormData } from 'Admin/actions';
import { selectEditUserForm } from 'Admin/selectors';
import ErrorAlert from 'components/ErrorAlert';
import NavTab from 'components/NavTab';
import ButtonToolbar from 'components/ButtonToolbar';

const mapStateToProps = (state) => {
  const { entities, adminPages, authentication } = state;
  
  return {
    roleValue: selectEditUserForm(state, 'role'),
    initialValues: adminPages.formData,
    ...entities,
    ...adminPages,
    ...authentication
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadFormData: (formData) => {
      return dispatch(loadFormData(formData));
    },

    onEditUser: (JWT, content, id) => {
      return dispatch(editUser(JWT, content, id));
    },

    onAddStaff: (JWT, content) => {
      return dispatch(addStaff(JWT, content));
    },

    onEditStaff: (JWT, content, id) => {
      return dispatch(editStaff(JWT, content, id));
    },

    onAddClient: (JWT, content) => {
      return dispatch(addClient(JWT, content));
    },

    onEditClient: (JWT, content, id) => {
      return dispatch(editClient(JWT, content, id));
    },

    onJWTExpired: () => {
      dispatch(removeJWT());
    },

    onHideModal: () => {
      dispatch(hideModal());
    }
  };
};

class EditUserForm extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
      currentTab: 'Particulars',
    };

    this.changeMatterFieldValue = this.changeMatterFieldValue.bind(this);
  }

  componentDidMount() {
    const { selectedRecord } = this.props;

    this.handleInitializeUserData();
    if (selectedRecord.role === 'staff') {
      this.handleInitializeStaffData();
    } else if (selectedRecord.role === 'client') {
      this.handleInitializeClientData();
    }
  }

  handleInitializeUserData() {
    const { selectedRecord, onLoadFormData } = this.props;
    const initData = {
      "active": selectedRecord.active === "Active" ? "1" : "0",
      "role": selectedRecord.role,
      "firstName": selectedRecord.firstName,
      "middleName": selectedRecord.middleName,
      "lastName": selectedRecord.lastName,
      "phoneNumber": selectedRecord.phoneNumber,
      "unitNumber": selectedRecord.unitNumber,
      "streetAddress": selectedRecord.streetAddress,
      "suburb": selectedRecord.suburb,
      "postcode": selectedRecord.postcode,
      "state": selectedRecord.state,
      "country": selectedRecord.country
    };

    onLoadFormData(initData);
  }

  handleInitializeStaffData() {
    const { selectedRecord, staffUsers, onLoadFormData } = this.props;
    const staffUser = staffUsers[selectedRecord.id];
    const mattersList = (staffUser.mattersHandled || []).join(',');
    const practiceAreasList = (staffUser.practiceAreas || []).join(',');
    const description = (staffUser.description || []).map((paragraph) => {
      return paragraph;
    }).join('\r\n\r\n');

    const initData = {
      "dateJoined": moment(staffUser.dateJoined).format('DD/MM/YYYY'),
      "matters": mattersList,
      "position": staffUser.position,
      "description": description,
      "practiceAreas": practiceAreasList
    };

    onLoadFormData(initData);    
  }

  handleInitializeClientData() {
    const { selectedRecord, clientUsers, onLoadFormData } = this.props;
    const clientUser = clientUsers[selectedRecord.id];
    const mattersList = (clientUser.matters || []).join(',');

    const initData = {
      "matters": mattersList,
    };

    onLoadFormData(initData);   
  }

  fillInAddress(value) {
    const { change } = this.props;
    const { gmaps } = value;
    const { address_components } = gmaps;
    const addressComponents = {};
    address_components.forEach((component) => {
      const addressType = component.types[0];
      const value = component.long_name;
      addressComponents[addressType] = value;
    });
    change('unitNumber', _.get(addressComponents, 'subpremise', ''));
    change('streetAddress', _.get(addressComponents, 'street_number', '') + ' ' + 
      _.get(addressComponents, 'route', ''));
    change('suburb', _.get(addressComponents, 'locality', ''));
    change('postcode', _.get(addressComponents, 'postal_code', ''));
    change('state', _.get(addressComponents, 'administrative_area_level_1', ''));
    change('country', _.get(addressComponents, 'country', ''));
  }

  _handleSubmit(data) {
    const { selectedRecord, onAddStaff, onAddClient, 
      onEditUser, onEditStaff, onEditClient, 
      onHideModal, onJWTExpired, roleValue, JWT } = this.props;
    const userEntityFields = [
      'role', 'active', 'lastName', 'firstName', 'middleName', 'phoneNumber', 
      'unitNumber', 'streetAddress', 'suburb', 'postcode',
      'state', 'country', 'photo'
    ];
    const staffEntityFields = [
      'dateJoined', 'position', 'practiceAreas', 'matters', 'description'
    ];
    const clientEntityFields = ['matters'];
    const config = {
      headers: {
        'Authorization': `JWT ${JWT}`
      }
    };
    let userFormData = new FormData();
    let staffFormData = new FormData();
    let clientFormData = new FormData();

    Object.keys(data).forEach((key) => {
      userEntityFields.includes(key) &&
      userFormData.append(key, data[key]);
      if ((selectedRecord.role === 'staff' || roleValue === 'staff') 
        && staffEntityFields.includes(key)) {
        staffFormData.append(key, data[key]);
      }
      if ((selectedRecord.role === 'client' || roleValue === 'client') 
        && clientEntityFields.includes(key)) {
        clientFormData.append(key, data[key]);
      }
    });

    onEditUser(config, userFormData, selectedRecord.id)
    .then(({editedRecordId}) => {
      if (selectedRecord.role === 'staff') {
        onEditStaff(config, staffFormData, editedRecordId);  
      } else if (selectedRecord.role === 'client') {
        onEditClient(config, clientFormData, editedRecordId);
      } else if (selectedRecord.role === 'public') {
        if (roleValue === 'staff') {
          staffFormData.append('userId', editedRecordId);
          onAddStaff(config, staffFormData);
        } else if (roleValue === 'client') {
          clientFormData.append('userId', editedRecordId);
          onAddClient(config, clientFormData);
        } else return;
      }
    })
    .then(() => onHideModal())
    .catch(({response, message}) => {
      const { status, data } = response;
      if (status === 401) {
        onJWTExpired();
      } else if (status === 404) {
        this.setState({
          errorMessage: data.message
        });
      } else {
        this.setState({
          errorMessage: message
        });
      }
    });
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      currentTab: event.target.textContent
    });
  }

  changeMatterFieldValue(matterId) {
    matterId = String(matterId);
    const { mattersValue, change } = this.props;
    change('matters', !mattersValue ? matterId : mattersValue.concat(`,${matterId}`));
  }

  render() {
    this.handleClick = this.handleClick.bind(this);
    const { onHideModal, selectedRecord, roleValue, 
      handleSubmit, pristine, reset, submitting } = this.props;
    const { errorMessage, currentTab } = this.state;
    const tabLabels = ["Particulars", "Address"];
    if (selectedRecord.role === 'staff' || roleValue === 'staff') {
      tabLabels.splice(2, 1, "Staff Details");
    } else if (selectedRecord.role === 'client' || roleValue === 'client') {
      tabLabels.splice(2, 1, "Client Details");
    }
    const navTabs = tabLabels.map((tab, idx) => {
      return (
        <NavTab
          key={idx}
          isActive={currentTab === tab}
          text={tab}
          handleClick={this.handleClick}/>
      );
    });
    
    return (
      <form>
        <ul className="nav nav-tabs">
          {navTabs}
        </ul>
        <EditUserParticularsForm
          isDisplayed={currentTab === tabLabels[0]}
          handleChange={this.handleChange}/>
        <UserAddressForm
          fillInAddress={(value) => this.fillInAddress(value)}
          isDisplayed={currentTab === tabLabels[1]}/>
        {selectedRecord.role === 'staff' || roleValue === 'staff' ? (
          <StaffDetailsForm
            isDisplayed={currentTab === tabLabels[2]}/>
        ) : selectedRecord.role === 'client' || roleValue === 'client' ? (
          <ClientDetailsForm
            isDisplayed={currentTab === tabLabels[2]}
            changeMatterFieldValue={this.changeMatterFieldValue}/>
        ) : null}
        {errorMessage && <ErrorAlert message={errorMessage}/>}
        <ButtonToolbar
          onHideModal={onHideModal}
          pristine={pristine}
          submitting={submitting}
          reset={reset}
          handleSubmit={handleSubmit(data => this._handleSubmit(data))}/>
      </form>
    );
  }
}

EditUserForm.propTypes = {
  onEditUser: PropTypes.func.isRequired,
  onEditStaff: PropTypes.func.isRequired,
  onEditClient: PropTypes.func.isRequired,
  onHideModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  selectedRecord: PropTypes.object.isRequired,
  onAddStaff: PropTypes.func.isRequired,
  onAddClient: PropTypes.func.isRequired,
  onJWTExpired: PropTypes.func.isRequired,
  roleValue: PropTypes.string.isRequired,
  onLoadFormData: PropTypes.func.isRequired,
  staffUsers: PropTypes.object.isRequired,
  clientUsers: PropTypes.object.isRequired,
  change: PropTypes.func.isRequired,
  JWT: PropTypes.string.isRequired,
  mattersValue: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({
  form: 'EditUserForm',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(EditUserForm));
