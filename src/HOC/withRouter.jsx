import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

// High order component là 1 function nhận vào 1 component và trả ra 1 component mới
export const withRouter = (Component) => {
  // return ra component mới ( function component )
  return (props) => {
    // dùng để chuyển trang
    const navigate = useNavigate();
    // dùng để lấy params trên url
    const params = useParams();
    // dùng để lấy query params trên url
    const [searchParams] = useSearchParams();

    return (
      <Component
        searchParams={searchParams}
        params={params}
        navigate={navigate}
      />
    );
  };
};
