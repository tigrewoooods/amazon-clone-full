import React from 'react';
import { ReactDOM } from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./Home.css";
import { Carousel, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Carousel1 from "../images/StreetFighterBackground.png";
import Carousel2 from "../images/NbaBackground.png";
import Carousel3 from "../images/MaddenBackground.png";
import Carousel4 from "../images/SmashBrosBackground.png";
import Carousel5 from "../images/CivBackground.png";
import Risky from "../images/GlorySlim.png";
import ArtemisFowl from "../images/ArtemisFowl.png";
import MobyDick from "../images/MobyDick.png";
import Adventure from "../images/adventure.png";
import Dictionaries from "../images/dictionaries.png";
import Fantasy from "../images/fantasy.png";
import Horror from "../images/horror.png";
import Flame from "../images/flame.png";
import Balance from "../images/Balance.png";
import ModerateSlim from "../images/ModerateSlim.png";
import SafeSlim from "../images/SafeSlim.png";
import Pillow from "../images/Pillow.png";



const carousel = [Carousel1,Carousel2,Carousel3,Carousel4,Carousel5];
const catCard = [Adventure, Fantasy,Horror,Dictionaries];
const Home = () => {
const { Meta } = Card;

return(
  <>
  <div className="container">
    <Header/>
    <Carousel autoplay className="carousel">
    {carousel.map((e) => {
        return <img src={e} className="carousel-img" alt="carousel"></img>;
    })}
    </Carousel>

    
  </div>
  </>
)
}

export default Home;
