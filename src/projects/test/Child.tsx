import React from 'react';

const Child = React.memo(({ fn }) => {
  console.log('I am rerendered');
  return <div>{fn(3)}</div>;
});

export default Child;
