import React from 'react'
import Button from '@mui/material/Button';
import { useState } from 'react';

export const MalumotlarCards = () => {
    const [cardHaqida, setCardHaqida] = useState({});
    const CardFun = (val) => {
        setCardHaqida({val})
        console.log(val);
    }
  return (
    <>
        <div className="cardBtn">
            <ul className="cardItem">
                <li className="cardLink"><Button variant="contained">All</Button></li>
                <li className="cardLink"><Button variant="contained">UI/UX</Button></li>
                <li className="cardLink"><Button variant="contained">Logos</Button></li>
                <li className="cardLink"><Button variant="contained">Sales</Button></li>
                <li className="cardLink"><Button variant="contained">Music</Button></li>
                <li className="cardLink"><Button variant="contained">User Interface design</Button></li>
                <li className="cardLink"><Button variant="contained">Mixes</Button></li>
                <li className="cardLink"><Button variant="contained">Lo-fi Music</Button></li>
            </ul>
        </div>
        <div className="cards">
            <div className="cardsBody">
                {
                    Malumot.map((val) => (
                        <div className="card" key={val.id} onClick={()=>CardFun(val)}>
                            <div className="cardHeader">
                                <img src={val.headerImg} alt="" />
                            </div>
                            <div className="cardBody">
                                <div className="cardBogyImg">
                                    <img src={val.imagesUrl} alt="" />
                                </div>
                                <div className="cardText">
                                    <h3>{val.label}</h3>
                                    <h4>{val.text}</h4>
                                    <h4>{val.text2}</h4>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}
export const Malumot = [
    {
        id:0,
        label: "TWICE Alcohol-Free M/V",
        text: "JYP Entertainment",
        text2: "130M views • 1 Month ago",
        headerImg: "./img/yt1.png",
        imagesUrl: "./img/av1.svg"
    },
    {
        id:1,
        label: "Kanye West Sunday Service - Father Stretch My Hands",
        text: "Kanye West",
        text2: "130M views • 1 Month ago",
        headerImg: "./img/yt2.png",
        imagesUrl: "./img/av2.svg"
    },
    {
        id:2,
        label: "Abbot - Visão de Futuro(trap sp)",
        text: "Abbot",
        text2: "130M views • 1 Month ago",
        headerImg: "./img/yt3.png",
        imagesUrl: "./img/av3.svg"
    },
    {
        id:3,
        label: "Luedji Luna - Bom Mesmo É Estar Debaixo D'Água (Álbum Visual)",
        text: "Luedji Luna",
        text2: "130M views • 1 Month ago",
        headerImg: "./img/yt4.png",
        imagesUrl: "./img/av4.svg"
    },
    {
        id:4,
        label: "you know me x steffany gretzinger",
        text: "Joseph Solomon",
        text2: "130M views • 1 Month ago",
        headerImg: "./img/yt5.png",
        imagesUrl: "./img/av5.svg"
    },
    {
        id:5,
        label: "Kanye West Sunday Service - Father Stretch My Hands (Live From Paris...",
        text: "Kanye West",
        text2: "130M views • 1 Month ago",
        headerImg: "./img/yt6.png",
        imagesUrl: "./img/av6.svg"
    },
    {
        id:6,
        label: "Abbot - Visão de Futuro(trap sp)",
        text: "Abbot",
        text2: "130M views • 1 Month ago",
        headerImg: "./img/yt7.png",
        imagesUrl: "./img/av7.svg"
    },
    {
        id:7,
        label: "Luedji Luna - Bom Mesmo É Estar Debaixo D'Água (Álbum Visual)",
        text: "Luedji Luna",
        text2: "130M views • 1 Month ago",
        headerImg: "./img/yt8.png",
        imagesUrl: "./img/av8.svg"
    },    
    {
        id:8,
        label: "Kanye West Sunday Service - Father Stretch My Hands",
        text: "Kanye West",
        text2: "130M views • 1 Month ago",
        headerImg: "./img/yt9.png",
        imagesUrl: "./img/yt9.png"
    },
    {
        id:9,
        label: "Abbot - Visão de Futuro(trap sp)",
        text: "Abbot",
        text2: "130M views • 1 Month ago",
        headerImg: "./img/yt10.png",
        imagesUrl: "./img/yt10.png"
    },
    {
        id:10,
        label: "Luedji Luna - Bom Mesmo É Estar Debaixo D'Água (Álbum Visual)",
        text: "Luedji Luna",
        text2: "130M views • 1 Month ago",
        headerImg: "./img/yt11.png",
        imagesUrl: "./img/yt11.png"
    },
    {
        id:11,
        label: "you know me x steffany gretzinger",
        text: "Joseph Solomon",
        text2: "130M views • 1 Month ago",
        headerImg: "./img/yt12.png",
        imagesUrl: "./img/yt12.png"
    },
    {
        id:12,
        label: "Kanye West Sunday Service - Father Stretch My Hands (Live From Paris...",
        text: "Kanye West",
        text2: "130M views • 1 Month ago",
        headerImg: "./img/yt13.png",
        imagesUrl: "./img/yt13.png"
    },
    {
        id:13,
        label: "Abbot - Visão de Futuro(trap sp)",
        text: "Abbot",
        text2: "130M views • 1 Month ago",
        headerImg: "./img/yt14.png",
        imagesUrl: "./img/yt14.png"
    },
    {
        id:14,
        label: "Luedji Luna - Bom Mesmo É Estar Debaixo D'Água (Álbum Visual)",
        text: "Luedji Luna",
        text2: "130M views • 1 Month ago",
        headerImg: "./img/yt15.png",
        imagesUrl: "./img/yt15.png"
    },
]