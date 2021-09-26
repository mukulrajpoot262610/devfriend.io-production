import React, { useState } from 'react'
import Link from 'next/link'
import { message, Spin, Badge, Menu, Dropdown } from 'antd';
import { BellOutlined, TeamOutlined, GithubOutlined, UserOutlined, DashboardOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import firebase from '../config/firebase';

const Navbar = () => {

  const dispatch = useDispatch()

  const isAuth = useSelector(state => state.currentUser.isAuth)
  const loading = useSelector(state => state.currentUser.loading)
  const userData = useSelector(state => state.currentUser.userData)
  const userProfile = useSelector(state => state.currentProfile.profileData)

  const handleLogout = async () => {
    await firebase.auth().signOut()
    dispatch({
      type: 'USER_LOGOUT'
    })
    window.location.reload()
    message.success('Logged Out Successfully 🎉')
  }

  const handleLogin = async () => {
    await firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then(user => {
        if (user.additionalUserInfo.isNewUser === true) {
          message.success(`Welcome 🎉 ${user.additionalUserInfo.profile.name}`)
        } else {
          message.success(`Welcome Back 🎉 ${user.additionalUserInfo.profile.name}`)
        }
      }).catch(err => console.log(err.message))
  }

  const menu = (
    <Menu className="w-72 px-4">
      <Menu.Item key="0">
        <div className="flex items-center justify-between my-4">
          <p className="font-semibold">My Profile</p>
          <UserOutlined />
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <div className="flex items-center justify-between my-4">
          <p className="font-semibold">Dashboard</p>
          <DashboardOutlined />
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <div className="flex items-center justify-between my-4">
          <p className="font-semibold">Setting</p>
          <SettingOutlined />
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="4">
        <div className="flex items-center justify-between my-4" onClick={handleLogout}>
          <p className="font-semibold">LogOut</p>
          <LogoutOutlined />
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="fixed z-50 top-0 h-24 w-full px-8 md:px-20 backdrop-blur flex items-center justify-center">
      <div className="w-full mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <a className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-16 cursor-pointer" />
              <div className="mx-4">
                <h1 className="text-2xl font-black cursor-pointer">DEV<span className="text-info-900">Friend</span>.io</h1>
                <h4 className="font-semibold text-sm cursor-pointer">By Mukul Rajpoot</h4>
              </div>
            </a>
          </Link>
        </div>
        <div>
          <h1>{"KEY " + process.env.NEXT_PUBLIC_FIREBASE_API_KEY}</h1>
          {console.log('API_KEY', process.env.NEXT_PUBLIC_FIREBASE_API_KEY)}
        </div>
        {
          loading ? <Spin /> : (
            isAuth ? (
              <div className="flex items-center">
                <Badge count={2} className="mx-4 cursor-pointer">
                  <TeamOutlined className="text-4xl" />
                </Badge>
                <Badge count={2} className="mx-4 cursor-pointer">
                  <BellOutlined className="text-4xl" />
                </Badge>
                <Dropdown overlay={menu} trigger={['click']}>
                  <img src={userData ? userData.avatar : '/man.png'} alt="" className="h-16 mx-8 rounded-full cursor-pointer" />
                </Dropdown>
              </div>
            ) : (
              <div className="">
                <button className="flex items-center text-xl outline-none font-semibold bg-secondary-900 text-primary px-8 py-4 rounded-xl" onClick={handleLogin}><GithubOutlined />&nbsp;Login With gitHub</button>
              </div>
            )
          )
        }
      </div>
    </div>
  )
}

export default Navbar
