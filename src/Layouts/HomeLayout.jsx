import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderRouter from '../Components/HeaderRouter/HeaderRouter';

export default class HomeLayout extends Component {
  render() {
    return (
      <div>
        <HeaderRouter />
        <div className="py-5">
          <Outlet />
        </div>
        <footer className="bg-light text-center">Designed by Man</footer>
      </div>
    );
  }
}
