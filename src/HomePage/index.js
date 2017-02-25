import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import sr from 'components/ScrollReveal';
import { fetchPracticeAreas } from 'Entities/PracticeAreasActions';
import { fetchPosts } from 'Entities/PostsActions';
import Button from 'components/Button';

const mapStateToProps = (state) => {
  const { entities } = state;

  return {...entities};
};

const mapDispatchToProps = (dispatch) => ({
  onFetchPracticeAreas: () => {
    dispatch(fetchPracticeAreas());
  },
  onFetchPosts: () => {
    dispatch(fetchPosts());
  }
});

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      prevIndex: null,
      currentIndex: 0
    };
  }

  componentDidMount() {
    const config = {
      duration: 2000,
      scale: 1,
      distance: 0
    };

    sr.reveal(this.whoWeAre, config);
    sr.reveal(this.coreValues, config);
  }

  handleClick(index) {
    this.setState({ 
      currentIndex: index,
      prevIndex: this.state.currentIndex
    });
  }

  render() {
    return (
      <main>
        <Helmet
          title="Concept Law Firm"
          meta={[
            { name: 'description', content: 'A firm that serves that community.'}
          ]}/>
        <div 
          className="jumbotron"
          style={{backgroundImage: "url('http://localhost:8000/static/images/2000/home.jpg')"}}>
          <div className="container text-center">
            <Button 
              type="button" 
              customClassNames="btn-primary btn-home">
              Make an appointment today
            </Button>
          </div>
        </div>
        <div className="container-fluid">
          <div 
            className="lg-margin-top" 
            ref={div => this.whoWeAre = div}>
            <h1 className="text-center">Who We Are</h1>
            <p>We are a team of highly experienced professionals who are highly sought after in key industries with a proven track record in delivering smart and cost-efficient solutions to legal problems that make our clients happy.</p>
          </div>
          <div 
            className="lg-margin-top" 
            ref={div => this.coreValues = div}>
            <h1 className="text-center">Our Core Values?</h1>
            <p>We are a team of highly experienced professionals who are highly sought after in key industries with a proven track record in delivering smart and cost-efficient solutions to legal problems that make our clients happy.</p>
          </div>
        </div>
      </main>
    );
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(HomePage);