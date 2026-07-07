import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/authSlice.js'
import { useNavigate } from 'react-router-dom'

const Profile = (props) => {
    const accessToken = localStorage.getItem('AccessToken')
    const sessionToken = localStorage.getItem('sessionToken')
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const navPanel = props.navPanel
    const setNavPanel = props.setNavPanel
    const handleLogout = async () => {
        try {
              const result = await dispatch(
                logout()
              )
              navigate("/login");
              console.log("click")
            } catch (error) {
              console.log(error);
            }
    }
    console.log(auth)
  return (
    <div className={`${navPanel?'bottom-18 right-0' : 'top-18'} absolute h-30 w-70 bg-black px-2 rounded-2xl duration-500 font-IMB right-0 flex justify-between`}>
        <div className='flex py-5 px-2 text-white flex-col'>
            <h1 className='font-IMB text-2xl'>{localStorage.getItem('name')}</h1>
            <p className='font-IMB text-sm text-orange-300'>{localStorage.getItem('role')}</p>
            <p className='font-IMB text-sm text-white'>{localStorage.getItem('email')}</p>
        </div>
        <button onClick={handleLogout} className='text-red-500 border text-sm h-1/2 px-2 flex items-center mt-5 mr-2 rounded-2xl hover:bg-red-500 hover:text-white duration-300 cursor-pointer w-1/3 justify-center border-red-500'>
            Log Out
        </button>
    </div>
  )
}

export default Profile