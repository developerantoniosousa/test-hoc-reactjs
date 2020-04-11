import React from 'react';

import withCounter from '../../hoc/withCounter'

function button2({ count, increment, name }) {
  return <div onClick={increment}>{`${name} -> ${count} clicks`}</div>;
}

export default withCounter(button2)
