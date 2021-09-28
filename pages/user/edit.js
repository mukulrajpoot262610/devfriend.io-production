import React, { useState } from 'react'
import Head from 'next/head'
import { Form, Steps, message, Input, Button, Spin, Select, Space } from 'antd';
import { UserOutlined, LinkedinOutlined, SmileOutlined, TwitterOutlined, LinkOutlined, FacebookOutlined, GithubOutlined, } from '@ant-design/icons';

const edit = () => {

  const { Step } = Steps;
  const { TextArea } = Input;

  const [formStep, setFormStep] = useState(0)
  const [data, setData] = useState({
    name: "",
    headline: "",
    about: "",
    stack: "",
    collegeYear: "",
    skills: "",
    github: "",
    website: "",
    twitter: "",
    linkedin: "",
    facebook: "",
    wakatime: "",
  });

  const steps = [
    {
      title: 'Personal',
      icon: <UserOutlined />
    },
    {
      title: 'Social',
      icon: <GithubOutlined />
    },
    {
      title: 'Submit',
      icon: <SmileOutlined />
    },
  ];

  const next = () => {
    setFormStep(formStep + 1);
  };
  const prev = () => {
    setFormStep(formStep - 1);
  };

  const onFinish = () => {
    next()
  }

  const handleChange = (e) => {
    const { value, name } = e.target;

    setData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    console.log(data)
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-8">

      <Head>
        <title>devFriend.io - Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mt-20 h-96 bg-normal-100 w-full rounded-2xl py-20" >
      </div>

      <div className="container w-full min-h-screen">
        {/* STEPS */}
        <div className="hidden my-8 md:flex items-center">
          <Steps current={formStep}>
            {
              steps.map(item => (
                <Step key={item.title} title={item.title} icon={item.icon} />
              ))
            }
          </Steps>
        </div>

        <div className="my-8 md:hidden">
          <h1 className="font-semibold text-3xl">Personal</h1>
        </div>

        <div className="w-full my-8">
          {/* FORM 1 */}
          {formStep === 0 &&
            <Form
              name="basic"
              onFinish={onFinish}
            >
              <section className="flex flex-col justify-center md:flex-row">
                {/* LEFT */}
                <div className="h-full w-full md:w-1/3 p-4">
                  <div className="my-8">
                    <label className="text-2xl font-medium">Enter Name</label>
                    <Input size="large" name="name" value={data.name} onChange={handleChange} placeholder="John Doe..." prefix={<UserOutlined />} className="my-3 w-full" required />
                  </div>
                  <div className="my-8">
                    <label className="text-2xl font-medium mb-4">Enter HeadLine</label>
                    <Input size="large" name="headline" value={data.headline} onChange={handleChange} placeholder="React Developer..." prefix={<UserOutlined />} className="my-3" required />
                  </div>
                  <div className="my-8 relative">
                    <label className="text-2xl font-medium my-4">About</label>
                    <TextArea showCount name="about" value={data.about} onChange={handleChange} maxLength={1000} placeholder="I love to do..." className="my-3" required />
                    <img src="/markdown.jpg" alt="" className="absolute -bottom-14 left-40 h-auto w-48" />
                  </div>
                  <Button type="primary" htmlType="submit">
                    Next
                  </Button>
                </div>

                {/* RIGHT */}
                <div className="h-full w-full md:w-1/3 p-4">
                  <div className="my-8">
                    <label className="text-2xl font-medium">Enter Tech Stack</label>
                    <Input size="large" name="stack" value={data.stack} onChange={handleChange} placeholder="MERN" prefix={<UserOutlined />} className="my-3 w-full" required />
                  </div>
                  <div className="my-8">
                    <label className="text-2xl font-medium">Enter Skills</label>
                    <Input size="large" name="skills" value={data.skills} onChange={handleChange} placeholder="React, Nodejs, PHP..." prefix={<UserOutlined />} className="my-3 w-full" required />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-2xl font-medium my-4">Enter College Year</label>
                    <select
                      className="w-full border h-16 px-4"
                      size='large'
                      placeholder="Select One"
                      name="collegeYear"
                      value={data.collegeYear}
                      onChange={handleChange}
                    >
                      <option >Select One</option>
                      <option >1'st Year</option>
                      <option >2nd Year</option>
                      <option >3rd Year</option>
                      <option >4th Year</option>
                      <option >School</option>
                      <option >Graduated</option>
                    </select>
                  </div>
                </div>
              </section>
            </Form>
          }

          {/* FORM 2 */}
          {formStep === 1 &&
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <section className="flex flex-col justify-center md:flex-row">
                {/* LEFT */}
                <div className="h-full w-full md:w-1/3 p-4">
                  <div className="my-8">
                    <label className="text-2xl font-medium">GitHub Link</label>
                    <Input size="large" name="github" value={data.github} onChange={handleChange} placeholder="https://github.com/..." prefix={<GithubOutlined />} className="my-3 w-full" required />
                  </div>

                  <div className="my-8">
                    <label className="text-2xl font-medium">LinkedIn Url</label>
                    <Input size="large" name="linkedin" value={data.linkedin} onChange={handleChange} placeholder="https://linkedin.com/..." prefix={<LinkedinOutlined />} className="my-3 w-full" />
                  </div>

                  <div className="my-8">
                    <label className="text-2xl font-medium">Twitter handle</label>
                    <Input size="large" name="twitter" value={data.twitter} onChange={handleChange} placeholder="https://twitter.com/..." prefix={<TwitterOutlined />} className="my-3 w-full" />
                  </div>

                  <Button type="secondary" className="mr-8" onClick={prev}>
                    Previuos
                  </Button>
                  <Button type="primary" htmlType="submit">
                    Next
                  </Button>
                </div>

                {/* RIGHT */}
                <div className="h-full w-full md:w-1/3 p-4">
                  <div className="my-8">
                    <label className="text-2xl font-medium">Portfolio Website</label>
                    <Input size="large" name="website" value={data.website} onChange={handleChange} placeholder="https://" prefix={<LinkOutlined />} className="my-3 w-full" />
                  </div>

                  <div className="my-8">
                    <label className="text-2xl font-medium">Facebook handle</label>
                    <Input size="large" name="facebook" value={data.facebook} onChange={handleChange} placeholder="https://facebook.com/..." prefix={<FacebookOutlined />} className="my-3 w-full" />
                  </div>

                  <div className="my-8">
                    <label className="text-2xl font-medium">WakaTime Username</label>
                    <Input size="large" name="wakatime" value={data.wakatime} onChange={handleChange} placeholder="johndoe123..." prefix={<SmileOutlined />} className="my-3 w-full" />
                  </div>
                </div>
              </section>
            </Form>
          }

          {/* FORM 3 */}
          {formStep === 2 &&
            <section className="flex flex-col justify-center md:flex-row">
              {/* LEFT */}
              <div className="h-full w-full md:w-1/3 p-4">
                <Button type="secondary" className="mr-8" onClick={prev}>
                  Previuos
                </Button>
                <Button type="primary" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>

              {/* RIGHT */}
              <div className="h-full w-full md:w-1/3 p-4">
              </div>
            </section>
          }
        </div>
      </div>
    </div>
  )
}

export default edit
