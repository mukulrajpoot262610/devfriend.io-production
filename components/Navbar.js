import React, { useState } from 'react'
import { message, Spin, Badge } from 'antd';
import { BellOutlined, TeamOutlined, GithubOutlined } from '@ant-design/icons'

const Navbar = () => {

  const [loading, setLoading] = useState(false) //STATE
  const [isAuth, setIsAuth] = useState(false) //STATE

  return (
    <div className="fixed top-0 h-24 w-full px-8 md:px-20 backdrop-blur flex items-center justify-center">
      <div className="w-full mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-16" />
          <div className="mx-4">
            <h1 className="text-2xl font-black">DEV<span className="text-info-900">Friend</span>.io</h1>
            <h4 className="font-semibold text-sm">By Mukul Rajpoot</h4>
          </div>
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
                <img src='/man.png' alt="" className="h-16 mx-8 rounded-full cursor-pointer" />
              </div>
            ) : (
              <div className="">
                <button className="flex items-center text-xl outline-none font-semibold bg-seondary text-primary px-8 py-4 rounded-xl"><GithubOutlined />&nbsp;Login With gitHub</button>
              </div>
            )
          )
        }
      </div>
    </div>
  )
}

export default Navbar
