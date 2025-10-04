import React from 'react'
import Header from '../components/Home/Header';
import AboutHeader from '../components/Home/AboutHeader';
import PrivateEvents from '../components/Home/PrivateEvents';
import MainMenu from '../components/Home/MainMenu';
import FindUs from '../components/Home/Findus';


const Home = () => {
    return (
        <div>
            <Header />
            <AboutHeader />
            <MainMenu />
            <PrivateEvents />
            <FindUs />
        </div>
    )
}

export default Home
