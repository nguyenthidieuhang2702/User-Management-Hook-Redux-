// rfce => cú pháp tạo template function component
import React, { memo } from 'react';

function Memo(props) {
  console.log('Memo');

  return <div>Like: {props.like}</div>;
}

export default memo(Memo);
