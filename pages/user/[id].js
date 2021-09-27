import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { message, Spin } from 'antd'
import { GithubOutlined, TwitterOutlined, LinkedinOutlined, LinkOutlined, InstagramOutlined, FacebookOutlined, RedEnvelopeOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import ReactMarkdown from 'react-markdown'

const UserDetail = () => {

  const router = useRouter()
  const { id } = router.query

  const profileData = useSelector(state => state.currentProfile.profileData)
  const isAuth = useSelector(state => state.currentUser.isAuth)

  const [follow, setFollow] = useState()
  const [userProfile, setUserProfile] = useState()
  const [connectLoading, setConnectLoading] = useState(false)
  const [followLoading, setFollowLoading] = useState(false)

  const githubUsername = userProfile && userProfile.github.split('/')[3]

  const markdown = `[![GitHub stats](https://github-readme-stats.vercel.app/api?username=${githubUsername}&count_private=true&show_icons=true&show_owner=true)](https://github.com/${githubUsername}/github-readme-stats)`

  const pinsRepo = `[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername})](https://github.com/${githubUsername}/github-readme-stats)`

  const WakaTime = `[![willianrod's wakatime stats](https://github-readme-stats.vercel.app/api/wakatime?username=${githubUsername})](https://github.com/${githubUsername}/github-readme-stats)
`

  const fetchProfile = async () => {
    try {
      const res = await fetch(`/api/profile/${id}`, {
        method: 'GET',
        headers: {
          id: id
        }
      })

      const data = await res.json()

      if (res.status === 400) {
        message.error('Error !!')
      } else {
        setFollow(data.profile.followers)
        setUserProfile(data.profile)
      }
    } catch (err) {
      console.log('API', err.message)
    }
  }


  useEffect(() => {
    id && fetchProfile()
  }, [id])

  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <Head>
        <title>devFriend.io - Learn Programming by building projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mt-20 h-96 bg-normal-100 w-full rounded-2xl py-20" >
      </div>

      <div className="container w-full min-h-screen">
        {
          userProfile ? (
            <>
              <div className="relative flex justify-center sm:justify-start">
                <img src={userProfile.avatar ? userProfile.avatar : "/images/man.png"} className="absolute -top-36 rounded-full h-80 w-80 self-center" alt="" />
                <div className="mt-52 md:mt-0 md:ml-80 flex flex-col sm:flex-row justify-between items-start w-full px-8 py-4">
                  <div className="flex flex-col items-center sm:items-start w-full sm:w-max">
                    <h1 className="leading-normal font-semibold text-6xl">{userProfile.name}</h1>
                    <h3 className=" font-semibold text-3xl leading-normal">{userProfile.headline}</h3>
                    <h3 className="">
                      <span>
                        {follow && follow.length}
                      </span>
                      &nbsp;Followers
                      | <span>
                        {userProfile.following.length}
                      </span>
                      &nbsp;Following
                    </h3>
                  </div>
                  <div className="flex flex-col justify-between items-center my-8 w-full sm:w-max">
                    <section className='text-6xl'>
                      {
                        userProfile.github ? <a target="_blank" className="mx-2" href={userProfile.github}><GithubOutlined /></a> : ""
                      }
                      {
                        userProfile.instagram ? <a target="_blank" className="mx-2" href={userProfile.instagram}><InstagramOutlined /></a> : ""
                      }
                      {
                        userProfile.facebook ? <a target="_blank" className="mx-2" href={userProfile.facebook}><FacebookOutlined /></a> : ""
                      }
                      {
                        userProfile.website ? <a target="_blank" className="mx-2" href={userProfile.website}><LinkOutlined /></a> : ""
                      }
                      {
                        userProfile.twitter ? <a target="_blank" className="mx-2" href={userProfile.twitter}><TwitterOutlined /></a> : ""
                      }
                      {
                        userProfile.linkedin ? <a target="_blank" className="mx-2" href={userProfile.linkedin}><LinkedinOutlined /></a> : ""
                      }
                    </section>
                    {
                      (profileData._id === id) ? <button className="py-4 px-8 rounded-2xl bg-info-900 text-secondary-100 my-4 w-full">Edit Profile</button> : (
                        <section>
                          {
                            profileData.connections?.find((e) => e.user === userProfile._id) ? (
                              <button className="py-4 px-8 rounded-2xl bg-info-900 text-secondary-100 my-4 mx-4">Chat</button>
                            ) : (
                              <>
                                {
                                  connectLoading ? <button><Spin size="small" /></button> : <button className="py-4 px-8 rounded-2xl bg-info-900 text-secondary-100 my-4 mx-4">Connect</button>
                                }
                              </>
                            )
                          }

                          {
                            followLoading ? <button className="following"><Spin size="small" /></button> : (
                              follow && follow.find((e) => e.user === profileData._id) ?
                                <button
                                  className="py-4 px-8 rounded-2xl text-info-900 bg-info-100 my-4 font-medium border border-info-900"
                                  disabled={!isAuth}
                                >
                                  Following
                                </button>
                                :
                                <button
                                  className="py-4 px-8 rounded-2xl bg-info-900 text-secondary-100 my-4"
                                  disabled={!isAuth}
                                >
                                  Follow
                                </button>)
                          }
                        </section>
                      )
                    }
                  </div>
                </div>
              </div>

              {/* PROFILE */}
              <div className="w-full flex flex-col md:flex-row">
                <div className="h-full w-full md:w-2/3 p-4">
                  {/* LEFT */}
                  <div className="bg-normal-100 rounded-2xl p-8 my-4">
                    <h1 className="font-bold text-3xl mb-4">About</h1>
                    <hr />
                    <p className="text-2xl my-4">
                      <ReactMarkdown>
                        {userProfile.about}
                      </ReactMarkdown>
                    </p>
                  </div>
                  <div className="bg-normal-100 rounded-2xl p-8 my-4">
                    <h1 className="font-bold text-3xl mb-4">GitHub Stats</h1>
                    <hr />
                    <p className="text-2xl my-4">
                      <ReactMarkdown>
                        {markdown}
                      </ReactMarkdown>
                    </p>
                    <p className="text-2xl my-4">
                      <ReactMarkdown>
                        {WakaTime}
                      </ReactMarkdown>
                    </p>
                    <p className="text-2xl my-4">
                      <ReactMarkdown>
                        {pinsRepo}
                      </ReactMarkdown>
                    </p>
                  </div>
                  <div className="bg-normal-100 rounded-2xl p-8 my-4">
                    <h1 className="font-bold text-3xl mb-4">Best Projects</h1>
                    <hr />
                    <p className="text-2xl my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique porro praesentium sunt vitae minus inventore necessitatibus? Fugit facilis ut reiciendis consequatur! Expedita atque dolorum dolor, praesentium iure enim optio repudiandae!</p>
                  </div>
                </div>
                <div className=" h-full w-full md:w-1/3 p-4">
                  {/* RIGHT */}
                  <div className="bg-normal-100 rounded-2xl p-8 my-4">
                    <h1 className="font-bold text-3xl mb-4">Info</h1>
                    <hr />
                    <div className="flex justify-center items-center">
                      <div className="flex flex-col justify-center items-center bg-primary w-full p-8 rounded-2xl m-4">
                        <p className="text-4xl font-extrabold">{userProfile.collegeYear}</p>
                        <p className="font-medium uppercase mt-2">Year</p>
                      </div>
                      <div className="flex flex-col justify-center items-center bg-primary w-full p-8 rounded-2xl m-4">
                        <p className="text-4xl font-extrabold">{userProfile.stack}</p>
                        <p className="font-medium uppercase mt-2">Stack</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-normal-100 rounded-2xl p-8 my-4">
                    <h1 className="font-bold text-3xl mb-4">Skills</h1>
                    <hr />
                    <div className="flex flex-wrap justify-start items-center my-4">
                      {
                        userProfile.skill.map((e, i) => <h1 key={i} className="bg-info-100 font-bold p-4 px-8 m-2 rounded-2xl border border-info-900">{e}</h1>)
                      }
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className='w-full flex justify-center items-center h-half'>
              <Spin size="large" />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default UserDetail
