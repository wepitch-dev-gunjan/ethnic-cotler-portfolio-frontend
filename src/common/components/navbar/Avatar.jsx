const Avatar = ({ src, onClick }) => {
  return (
    <div onClick={onClick} className='Avatar-container'>
      <img className="avatar" src={src} alt="profile" />
    </div>
  );
};

export default Avatar;