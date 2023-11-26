import Wrapper from "./assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from "./assets/not-found.svg";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not Found" />
          <h3>oops!</h3>
          <p>We cant find the page you are looking for</p>
          <Link to="/">Back</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h3>Something went Wrong</h3>
      </div>
    </Wrapper>
  );
};

export default Error;
