
//@ts-check

import {
    PROJECT_DISPLAY
  }                       from './construction-action';

  const project = {
    industry:     'residential',
    projectState: 0,
    residential:  [],
    commercial:   []
  };

  const projects = ( state = project , action ) => {
    switch ( action.type ) {
      case PROJECT_DISPLAY: return { ...state, residential: action.residential };
      default: return state;
    }
  }
  
  export default projects;
