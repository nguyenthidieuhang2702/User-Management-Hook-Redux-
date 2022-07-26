import logo from './logo.svg';
import './App.css';
import ClassComponent from './Components/DemoComponent/ClassComponent';
import FunctionComponent from './Components/DemoComponent/FunctionComponent';
// import Home from './Components/BaiTapLayout/Home';
import DataBinding from './Components/DataBinding/DataBinding';
import HandlingEvents from './Components/HandlingEvents/HandlingEvents';
import RenderingWithConditions from './Components/RenderingWithConditions/RenderingWithConditions';
import State from './Components/State/State';
import Styling from './Components/Styling/Styling';
import BaiTapXe from './Components/BaiTapXe/BaiTapXe';
import RenderingWithMap from './Components/RenderingWithMap/RenderingWithMap';
import ParentProps from './Components/Props/ParentProps';
import BaiTapProps from './Components/BaiTapProps/BaiTapProps';
import DemoRedux from './Components/Redux/DemoRedux/Parent';
import BaiTapDienThoaiRedux from './Components/Redux/BaiTapDienThoai/BaiTapDienThoai';
import BaiTapThuDo from './Components/Redux/BaiTapThuDo/BaiTapThuDo';
import LifeCycle from './Components/LifeCycle/LifeCycle';
import BaiTapQuanLyNguoidung from './Components/BaiTapQuanLyNguoiDung/BaiTapQuanLyNguoiDung';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import MovieDetail from './Pages/MovieDetail/MovieDetail';
import HeaderRouter from './Components/HeaderRouter/HeaderRouter';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Router from './router';
import { GlobalContext, GlobalProvider } from './Contexts/GlobalContext';

function App() {
  return (
    <div>
      {/* <ClassComponent></ClassComponent>
      <ClassComponent />
      <FunctionComponent />
      <FunctionComponent /> */}
      {/* <Home /> */}
      {/* <DataBinding /> */}
      {/* <HandlingEvents />
      <hr />
      <RenderingWithConditions />
      <hr />
      <State />
      <hr />
      <Styling />
      <hr />
      <BaiTapXe />
      <hr />
      <RenderingWithMap />
      <hr />
      <ParentProps />
      <hr />
      <BaiTapProps /> */}
      {/* <DemoRedux /> */}
      {/* <BaiTapDienThoaiRedux /> */}
      {/* <BaiTapThuDo /> */}
      {/* <LifeCycle /> */}
      {/* <BaiTapQuanLyNguoidung /> */}
      <GlobalProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
