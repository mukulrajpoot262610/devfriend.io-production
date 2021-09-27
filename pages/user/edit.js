import React, { useState } from 'react'
import Head from 'next/head'
import { Form, Steps, message, Input, Button, Spin, Select } from 'antd';
import { UserOutlined, SmileOutlined, UploadOutlined, GithubOutlined, SolutionOutlined } from '@ant-design/icons';

const edit = () => {

	const { Step } = Steps;
	const { TextArea } = Input;
	const { Option } = Select;

	const [formStep, setFormStep] = useState(0)

	const steps = [
		{
			title: 'Personal',
			icon: <UserOutlined />
		},
		{
			title: 'Projects',
			icon: <SolutionOutlined />
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

	const onFinish = (values) => {
		console.log('Success:', values);
		next()
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	console.log(formStep)

	return (
		<div className="flex flex-col items-center min-h-screen p-8">

			<Head>
				<title>devFriend.io - Profile</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="mt-20 h-96 bg-normal-100 w-full rounded-2xl py-20" >
			</div>

			<div className="container w-full min-h-screen">
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
							initialValues={{
								remember: true,
							}}
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
							autoComplete="off"
						>
							<section className="flex flex-col justify-center md:flex-row">
								{/* LEFT */}
								<div className="h-full w-full md:w-1/3 p-4">
									<div className="my-8">
										<label className="text-2xl font-medium">Enter Name</label>
										<Form.Item
											className="w-full"
											name="name"
											rules={[
												{
													required: true,
													message: 'Please input your name!',
												},
											]}
										>
											<Input size="large" placeholder="John Doe..." prefix={<UserOutlined />} className="my-3 w-full" />
										</Form.Item>
									</div>
									<div className="my-8">
										<label className="text-2xl font-medium mb-4">Enter HeadLine</label>
										<Form.Item
											className="w-full"
											name="headline"
											rules={[
												{
													required: true,
													message: 'Please input a bold headline!',
												},
											]}
										>
											<Input size="large" placeholder="React Developer..." prefix={<UserOutlined />} className="my-3" />
										</Form.Item>
									</div>
									<div className="my-8 relative">
										<label className="text-2xl font-medium my-4">About</label>
										<Form.Item
											className="w-full"
											name="about"
											rules={[
												{
													required: true,
													message: 'Please input something about yourself!',
												},
											]}
										>
											<TextArea showCount maxLength={1000} placeholder="I love to do..." className="my-3" />
										</Form.Item>
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
										<Form.Item
											className="w-full"
											name="stack"
											rules={[
												{
													required: true,
													message: 'Please input your tech stack!',
												},
											]}
										>
											<Input size="large" placeholder="MERN" prefix={<UserOutlined />} className="my-3 w-full" />
										</Form.Item>
									</div>
									<div className="my-8">
										<label className="text-2xl font-medium">Enter Skills</label>
										<Form.Item
											className="w-full"
											name="skills"
											rules={[
												{
													required: true,
													message: 'Please input your skills!',
												},
											]}
										>
											<Input size="large" placeholder="React, Nodejs, PHP..." prefix={<UserOutlined />} className="my-3 w-full" />
										</Form.Item>
									</div>
									<div className="flex flex-col">
										<label className="text-2xl font-medium my-4">Enter College Year</label>
										<Form.Item
											className="w-full"
											name="collegeYear"
											rules={[
												{
													required: true,
													message: 'Please select one!',
												},
											]}
										>
											<Select
												className="w-full"
												size='large'
												style={{ width: 200 }}
												placeholder="Select One"
											>
												<Option value="1">1'st Year</Option>
												<Option value="2">2nd Year</Option>
												<Option value="3">3rd Year</Option>
												<Option value="4">4th Year</Option>
												<Option value="school">School</Option>
												<Option value="graduated">Graduated</Option>
											</Select>
										</Form.Item>
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
							onFinishFailed={onFinishFailed}
							autoComplete="off"
						>
							<section className="flex flex-col justify-center md:flex-row">
							</section>
						</Form>
					}

					{/* FORM 3 */}
					{formStep === 2 &&
						<Form
							name="basic"
							initialValues={{
								remember: true,
							}}
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
							autoComplete="off"
						>
							<section className="flex flex-col justify-center md:flex-row">
							</section>
						</Form>
					}
				</div>
			</div>
		</div>
	)
}

export default edit
