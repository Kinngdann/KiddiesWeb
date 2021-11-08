import { css } from "@emotion/react";
import ClockLoader from "react-spinners/ClockLoader";
import '../styles/helpers/_loader.scss';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loader = () => {

  const properties = {
    loading: true,
    color: '#2094d2',
    speedMultiplier: 2,
    css: override,
    size: 100
  }  

  return (
      <div className = 'loader'>
        <div className = "sweet-loading">
            <ClockLoader {...properties} />
            <h3> Loading </h3>
      </div>
    </div>
  );
}

export default Loader;