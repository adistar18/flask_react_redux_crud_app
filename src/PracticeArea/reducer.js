import { PRACTICE_AREA_LOADED } from 'constants/actionTypes';

const initialState = { 
  currentPracticeArea: {}
};

export default function practiceAreaReducer(state = initialState, action) {
  switch(action.type) {
    case PRACTICE_AREA_LOADED:
      return practiceAreaLoaded(state, action);
  }

  return state;
}

function practiceAreaLoaded(state, { entities, practiceAreaId }) {
  return {
    ...state,
    currentPracticeArea: entities.practiceAreas[practiceAreaId]
  };
}

// function changePracticeArea(state, action) {
//   const { practiceAreaId } = action;
//   return {
//     ...state,
//     practiceAreaId
//   };
// }