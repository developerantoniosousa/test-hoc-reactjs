import React from 'react';

import withCounter from '../../hoc/withCounter'

function button1({ count, increment, name }) {
  return <div onClick={increment}>{`${name} -> ${count} clicks`}</div>;
}

export default withCounter(button1)