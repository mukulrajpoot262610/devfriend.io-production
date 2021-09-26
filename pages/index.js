import Head from 'next/head'
import STEPS_DATA from '../public/steps.data'
import StepCover from '../components/StepCover'

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <Head>
        <title>devFriend.io - Learn Programming by building projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mt-20 bg-normal-100 w-full rounded-2xl py-20 flex flex-col justify-center items-center" >
        <h1 className="text-9xl text-center font-black leading-normal">Learn programming by <br />building projects</h1>
        <p className="text-2xl my-20 max-w-prose text-center font-semibold">Improve your programming skills by working on real-world projects. Join our <span>FREE</span> developers community, connect with other developers and share your code to get feedback and become <span className="font-extrabold text-info-900">HERO</span></p>
        <div className="my-8">
          <button className="mx-4 bg-info-900 text-secondary-100 px-8 py-4 rounded-2xl">Start Building Projects</button>
          <button className="mx-4 bg-info-900 text-secondary-100 px-8 py-4 rounded-2xl">Start Finding Partener</button>
        </div>
      </div>

      <div className="mt-20 w-full py-20 flex flex-col justify-center items-center">
        <h2 className="font-bold text-6xl">🚀 How DevFriend.io Works ? 🚀</h2>
        <div className="flex flex-wrap my-20 justify-center items-center">
          {
            STEPS_DATA.map((e) => <StepCover data={e} key={e.id} />)
          }
        </div>
      </div>

      <div className="mt-20 w-full py-20 flex flex-col justify-center items-center">
        <h2 className="font-bold text-6xl text-center leading-normal">🚀 Find Your Challenge and Start Building 🚀</h2>
        <div className="flex flex-wrap my-20 justify-center items-center">
          {
            STEPS_DATA.map((e) => <StepCover data={e} key={e.id} />)
          }
        </div>
        <button className="mx-4 bg-info-900 text-secondary-100 px-8 py-4 rounded-2xl">View More</button>
      </div>

      <div className="mt-20 w-full py-20 flex flex-col justify-center items-center">
        <h2 className="font-bold text-6xl text-center leading-normal">🚀 Find Your Coding Partener and Start Building 🚀</h2>
        <div className="flex flex-wrap my-20 justify-center items-center">
          {
            STEPS_DATA.map((e) => <StepCover data={e} key={e.id} />)
          }
        </div>
        <button className="mx-4 bg-info-900 text-secondary-100 px-8 py-4 rounded-2xl">View More</button>
      </div>

    </div>
  )
}
