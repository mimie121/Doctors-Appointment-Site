import React from 'react'
import Header from '../component/Header'
import Speciality from '../component/Speciality'
import TopDoctors from '../component/TopDoctors'
import Banner from '../component/Banner'
import Footer from '../component/Footer'


const Home = () => {
  return (
    <div>
        <Header/>
        <Speciality/>
        <TopDoctors/>
        <Banner/>
       
    </div>
  )
}

export default Home