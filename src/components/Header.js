import React, { useEffect } from 'react';
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
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='absolute z-10 flex justify-between items-center w-full p-5'>
      <img
        className='w-44 brightness-100'
        src={`${process.env.PUBLIC_URL}/Assets/netflix-logo.png`}
        alt='Netflix Logo'
      />
      {user && (
        <div className='flex items-center space-x-4'>
          <img
            src={`${process.env.PUBLIC_URL}/Assets/user.png`}
            alt='User Logo'
            className='w-[30px] h-[30px] bg-black'
          />
          <button
            className='font-bold text-white bg-black w-[74px] h-[54px]'
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
