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
import Flame from "../images/flame.png";
import Balance from "../images/Balance.png";
import ModerateSlim from "../images/ModerateSlim.png";
import SafeSlim from "../images/SafeSlim.png";
import Pillow from "../images/Pillow.png";



const carousel = [Carousel1,Carousel2,Carousel3,Carousel4,Carousel5];
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
    <div className="cards">  
      <Card
        style={{ width: 400 }}
        cover={
          <img
            alt="example"
            src={Risky}
          />
        }
      >
        <Meta
          avatar={<Avatar src={Flame} />}
          title="Buy Risky Tickets"
          description="Highest Rewards!"
        />
        <Link to="/categories" state={"RiskyTickets"} className="link">
            Shop Now
          </Link>
      </Card>
      <Card
      style={{ width: 400 }}
      cover={
        <img
          alt="example"
          src={ModerateSlim}
        />
      }
    >
      <Meta
        avatar={<Avatar src={Balance} />}
        title="Buy Conservative Tickets"
        description="Reduce your risk while still having lot's of upside!"
      />
      <Link to="/categories" state={"RiskyTickets"} className="link">
          Shop Now
        </Link>
    </Card>
    <Card
      style={{ width: 400 }}
      cover={
        <img
          alt="example"
          src={SafeSlim}
        />
      }
    >
      <Meta
        avatar={<Avatar src={Pillow} />}
        title="Buy Safe Tickets"
        description="Max loss is only 10%!"
      />
      <Link to="/categories" state={"RiskyTickets"} className="link">
          Shop Now
        </Link>
    </Card>
    </div>
  </div>
  </>
)
}

export default Home;
