import React from 'react';

const defaultValue = {
  isEnabled: true,
  content: '',
  capsLock: false,
  shift: false,
  keysData: [],
  theme: {
    backgroudColor: '#1a1a1a',
    fontColor: '#ffffff',
    outlineColor: '#f5a638',
  },

  setIsEnabled: state => {
    throw new Error('Missing AppStatesContextManager');
  },

  setContent: content => {
    throw new Error('Missing AppStatesContextManager');
  },

  setCapsLock: state => {
    throw new Error('Missing AppStatesContextManager');
  },

  setShift: state => {
    throw new Error('Missing AppStatesContextManager');
  },

  setKeysData: data => {
    throw new Error('Missing AppStatesContextManager');
  },

  setTheme: theme => {
    throw new Error('Missing AppStatesContextManager');
  },

  reset() {
    throw new Error('Missing AppStatesContextManager');
  },
};

const AppStatesContext = React.createContext(defaultValue);

export default AppStatesContext;
