import { useContext, useRef } from "react";
import "./style.scss"
import useClickOutside from "../../../hooks/useClickOutside";
import { LayoutContext } from "../../../../setup/states/LayoutContext";

const ProfileMenu = () => {
  const profileMenuRef = useRef(null)
  const { setProfileMenuEnable } = useContext(LayoutContext)

  useClickOutside(profileMenuRef, () => {
    setProfileMenuEnable(false)
  })
  return (
    <div ref={profileMenuRef} className='ProfileMenu-container'>
      ProfileMenu
    </div>
  );
};

export default ProfileMenu;