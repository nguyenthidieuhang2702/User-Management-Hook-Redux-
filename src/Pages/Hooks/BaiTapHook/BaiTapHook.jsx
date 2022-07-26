import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  setDistrictsAction,
  setProvincesAction,
} from '../../../Store/actions/hook';
import { GlobalContext } from '../../../Contexts/GlobalContext';

export default function BaiTapUseHook() {
  const dispatch = useDispatch();
  const hookState = useSelector((state) => state.hookReducer);
  const [state, setState] = useState({
    province: '',
    district: '',
  });
  const [filteredDistricts, setFilteredDistricts] = useState([]);
  const [globalState] = useContext(GlobalContext);

  useEffect(() => {
    console.log(globalState);
    fetchProvinces();
    fetchDistricts();
  }, []);

  useEffect(() => {
    const data = hookState.districts.filter((ele) => {
      return ele.provinceId === +state.province;
    });

    setFilteredDistricts(data);
  }, [state.province]);

  const fetchProvinces = () => {
    if (hookState.provinces.length > 0) {
      return;
    }

    dispatch(setProvincesAction());
  };

  const fetchDistricts = () => {
    if (hookState.districts.length > 0) {
      return;
    }

    dispatch(setDistrictsAction());
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state, // giữ lại dữ liệu cũ trước khi thêm giá trị mới thông qua spread operator
      [name]: value,
    });
  };

  return (
    <form className="d-flex mx-auto w-50">
      <div className="form-group mr-2 mb-0" style={{ minWidth: '40%' }}>
        <label>Thành phố</label>
        <select
          name="province"
          onChange={handleChange}
          className="form-control"
        >
          <option>Chọn thành phố</option>
          {hookState.provinces.map((ele) => {
            return (
              <option key={ele.id} value={ele.id}>
                {ele.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-group mr-2 mb-0" style={{ minWidth: '40%' }}>
        <label>Quận</label>
        <select
          name="district"
          onChange={handleChange}
          className="form-control"
        >
          <option>Chọn quận</option>
          {filteredDistricts.map((ele) => {
            return (
              <option key={ele.id} value={ele.id}>
                {ele.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-group">
        <label className="d-block">&nbsp;</label>
        <button className="btn btn-info">SEARCH</button>
      </div>
    </form>
  );
}
