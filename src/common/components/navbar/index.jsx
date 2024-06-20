import { navbarElements } from '../../../setup/config';
import NavbarElement from './NavbarElement';
import Avatar from './Avatar';
import Search from './Search';
import './style.scss'
import { useContext } from 'react';
import { LayoutContext } from '../../../setup/states/LayoutContext';

const Navbar = ({ logo, search }) => {
  const { setProfileMenuEnable } = useContext(LayoutContext)
  return (
    <div className='Navbar-container'>
      <div className="left">
        <div className="logo">{logo}</div>
      </div>
      <div className="right">
        {navbarElements.map((el, i) => (
          <NavbarElement text={el.text} onClick={el.onClick} key={i} />
        ))}
        {search && <Search />}
        <Avatar
          src="https://scontent.fjai10-1.fna.fbcdn.net/v/t39.30808-1/300586779_455481446598868_383058410155051114_n.png?stp=dst-png_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Fq8n_gCR004Q7kNvgFxd37U&_nc_ht=scontent.fjai10-1.fna&oh=00_AYA60ruVqQrt6LS9L9q2bf69xAWWYwlCxToP4bQUYRnptg&oe=6676ECE3"
          onClick={() => setProfileMenuEnable(true)}
        />
      </div>
    </div>
  );
};

export default Navbar;