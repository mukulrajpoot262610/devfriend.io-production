import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const PeopleCover = ({ data }) => {

    const { _id, avatar, name, headline, skill, followers } = data

    let status = 'help'
    const [color, setColor] = useState()
    const [bgColor, setBgColor] = useState()

    useEffect(() => {
        if (status === 'team up') {
            setBgColor('-info-100')
            setColor('-info-900')
        } else if (status === 'Chilling') {
            setBgColor('-normal-100')
            setColor('-normal-900')
        } else {
            setBgColor('-danger-100')
            setColor('-danger-900')
        }
    }, [status])


    return (
        <div className="relative h-card w-card m-4 rounded-2xl border-2 border-secondary-900 flex-col flex items-start">
            <div className={`bg${bgColor} border-2 border${color} px-8 py-4 rounded-full text${color} font-extrabold m-8 mb-8`}>
                {status}
            </div>
            <div className="flex flex-col items-center justify-center w-full">
                <img src={avatar ? avatar : '/man.png'} className="h-48 w-48 rounded-full p-1 mb-4" alt="" />
                <Link href={`/user/${_id}`}>
                    <h1 className="font-bold text-4xl my-4">{name}</h1>
                </Link>
                <p className="text-2xl mb-4">{headline}</p>
            </div>
            <div className="flex flex-wrap justify-center items-center w-full">
                {
                    skill && skill.filter((e, index) => index < 4).map((e, index) => <h3 key={index} className="bg-info-100 border-info-900 border-2 m-1 px-4 py-3 rounded-full text-info-900 font-semibold" >{e}</h3>)
                }
            </div>
            <footer className="absolute py-8 border-t-2 flex items-center justify-between w-full bottom-0 px-8">
                <h2 ><span className="font-semibold">{followers.length}</span> Followers</h2>
                <Link href={`/user/${_id}`}>
                    <h3 className="font-semibold cursor-pointer">View Profile 👉</h3>
                </Link>
            </footer>
        </div>
    )
}

export default PeopleCover
