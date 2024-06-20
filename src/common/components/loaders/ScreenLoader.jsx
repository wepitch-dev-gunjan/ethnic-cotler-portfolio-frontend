import { ImSpinner9 } from "react-icons/im";
import './style.scss'

const ScreenLoader = () => {
  return (
    <div className='ScreenLoader-container'>
      <div className="spinner">
        <ImSpinner9 size='40' color='blue' />
      </div>
    </div>
  );
};

export default ScreenLoader;