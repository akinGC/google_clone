import Image from 'next/image'
import HomeHeader from '../components/HomeHeader'
import HomeInput from '../components/HomeInput'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <div className=' flex justify-end items-center py-5'><HomeHeader /></div>
      <div className=' flex justify-center mt-[50%] sm:mt-24'>
        <img className=' h-24' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png'></img>
      </div>
      <HomeInput/>
     <div className=' absolute bottom-0 min-w-full'> <Footer/></div>
    </div>
  )
}
