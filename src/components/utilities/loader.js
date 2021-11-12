import { css } from "@emotion/react";
import ClockLoader from "react-spinners/ClockLoader";
import '../styles/helpers/_loader.scss';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loader = (props) => {

  console.log(props)

  const properties = {
    loading: props.load,
    color: '#2094d2',
    speedMultiplier: 2,
    css: override,
    size: 100
  }  

  return (
      <div className = {properties.loading? 'loader' : 'unload'}>
        <div>
            <ClockLoader {...properties} />
        </div>
    </div>
  );
}

export default Loader;