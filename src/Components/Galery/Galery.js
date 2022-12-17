import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import renderPrevButtonlink from "../../images/left_arrow_galer.png";
import renderNextButtonlink from "../../images/right_arrow_galer.png";
import "./Galery.css";

const responsive = {
    0: { items: 1 },
    480: { items: 1 },
    740: { items: 3 },
    1024: { items: 3 },
    1980: { items: 3 },
};

const Galery = () => {
    const [isgaler, setisgaler] = useState(false);
    const [curentphoto, setcurentphoto] = useState({
        id: 1,
        url: "https://mongomons.com/images/c1xhsxuce9.jpg"
    });

    const images = [
        {
            id: 0,
            url: "https://mongomons.com/images/3ditkd8rgj.jpg"
        },
        {
            id: 1,
            url: "https://mongomons.com/images/c1xhsxuce9.jpg"
        },
        {
            id: 2,
            url: "https://mongomons.com/images/ew8mtz1g54.jpg"
        },
        {
            id: 3,
            url: "https://mongomons.com/images/6us815zl47.jpg"
        },
        {
            id: 4,
            url: "https://mongomons.com/images/azdsu6dhet.jpg"
        },
        {
            id: 5,
            url: "https://mongomons.com/images/wtfmuq91wt.jpg"
        },
        {
            id: 6,
            url: "https://mongomons.com/images/gy3y6piayw.jpg"
        },
        {
            id: 7,
            url: "https://mongomons.com/images/uqmpwv0wrw.jpg"
        }
    ]
    const changegalephoto = (arg) => {
        if (arg) {
            if (curentphoto.id + 1 !== images.length) {
                setcurentphoto(images[curentphoto.id + 1]);
            } else {
                setcurentphoto(images[0]);
            }
        } else {
            if (curentphoto.id !== 0) {
                setcurentphoto(images[curentphoto.id - 1]);
            } else {
                setcurentphoto(images[images.length - 1]);
            }
        }
    }
    const items = [
        <div className="item_block" onClick={() => { setisgaler(true); setcurentphoto(images[0]); }}>
            <img src={images[0].url} className="item" alt=""/>
        </div>,
        <div className="item_block" onClick={() => { setisgaler(true); setcurentphoto(images[1]); }}>
            <img src={images[1].url} className="item" alt=""/>
        </div>,
        <div className="item_block" onClick={() => { setisgaler(true); setcurentphoto(images[2]); }}>
            <img src={images[2].url} className="item" alt=""/>
        </div>,
        <div className="item_block" onClick={() => { setisgaler(true); setcurentphoto(images[3]); }}>
            <img src={images[3].url} className="item" alt=""/>
        </div>,
        <div className="item_block" onClick={() => { setisgaler(true); setcurentphoto(images[4]); }}>
            <img src={images[4].url} className="item" alt=""/>
        </div>,
        <div className="item_block" onClick={() => { setisgaler(true); setcurentphoto(images[0]); }}>
            <img src={images[5].url} className="item" alt=""/>
        </div>,
        <div className="item_block" onClick={() => { setisgaler(true); setcurentphoto(images[1]); }}>
            <img src={images[6].url} className="item" alt=""/>
        </div>,
        <div className="item_block" onClick={() => { setisgaler(true); setcurentphoto(images[2]); }}>
            <img src={images[7].url} className="item" alt=""/>
        </div>
    ];
    useEffect(() => {
        if (isgaler) {
            document.body.style.overflowY = "hidden";
            document.body.style.overflowX = "scroll";
        } else {
            document.body.style.overflowY = "scroll";
        }
    }, [isgaler]);
    const divStyle = {
        background: `url("${curentphoto.url}") no-repeat center`,
        width: "700px",
        backgroundSize: "contain",
        alignItems: "center"
    }
    const renderPrevButton = () => {
        if (!isgaler) {
            return <div className="renderPrevButton">
                <img src={renderPrevButtonlink} alt="" className="arrow_galer arrow_galer_fst" />
            </div>;
        }
    };
    const renderNextButton = () => {
        if (!isgaler) {
            return <div className="renderNextButton">
                <img src={renderNextButtonlink} alt="" className="arrow_galer arrow_galer_sc" />
            </div>;
        }
    };

    return (<div className="galerbody">
        <AliceCarousel
            items={items}
            responsive={responsive}
            controlsStrategy="none"
            autoPlay={true}
            autoPlayInterval={5000}
            animationDuration={500}
            autoPlayStrategy="none"
            infinite
            disableDotsControls
            renderPrevButton={renderPrevButton}
            renderNextButton={renderNextButton}
        />
        <div>
            {isgaler && <div className="Custgaler_sec">
                <div className="cust_galer_container">
                    <div className="cust_galer_container_top">
                        <svg onClick={() => { setisgaler(false); }} className="cust_galer_container_top__close" viewBox="0 0 100 100" height="20px">
                            <path
                                d="M95.497 82.93l-32.7-32.7 32.7-32.701a8.992 8.992 0 0 0 0-12.745 8.992 8.992 0 0 0-12.744 0l-32.701 32.7-32.701-32.7a8.992 8.992 0 0 0-12.745 0 8.992 8.992 0 0 0 0 12.745l32.7 32.7-32.7 32.702a8.992 8.992 0 0 0 0 12.744 8.992 8.992 0 0 0 12.745 0l32.7-32.7 32.702 32.7a8.992 8.992 0 0 0 12.744 0c3.506-3.53 3.506-9.239 0-12.744z"></path>
                        </svg>
                    </div>
                    <div className="cust_galer_container_main">
                        <div style={divStyle} className="cust_galer_container_main__photo">
                        </div>
                    </div>
                    <div className="cust_galer_container_bottom">
                        <div className="cust_galer_container_bottom_block">
                            <div className="galer_prev" onClick={() => { changegalephoto(false); }} style={{transform: 'scale(-1, 1'}}>
                                <svg width="49" height="54" viewBox="0 0 49 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow_galer inside">
                                    <path d="M45.25 21.3708C49.5833 23.8727 49.5833 30.1273 45.25 32.6292L10.75 52.5478C6.41666 55.0496 1 51.9223 1 46.9186L1 7.08141C1 2.07771 6.41666 -1.0496 10.75 1.45225L45.25 21.3708Z" fill="#FE7878" stroke="#F77171" />
                                </svg>
                            </div>
                            <div className="galer_next" onClick={() => { changegalephoto(true); }}>
                                <svg width="49" height="54" viewBox="0 0 49 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow_galer inside">
                                    <path d="M45.25 21.3708C49.5833 23.8727 49.5833 30.1273 45.25 32.6292L10.75 52.5478C6.41666 55.0496 1 51.9223 1 46.9186L1 7.08141C1 2.07771 6.41666 -1.0496 10.75 1.45225L45.25 21.3708Z" fill="#FE7878" stroke="#F77171" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    </div>

    )
};

export default Galery;
