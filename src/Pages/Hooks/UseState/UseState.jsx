// rfce

import React, { useState } from 'react';

let previousAvatar = '';

function UseState() {
  //   state = {
  //     number: 1,
  //   };
  // this.setState({ number: 20})

  const [number, setNumber] = useState(10);
  const [avatar, setAvatar] = useState('https://i.pravatar.cc?u=1');

  //   const object = {
  //     a: 1,
  //     b: 2,
  //   };
  //   const array = [1, function () {}];

  //   const { a, b } = object;
  //   const [number, setNumber] = array;

  // đối với class khi setState thì chỉ có hàm render đc gọi lại
  // function component khi setState thì nguyên cái scope component đc gọi lại
  //   console.log('render');

  return (
    <div>
      <h4>UseState</h4>
      <p>Number: {number}</p>
      <button
        onClick={() => {
          setNumber(number - 1);
        }}
        className="btn btn-primary"
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
        className="btn btn-success"
      >
        Increase
      </button>
      <br />
      {/* b4-card-default => format jsx */}
      <div className="card w-25 p-0">
        <img className="card-img-top" src={avatar} alt="#" />
        <div className="card-body">
          <button
            onClick={() => {
              setAvatar(previousAvatar);
            }}
            className="btn btn-primary"
          >
            Previous
          </button>
          <button
            onClick={() => {
              const id = Date.now();

              previousAvatar = avatar;
              const newAvatar = `https://i.pravatar.cc?u=${id}`;

              setAvatar(newAvatar);
            }}
            className="btn btn-success"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default UseState;
