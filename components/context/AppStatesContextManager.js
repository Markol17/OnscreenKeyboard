import React, { useReducer } from 'react';

import AppStatesContext from './AppStatesContext';

function init() {
  return {
    isEnabled: true,
    content: '',
    capsLock: false,
    shift: false,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return init();

    case 'setIsEnabled':
      return {
        ...state,
        isEnabled: action.state,
      };

    case 'setContent':
      return {
        ...state,
        content: action.content,
      };

    case 'setCapsLock':
      return {
        ...state,
        capsLock: action.state,
      };

    case 'setShift':
      return {
        ...state,
        shift: action.state,
      };

    default:
      throw new Error('Unknown action on context');
  }
}

const AppStatesContextManager = ({ ...rest }) => {
  const [state, dispatch] = useReducer(reducer, {}, init);

  const context = {
    isEnabled: state.isEnabled,
    content: state.content,
    capsLock: state.capsLock,
    shift: state.shift,

    setIsEnabled(state) {
      dispatch({ state, type: 'setIsEnabled' });
    },
    setContent(content) {
      dispatch({ content, type: 'setContent' });
    },
    setCapsLock(state) {
      dispatch({ state, type: 'setCapsLock' });
    },
    setShift(state) {
      dispatch({ state, type: 'setShift' });
    },
    reset() {
      dispatch({ type: 'reset' });
    },
  };

  return <AppStatesContext.Provider value={context} {...rest} />;
};

export default AppStatesContextManager;
