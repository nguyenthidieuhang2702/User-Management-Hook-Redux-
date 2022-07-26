import React, { Component, createRef } from 'react';

import { connect } from 'react-redux';
import { addUserAction, updateUserAction } from '../../Store/actions/user';

const DEFAULT_VALUES = {
  id: '',
  username: '',
  fullName: '',
  email: '',
  password: '',
  phoneNumber: '',
  type: 'Client',
};

class RegisterForm extends Component {
  // thuộc tính cấp ngoài cùng thì khi setState sẽ chỉ set lại thằng mới và giữ nguyên những thuộc tính cũ
  // thuộc tính bên trong 1 cấp thì khi setState sẽ mất đi giá trị cũ mà chỉ set cái mới
  state = {
    values: DEFAULT_VALUES,
    errors: {
      id: '',
      username: '',
      fullName: '',
      email: '',
      password: '',
      phoneNumber: '',
      type: '',
    },
  };

  formRef = createRef();

  static getDerivedStateFromProps(nextProps, currentState) {
    if (
      nextProps.selectedUser &&
      currentState.values.id !== nextProps.selectedUser.id
    ) {
      currentState.values = nextProps.selectedUser;
    }

    return currentState;
  }

  handleChange = (event) => {
    // if (event.target.name === 'username') {
    //   this.setState({
    //     username: event.target.value,
    //   });
    // }

    // if (event.target.name === 'fullName') {
    //   this.setState({
    //     fullName: event.target.value,
    //   });
    // }

    const { name, value } = event.target;

    this.setState({
      values: {
        // giữ lại những giá trị cũ thông qua spread operator và thêm cái mới
        ...this.state.values,
        [name]: value,
      },
    });

    // console.log(event.target.name);
    // console.log(event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // duyệt object là for in
    // for (const key in this.state.errors) {
    //   const message = this.state.errors[key];

    //   if (message) {
    //     return;
    //   }
    // }

    if (!event.target.checkValidity()) {
      return;
    }

    // if (this.props.selectedUser) {
    //   this.props.dispatch({
    //     type: 'UPDATE_USER',
    //     payload: this.state.values,
    //   });
    // } else {
    //   this.props.dispatch({
    //     type: 'ADD_USER',
    //     payload: this.state.values,
    //   });
    // }

    // this.props.dispatch({
    //   type: this.props.selectedUser ? 'UPDATE_USER' : 'ADD_USER',
    //   payload: this.state.values,
    // });

    if (this.props.selectedUser) {
      this.props.dispatch(updateUserAction(this.state.values));
    } else {
      this.props.dispatch(addUserAction(this.state.values));
    }

    this.setState(
      {
        values: DEFAULT_VALUES,
      },
      () => {
        // force render ( bắt component render lại 1 lần nữa )
        this.forceUpdate();
      }
    );
  };

  handleBlur = (event) => {
    const {
      name,
      title,
      minLength,
      maxLength,
      //   validationMessage,
      validity: { valueMissing, patternMismatch, tooLong, tooShort },
    } = event.target;
    // const { valueMissing } = validity;

    let message = '';

    if (patternMismatch) {
      message = `${title} is invalid pattern.`;
    }

    if (tooShort || tooLong) {
      message = `${title} from ${minLength} - ${maxLength} characters.`;
    }

    if (valueMissing) {
      message = `${title} is required.`;
    }

    this.setState({
      errors: {
        ...this.state.errors,
        [name]: message,
      },
    });
  };

  render() {
    const { username, fullName, password, email, phoneNumber, type } =
      this.state.values || {};

    return (
      <div className="card p-0">
        <div className="card-header bg-warning text-white font-weight-bold">
          REGISTER FORM
        </div>
        <div className="card-body">
          <form ref={this.formRef} noValidate onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label>Username</label>
                  <input
                    title="Username"
                    required
                    type="text"
                    name="username"
                    value={username}
                    className="form-control"
                    // onChange={(event) =>  this.handleChange(event)}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  {this.state.errors.username && (
                    <span className="text-danger">
                      {this.state.errors.username}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    title="Full name"
                    required
                    minLength={4}
                    maxLength={12}
                    name="fullName"
                    value={fullName}
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  {this.state.errors.fullName && (
                    <span className="text-danger">
                      {this.state.errors.fullName}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Password</label>
                  <input
                    title="Password"
                    required
                    value={password}
                    name="password"
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  {this.state.errors.password && (
                    <span className="text-danger">
                      {this.state.errors.password}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    required
                    value={phoneNumber}
                    title="Phone number"
                    name="phoneNumber"
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  {this.state.errors.phoneNumber && (
                    <span className="text-danger">
                      {this.state.errors.phoneNumber}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    required
                    name="email"
                    title="Email"
                    value={email}
                    type="text"
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$"
                    className="form-control"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  {this.state.errors.email && (
                    <span className="text-danger">
                      {this.state.errors.email}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Type</label>
                  <select
                    required
                    value={type}
                    name="type"
                    className="form-control"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  >
                    <option>Client</option>
                    <option>Admin</option>
                  </select>
                </div>
              </div>
            </div>
            <button
              disabled={!this.formRef.current?.checkValidity()}
              className="btn btn-warning mr-2"
            >
              SAVE
            </button>
            <button type="reset" className="btn btn-outline-dark">
              RESET
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.userReducer,
  };
};

export default connect(mapStateToProps)(RegisterForm);
