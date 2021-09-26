import React from 'react'

const Footer = () => {
    return (
        <div className="h-half bg-secondary-100 p-20 w-full">
            <div className="w-full h-full flex justify-between items-start">
                <div className="flex items-center">
                    <img src="/logo.png" alt="Logo" className="w-32" />
                    <div className="mx-8">
                        <h1 className="hidden md:flex text-4xl font-black">DEV<span className=" text-info-900">Friend</span>.io</h1>
                        <h4 className=" hidden md:block font-semibold text-sm">Learn programming by building projects</h4>
                    </div>
                </div>

                <div className="mx-4 flex">
                    <section className="hidden md:block mx-4">
                        <h1>Web Development Projects</h1>
                        <h1>Mobile Development Projects</h1>
                        <h1>Python Projects</h1>
                    </section>
                    <section className="mx-4">
                        <h1>Find Mentors</h1>
                        <h1>Become a Mentor</h1>
                        <h1>Contact Us</h1>
                    </section>
                </div>
            </div>
            <div className="">
                <h1 className="font-bold">Made with ❤ by me</h1>
            </div>
        </div>
    )
}

export default Footer
