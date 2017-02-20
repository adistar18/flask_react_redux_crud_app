import axios from 'axios';
import { arrayOf, normalize } from 'normalizr';
import { practiceAreaSchema } from '../constants/Schemas';
import { recordAdded,
         recordEdited } from '../AdminPages/actions';
import { PRACTICE_AREAS_LOADED } from '../constants/actionTypes';

export function fetchPracticeAreas() {
  return dispatch => {
    return axios.get('http://localhost:8000/api/practice_areas')
    .then(({data: {practiceAreas}}) => {
      const normalized = normalize(
        practiceAreas, 
        arrayOf(practiceAreaSchema)
      );
      dispatch(practiceAreasLoaded(normalized.entities, normalized.result));
    });
  };
}

export function addPracticeArea(config, content) {
  return (dispatch) => {
    return axios.post(
      'http://localhost:8000/api/practice_areas', 
      content, 
      config
    )
    .then(({data: {practiceArea}}) => {
        const normalized = normalize(practiceArea, practiceAreaSchema);
        dispatch(recordAdded(normalized.entities, normalized.entities.practiceArea, practiceArea.id))
      }
    );
  }
}

export function editPracticeArea(config, content, id) {
  return (dispatch) => {
    return axios.put(
      `http://localhost:8000/api/practice_areas/${id}`, 
      content,
      config
    )
    .then(({data: {practiceArea}}) => {
      const normalized = normalize(practiceArea, practiceAreaSchema);
      dispatch(recordEdited(normalized.entities));
    });
  };
}

export function practiceAreasLoaded(entities, practiceAreas) {
  return {
    type: PRACTICE_AREAS_LOADED,
    entities,
    practiceAreas
  };
}