import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [Profile, setProfile] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  const toggleProfile = () => {
    setProfile(!Profile);
    console.log("Toggle Profile State: ", Profile);
  };

  return (
    <div className='relative'>
      <div className='absolute z-10 flex justify-between items-center w-full p-5'>
        <img
          className='w-44 brightness-100'
          src={`${process.env.PUBLIC_URL}/Assets/netflix-logo.png`}
          alt='Netflix Logo'
        />
        {user && (
          <img
            src={`${process.env.PUBLIC_URL}/Assets/user.png`}
            alt='User Logo'
            className='w-[30px] h-[30px] cursor-pointer z-50 '
            onClick={toggleProfile} 
          />
        )}
      </div>
      {Profile && (
        <div className='absolute z-40 right-0 mt-20 mr-5 bg-black p-4 rounded-md w-max '>
          <h3 className='text-white py-1'>{user.displayName}</h3>
          <hr></hr>
          <button
            className='text-white font-semibold'
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
