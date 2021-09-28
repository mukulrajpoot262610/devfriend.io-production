import React from 'react'
import { useSelector } from 'react-redux';
import { GithubOutlined, TwitterOutlined, LinkedinOutlined, LinkOutlined, SmileOutlined, FacebookOutlined } from '@ant-design/icons'
import { Spin } from 'antd';
import ReactMarkdown from 'react-markdown'

const ProfileView = ({ data }) => {

  console.log(data)
  const { name, headline, github, linkedin, twitter, facebook, wakatime, website, about, collegeYear, stack, skills } = data;
  const currentUser = useSelector(state => state.currentUser.userData)

  const skill = skills.split(',')

  const githubUsername = github.split('/')[3]

  const markdown = `[![GitHub stats](https://github-readme-stats.vercel.app/api?username=${githubUsername}&count_private=true&show_icons=true&show_owner=true)](https://github.com/${githubUsername})`

  const topLang = `[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername})](https://github.com/${githubUsername})`

  const WakaTime = `[![willianrod's wakatime stats](https://github-readme-stats.vercel.app/api/wakatime?username=${githubUsername})](https://github.com/${githubUsername})`

  const pinsRepo = `[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=${githubUsername}&repo=portfolio-2021)](https://github.com/${githubUsername})`

  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <div className="mt-20 h-96 bg-normal-100 w-full rounded-2xl py-20" >
      </div>
      <div className="container w-full min-h-screen">
        {
          Object.keys(currentUser).length ? (
            <>
              <div className="relative flex justify-center sm:justify-start">
                <img src={currentUser.avatar ? currentUser.avatar : "/man.png"} className="absolute -top-36 rounded-full h-80 w-80 self-center" alt="" />
                <div className="mt-52 md:mt-0 md:ml-80 flex flex-col sm:flex-row justify-between items-start w-full px-8 py-4">
                  <div className="flex flex-col items-center sm:items-start w-full sm:w-max">
                    <h1 className="leading-normal font-semibold text-6xl">{name}</h1>
                    <h3 className=" font-semibold text-3xl leading-normal">{headline}</h3>
                    <h3 className="">
                      <span>
                        0
                      </span>
                      &nbsp;Followers
                      | <span>
                        0
                      </span>
                      &nbsp;Following
                    </h3>
                  </div>
                  <div className="flex flex-col justify-between items-center my-8 w-full sm:w-max">
                    <section className='text-6xl'>
                      {
                        github ? <a target="_blank" className="mx-2" href={github}><GithubOutlined /></a> : ""
                      }
                      {
                        wakatime ? <a target="_blank" className="mx-2" href={wakatime}><SmileOutlined /></a> : ""
                      }
                      {
                        facebook ? <a target="_blank" className="mx-2" href={facebook}><FacebookOutlined /></a> : ""
                      }
                      {
                        website ? <a target="_blank" className="mx-2" href={website}><LinkOutlined /></a> : ""
                      }
                      {
                        twitter ? <a target="_blank" className="mx-2" href={twitter}><TwitterOutlined /></a> : ""
                      }
                      {
                        linkedin ? <a target="_blank" className="mx-2" href={linkedin}><LinkedinOutlined /></a> : ""
                      }
                    </section>
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
                    <div className="text-2xl my-4">
                      <ReactMarkdown>
                        {about}
                      </ReactMarkdown>
                    </div>
                  </div>
                  <div className="bg-normal-100 rounded-2xl p-8 my-4">
                    <h1 className="font-bold text-3xl mb-4">GitHub Stats</h1>
                    <hr />
                    <div className="text-2xl my-4">
                      <ReactMarkdown>
                        {markdown}
                      </ReactMarkdown>
                    </div>
                    {
                      wakatime ? (
                        <div className="text-2xl my-4">
                          <ReactMarkdown>
                            {WakaTime}
                          </ReactMarkdown>
                        </div>
                      ) : ""
                    }
                    <div className="text-2xl my-4">
                      <ReactMarkdown>
                        {topLang}
                      </ReactMarkdown>
                    </div>
                  </div>
                  <div className="bg-normal-100 rounded-2xl p-8 my-4">
                    <h1 className="font-bold text-3xl mb-4">Best Projects</h1>
                    <hr />
                    <div className="text-2xl my-4">
                      <ReactMarkdown>
                        {pinsRepo}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
                <div className=" h-full w-full md:w-1/3 p-4">
                  {/* RIGHT */}
                  <div className="bg-normal-100 rounded-2xl p-8 my-4">
                    <h1 className="font-bold text-3xl mb-4">Info</h1>
                    <hr />
                    <div className="flex justify-center items-center">
                      <div className="flex flex-col justify-center items-center bg-primary w-full p-8 rounded-2xl m-4">
                        <p className="text-4xl font-extrabold">{collegeYear}</p>
                        <p className="font-medium uppercase mt-2">Year</p>
                      </div>
                      <div className="flex flex-col justify-center items-center bg-primary w-full p-8 rounded-2xl m-4">
                        <p className="text-4xl font-extrabold">{stack}</p>
                        <p className="font-medium uppercase mt-2">Stack</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-normal-100 rounded-2xl p-8 my-4">
                    <h1 className="font-bold text-3xl mb-4">Skills</h1>
                    <hr />
                    <div className="flex flex-wrap justify-start items-center my-4">
                      {
                        skill.map((e, i) => <h1 key={i} className="bg-info-100 font-bold p-4 px-8 m-2 rounded-2xl border border-info-900">{e}</h1>)
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

export default ProfileView
