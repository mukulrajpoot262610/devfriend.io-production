import React from 'react'

const StepCover = ({ data }) => {

    const { id, heading, desc, image } = data

    return (
        <div className="h-card w-card m-4 p-8 rounded-2xl border-2 border-secondary-900 flex-col flex items-start">
            <div className="bg-normal-100 border-2 border-normal-900 px-8 py-4 rounded-full text-normal-900 font-extrabold mb-8">Step: {id}</div>
            <img src="/logo.png" alt="" className="w-64 h-auto self-center mb-4" />
            <h1 className="font-bold text-4xl my-4">👉 {heading}</h1>
            <p className="text-2xl my-4">{desc}</p>
        </div>
    )
}

export default StepCover
