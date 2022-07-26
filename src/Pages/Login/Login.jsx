import React, { Component, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { withRouter } from '../../HOC/withRouter';
import { GlobalContext } from '../../Contexts/GlobalContext';

const Login = () => {
  const navigate = useNavigate();
  const [_, setGlobalState] = useContext(GlobalContext);

  const handleLogin = () => {
    const username = 'admin';
    const password = 'admin';

    if (username === 'admin' && password === 'admin') {
      setGlobalState({
        isLogin: true,
      });
      // navigate sang home
      navigate('/home');
    }
  };

  return (
    <div>
      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};

export default Login;

// class Login extends Component {
//   handleLogin = () => {
//     const username = 'admin';
//     const password = 'admin';

//     if (username === 'admin' && password === 'admin') {
//       // navigate sang home
//       this.props.navigate('/home');
//     }
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleLogin} className="btn btn-primary">
//           Login
//         </button>
//       </div>
//     );
//   }
// }

// export default withRouter(Login);
