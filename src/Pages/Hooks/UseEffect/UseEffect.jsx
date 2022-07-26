// rfce
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Memo from '../Memo/Memo';

function UseEffect() {
  const [state, setState] = useState(1);
  const [like, setLike] = useState(1);

  // componentDidMount: chạy 1 lần duy nhất sau render
  // componentDidUpdate: chạy khi state hoặc props thay đổi
  // componentWillUnmount: chạy khi component bị hủy đi

  // cách 1: sử dụng thay thế componentDidMount và componentDidUpdate ( ít sử dụng )
  //   useEffect(() => {
  //     console.log('useEffect');
  //   });

  // cách 2: sử dụng thay thế componentDidMount ( sử dụng nhiều )
  useEffect(() => {
    // console.log('useEffect');
  }, []);

  // cách 3: sử dụng thay thế componentDidUpdate ( sử dụng nhiều )
  useEffect(() => {
    // console.log('State has been changed!');
  }, [state]);

  useEffect(() => {
    // console.log('Like has been changed!');
  }, [like]);

  useEffect(() => {
    // console.log('State and Like have been changed!');
  }, [state, like]);

  // cách 4: sử dụng thay thế componentWillUnmount ( sử dụng gọi socket.io , chat realtime ... )
  useEffect(() => {
    // call api
    return () => {
      // console.log('componentWillUnmount demo');
    };
  }, []);

  // cache lại giá trị
  const count = useMemo(() => {
    // console.log('useMemo');
    return like + 1000 + 2000 + 3000 + 4000;
  }, [like]);

  // console.log(count);

  // cache lại function
  const handleSetLike = useCallback(() => {
    console.log('useCallback', like);
    setLike(like + 1);
  }, [like]);

  // console.log('render');

  return (
    <div>
      <h4>UseEffect</h4>
      <button onClick={() => setState(state + 1)} className="btn btn-info">
        Increase
      </button>
      <button onClick={handleSetLike} className="btn btn-success">
        Increase like
      </button>
      <Memo like={like} />
    </div>
  );
}

export default UseEffect;
