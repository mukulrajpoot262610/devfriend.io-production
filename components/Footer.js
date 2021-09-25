import React from 'react'

const Footer = () => {
    return (
        <div className="h-half bg-secondary-100 p-20 w-full">
            <div className="w-full h-full flex justify-between items-start">
                <div className="flex items-center">
                    <img src="/logo.png" alt="Logo" className="h-56" />
                    <div className="mx-8">
                        <h1 className="text-6xl font-black">DEV<span className="text-info-900">Friend</span>.io</h1>
                        <h4 className="font-semibold text-xl">Learn programming by building projects</h4>
                    </div>
                </div>

                <div className="mx-8 flex">
                    <section className="mx-8">
                        <h1>Web Development Projects</h1>
                        <h1>Mobile Development Projects</h1>
                        <h1>Python Projects</h1>
                    </section>
                    <section className="mx-8">
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
