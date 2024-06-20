import { useNavigate } from "react-router-dom";

const NavbarElement = ({ text, onClick }) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => onClick(navigate)} className='NavbarElement-container'>
      {text}
    </div>
  );
};

export default NavbarElement;