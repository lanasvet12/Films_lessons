import React, { useEffect } from 'react';
withPageLogging = Component => props => {
  useEffect(() => {
    fetch(`/logger?location=${ window.location}`);
  }, []);
  return ;
};
export default withPageLogging;
