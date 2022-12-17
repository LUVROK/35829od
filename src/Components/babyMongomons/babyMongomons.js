import React, { useEffect } from "react";
import './babyMongomons.css'

function BabyMongomons() {
    useEffect(() => {
        let Left;

        const ducksImg = document.querySelectorAll(".babyMongomons_block_one_img");
        const ducksBlock = document.querySelectorAll(".babyMongomons_block_one");
        const ducksImgBack = document.querySelector(".button_left");
        const ducksImgNext = document.querySelector(".button_right");

        const galer_prev = document.querySelector(".galer_prev");
        const galer_next = document.querySelector(".galer_next");

        galer_prev.addEventListener("click", ducksImgSliderNext);
        galer_next.addEventListener("click", ducksImgSliderBack);


        let carusel = 0;
        let caruselBack = 0;
        // let permissionBig = 1880;
        // let permissionLarge = 1400;
        // let permissionMedium = 1000;
        // let permissionSmall = 880;
        let newNumber = 0;
        let newNumberOne = 0;

        ducksImgNext.addEventListener("click", ducksImgSliderBack);
        function ducksImgSliderBack() {
            newNumberNull();

            galer_prev.style.pointerEvents = "none";
            galer_next.style.pointerEvents = "none";
            ducksImgBack.style.display = "none";
            ducksImgNext.style.display = "none";
            setTimeout(function () {
                ducksImgBack.style.display = "flex";
                ducksImgNext.style.display = "flex";
                galer_prev.style.pointerEvents = "auto";
                galer_next.style.pointerEvents = "auto";
            }, 1300);
            
            newNumber++;

            Left = 40 + "%";

            if (caruselBack === 0) {
                for (let i = 0; i < 6; i++) {
                    ducksBlock[i].style.order = 1;
                    ducksBlock[i].style.left = Left;
                    ducksBlock[i].style.transition = "all 1.3s, order 0s";

                    ducksImg[i].classList.remove('active');
                    ducksBlock[i].classList.remove('active');

                    ducksImg[i].classList.remove('leftactive');
                    ducksImg[i].classList.remove('rightactive');
                    ducksBlock[i].classList.remove('rightactive');
                    ducksBlock[i].classList.remove('leftactive');
                }
                ducksImg[2].classList.add('active');
                ducksBlock[2].classList.add('active');

                ducksImg[1].classList.add('leftactive');
                ducksBlock[1].classList.add('leftactive');
                ducksImg[3].classList.add('rightactive');
                ducksBlock[3].classList.add('rightactive');

                caruselBack++;
            }
            else if (caruselBack === 1) {
                for (let i = 0; i < 6; i++) {
                    ducksBlock[i].style.order = 1;
                    ducksBlock[i].style.left = Left;
                    ducksImg[i].classList.remove('active');
                    ducksBlock[i].classList.remove('active');

                    ducksImg[i].classList.remove('leftactive');
                    ducksImg[i].classList.remove('rightactive');
                    ducksBlock[i].classList.remove('rightactive');
                    ducksBlock[i].classList.remove('leftactive');

                    ducksBlock[i].style.transition = "all 1.3s, order 0s";
                }
                ducksImg[3].classList.add('active');
                ducksBlock[3].classList.add('active');

                ducksImg[2].classList.add('leftactive');
                ducksBlock[2].classList.add('leftactive');
                ducksImg[4].classList.add('rightactive');
                ducksBlock[4].classList.add('rightactive');

                caruselBack++;
            }
            else if (caruselBack === 2) {
                for (let i = 0; i < 6; i++) {
                    ducksBlock[i].style.order = 1;
                    ducksBlock[i].style.left = Left;
                    ducksImg[i].classList.remove('active');
                    ducksBlock[i].classList.remove('active');

                    ducksImg[i].classList.remove('leftactive');
                    ducksImg[i].classList.remove('rightactive');
                    ducksBlock[i].classList.remove('rightactive');
                    ducksBlock[i].classList.remove('leftactive');

                    ducksBlock[i].style.transition = "all 1.3s, order 0s";
                }
                ducksImg[4].classList.add('active');
                ducksBlock[4].classList.add('active');

                ducksImg[3].classList.add('leftactive');
                ducksBlock[3].classList.add('leftactive');
                ducksImg[5].classList.add('rightactive');
                ducksBlock[5].classList.add('rightactive');

                ducksBlock[0].style.order = 2;

                caruselBack++;
            }
            else if (caruselBack === 3) {
                for (let i = 0; i < 6; i++) {
                    ducksBlock[i].style.order = 1;
                    ducksBlock[0].style.order = 2;
                    ducksBlock[i].style.left = Left;
                    ducksImg[i].classList.remove('active');
                    ducksBlock[i].classList.remove('active');

                    ducksImg[i].classList.remove('leftactive');
                    ducksImg[i].classList.remove('rightactive');
                    ducksBlock[i].classList.remove('rightactive');
                    ducksBlock[i].classList.remove('leftactive');

                    ducksBlock[i].style.transition = "all 1.3s, order 0s";
                }
                ducksImg[5].classList.add('active');
                ducksBlock[5].classList.add('active');

                ducksImg[4].classList.add('leftactive');
                ducksBlock[4].classList.add('leftactive');
                ducksImg[0].classList.add('rightactive');
                ducksBlock[0].classList.add('rightactive');

                caruselBack++;
            }
            else if (caruselBack === 4) {
                for (let i = 0; i < 6; i++) {
                    ducksBlock[i].style.order = 1;
                    ducksBlock[i].style.left = Left;
                    ducksBlock[0].style.order = 2;
                    ducksBlock[1].style.order = 2;
                    ducksImg[i].classList.remove('active');
                    ducksBlock[i].classList.remove('active');

                    ducksImg[i].classList.remove('leftactive');
                    ducksImg[i].classList.remove('rightactive');
                    ducksBlock[i].classList.remove('rightactive');
                    ducksBlock[i].classList.remove('leftactive');

                    ducksBlock[i].style.transition = "all 1.3s, order 0s";
                }
                ducksImg[0].classList.add('active');
                ducksBlock[0].classList.add('active');

                ducksImg[5].classList.add('leftactive');
                ducksBlock[5].classList.add('leftactive');
                ducksImg[1].classList.add('rightactive');
                ducksBlock[1].classList.add('rightactive');

                caruselBack++;
            }
            else if (caruselBack === 5) {
                for (let i = 0; i < 6; i++) {
                    ducksBlock[2].style.order = 2;
                    ducksBlock[i].style.left = Left;

                    ducksImg[i].classList.remove('active');
                    ducksBlock[i].classList.remove('active');

                    ducksImg[i].classList.remove('leftactive');
                    ducksImg[i].classList.remove('rightactive');
                    ducksBlock[i].classList.remove('rightactive');
                    ducksBlock[i].classList.remove('leftactive');

                    ducksBlock[i].style.transition = "all 1.3s, order 0s";
                }
                ducksImg[1].classList.add('active');
                ducksBlock[1].classList.add('active');

                ducksImg[0].classList.add('leftactive');
                ducksBlock[0].classList.add('leftactive');
                ducksImg[2].classList.add('rightactive');
                ducksBlock[2].classList.add('rightactive');

                caruselBack = 0;
            }
            caruselkNull();
        }

        ducksImgBack.addEventListener("click", ducksImgSliderNext);

        function ducksImgSliderNext() {
            newNumberOneNull();
            galer_prev.style.pointerEvents = "none";
            galer_next.style.pointerEvents = "none";
            ducksImgBack.style.display = "none";
            ducksImgNext.style.display = "none";
            setTimeout(function () {
                ducksImgBack.style.display = "flex";
                ducksImgNext.style.display = "flex";
                galer_prev.style.pointerEvents = "auto";
                galer_next.style.pointerEvents = "auto";
            }, 1300);
            newNumber++;

            Left = 40 + "%";

            if (carusel === 0) {
                for (let i = 0; i < 6; i++) {
                    ducksBlock[i].style.order = 1;
                    ducksBlock[i].style.left = Left;
                    ducksBlock[5].style.order = 0;

                    ducksImg[i].classList.remove('active');
                    ducksBlock[i].classList.remove('active');

                    ducksImg[i].classList.remove('leftactive');
                    ducksImg[i].classList.remove('rightactive');
                    ducksBlock[i].classList.remove('rightactive');
                    ducksBlock[i].classList.remove('leftactive');

                    ducksBlock[i].style.transition = "all 1.3s, order 0s";
                }
                ducksImg[0].classList.add('active');
                ducksBlock[0].classList.add('active');

                ducksImg[5].classList.add('leftactive');
                ducksBlock[5].classList.add('leftactive');
                ducksImg[1].classList.add('rightactive');
                ducksBlock[1].classList.add('rightactive');

                carusel++;
            }
            else if (carusel === 1) {
                for (let i = 0; i < 6; i++) {
                    ducksBlock[i].style.order = 1;
                    ducksBlock[4].style.order = 0;
                    ducksBlock[5].style.order = 0;
                    ducksBlock[i].style.left = Left;

                    ducksImg[i].classList.remove('active');
                    ducksBlock[i].classList.remove('active');

                    ducksImg[i].classList.remove('leftactive');
                    ducksImg[i].classList.remove('rightactive');
                    ducksBlock[i].classList.remove('rightactive');
                    ducksBlock[i].classList.remove('leftactive');

                    ducksBlock[i].style.transition = "all 1.3s, order 0s";
                }
                ducksImg[5].classList.add('active');
                ducksBlock[5].classList.add('active');

                ducksImg[4].classList.add('leftactive');
                ducksBlock[4].classList.add('leftactive');
                ducksImg[0].classList.add('rightactive');
                ducksBlock[0].classList.add('rightactive');

                carusel++;
            }
            else if (carusel === 2) {
                for (let i = 0; i < 6; i++) {
                    ducksBlock[3].style.order = 0;
                    ducksBlock[i].style.left = Left;

                    ducksImg[i].classList.remove('active');
                    ducksBlock[i].classList.remove('active');

                    ducksImg[i].classList.remove('leftactive');
                    ducksImg[i].classList.remove('rightactive');
                    ducksBlock[i].classList.remove('rightactive');
                    ducksBlock[i].classList.remove('leftactive');

                    ducksBlock[i].style.transition = "all 1.3s, order 0s";
                }
                ducksImg[4].classList.add('active');
                ducksBlock[4].classList.add('active');

                ducksImg[3].classList.add('leftactive');
                ducksBlock[3].classList.add('leftactive');
                ducksImg[5].classList.add('rightactive');
                ducksBlock[5].classList.add('rightactive');

                carusel++;
            }
            else if (carusel === 3) {
                for (let i = 0; i < 6; i++) {
                    ducksBlock[i].style.order = 1;
                    ducksBlock[i].style.left = Left;

                    ducksImg[i].classList.remove('active');
                    ducksBlock[i].classList.remove('active');

                    ducksImg[i].classList.remove('leftactive');
                    ducksImg[i].classList.remove('rightactive');
                    ducksBlock[i].classList.remove('rightactive');
                    ducksBlock[i].classList.remove('leftactive');

                    ducksBlock[i].style.transition = "all 1.3s, order 0s";
                }
                ducksImg[3].classList.add('active');
                ducksBlock[3].classList.add('active');

                ducksImg[2].classList.add('leftactive');
                ducksBlock[2].classList.add('leftactive');
                ducksImg[4].classList.add('rightactive');
                ducksBlock[4].classList.add('rightactive');

                carusel++;
            }
            else if (carusel === 4) {
                for (let i = 0; i < 6; i++) {
                    ducksBlock[i].style.order = 1;
                    ducksBlock[i].style.left = Left;

                    ducksImg[i].classList.remove('active');
                    ducksBlock[i].classList.remove('active');

                    ducksImg[i].classList.remove('leftactive');
                    ducksImg[i].classList.remove('rightactive');
                    ducksBlock[i].classList.remove('rightactive');
                    ducksBlock[i].classList.remove('leftactive');

                    ducksBlock[i].style.transition = "all 1.3s, order 0s";
                }
                ducksImg[2].classList.add('active');
                ducksBlock[2].classList.add('active');

                ducksImg[1].classList.add('leftactive');
                ducksBlock[1].classList.add('leftactive');
                ducksImg[3].classList.add('rightactive');
                ducksBlock[3].classList.add('rightactive');

                carusel++;
            }
            else if (carusel === 5) {
                for (let i = 0; i < 6; i++) {
                    ducksBlock[i].style.order = 1;
                    ducksBlock[i].style.left = Left;

                    ducksImg[i].classList.remove('active');
                    ducksBlock[i].classList.remove('active');

                    ducksImg[i].classList.remove('leftactive');
                    ducksImg[i].classList.remove('rightactive');
                    ducksBlock[i].classList.remove('rightactive');
                    ducksBlock[i].classList.remove('leftactive');

                    ducksBlock[i].style.transition = "all 1.3s, order 0s";
                }
                ducksImg[1].classList.add('active');
                ducksBlock[1].classList.add('active');

                ducksImg[0].classList.add('leftactive');
                ducksBlock[0].classList.add('leftactive');
                ducksImg[2].classList.add('rightactive');
                ducksBlock[2].classList.add('rightactive');

                carusel = 0;
            }
            caruselBackNull();
        }


        function newNumberNull() {
            if (newNumber === 0) {
                newNumberOne = 1;
            }
            else if (newNumber === 1) {
                newNumberOne = 5;
            }
            else if (newNumber === 2) {
                newNumberOne = 4;
            }
            else if (newNumber === 3) {
                newNumberOne = 3;
            }
            else if (newNumber === 4) {
                newNumberOne = 2;
            }
            else if (newNumber === 5) {
                newNumberOne = 1;
            }
        };

        function newNumberOneNull() {
            if (newNumberOne === 0) {
                newNumber = 0;
            }
            else if (newNumberOne === 1) {
                newNumber = 5;
            }
            else if (newNumberOne === 2) {
                newNumber = 4;
            }
            else if (newNumberOne === 3) {
                newNumber = 3;
            }
            else if (newNumberOne === 4) {
                newNumber = 2;
            }
            else if (newNumberOne === 5) {
                newNumber = 1;
            }
        };

        function caruselBackNull() {
            if (carusel === 0) {
                caruselBack = 0;
            }
            else if (carusel === 1) {
                caruselBack = 5;
            }
            else if (carusel === 2) {
                caruselBack = 4;
            }
            else if (carusel === 3) {
                caruselBack = 3;
            }
            else if (carusel === 4) {
                caruselBack = 2;
            }
            else if (carusel === 5) {
                caruselBack = 1;
            }
        };

        function caruselkNull() {
            if (caruselBack === 0) {
                carusel = 0;
            }
            else if (caruselBack === 1) {
                carusel = 5;
            }
            else if (caruselBack === 2) {
                carusel = 4;
            }
            else if (caruselBack === 3) {
                carusel = 3;
            }
            else if (caruselBack === 4) {
                carusel = 2;
            }
            else if (caruselBack === 5) {
                carusel = 1;
            }
        };



        const tuchScreen = document.querySelector(".block_babyMongomons_body");
        tuchScreen.addEventListener('touchstart', handleTouchStart, false);
        tuchScreen.addEventListener('touchmove', handleTouchMove, false);

        var xDown = null;
        var yDown = null;

        function handleTouchStart(event) {
            xDown = event.touches[0].clientX;
            yDown = event.touches[0].clientY;
            event.preventDefault();
        };

        function handleTouchMove(evt) {
            if (!xDown || !yDown) {
                return;
            }

            var xUp = evt.touches[0].clientX;
            var yUp = evt.touches[0].clientY;

            var xDiff = xDown - xUp;
            var yDiff = yDown - yUp;
            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                if (xDiff > 0) {
                    ducksImgSliderBack();

                } else {
                    ducksImgSliderNext();
                }
            }
            xDown = null;
            yDown = null;
        }

    }, []);

    const images = [
        {
            id: 0,
            url: "https://mongomons.com/images/yybytjcxcn.jpg"
        },
        {
            id: 1,
            url: "https://mongomons.com/images/7swctd1bqz.jpg"
        },
        {
            id: 2,
            url: "https://mongomons.com/images/aqd23qswwk.jpg"
        },
        {
            id: 3,
            url: "https://mongomons.com/images/7lrek56p3k.jpg"
        },
        {
            id: 4,
            url: "https://mongomons.com/images/l86af4yu7g.jpg"
        },
        {
            id: 5,
            url: "https://mongomons.com/images/bw6tvt0saw.jpg"
        }
    ]

    return (
        <div className="babyMongomons">
            <div className="block_babyMongomons">
                <div className="block_babyMongomons__content">
                    <div className="block_babyMongomons_body">
                        <div className="content_body_babyMongomons">
                            <div className="button_left"></div>
                            <div className="babyMongomons_block_one one leftactive" style={{ order: 1 }}><img src={images[0].url} alt="babyMongomons1" className="babyMongomons_block_one_img leftactive" /></div>
                            <div className="babyMongomons_block_one two active" style={{ order: 1 }}><img src={images[1].url} alt="babyMongomons2" className="babyMongomons_block_one_img active" /></div>
                            <div className="babyMongomons_block_one three rightactive" style={{ order: 1 }}><img src={images[2].url} alt="babyMongomons3" className="babyMongomons_block_one_img rightactive" /></div>
                            <div className="babyMongomons_block_one four" style={{ order: 1 }}><img src={images[3].url} alt="babyMongomons4" className="babyMongomons_block_one_img babyMongomons_block_one_img_four" /></div>
                            <div className="babyMongomons_block_one five" style={{ order: 1 }}><img src={images[4].url} alt="babyMongomons5" className="babyMongomons_block_one_img active" /></div>
                            <div className="babyMongomons_block_one six" style={{ order: 1 }}><img src={images[5].url} alt="babyMongomons6" className="babyMongomons_block_one_img" /></div>
                            <div className="button_right"></div>
                        </div>
                    </div>
                </div>
                <div className="cust_galer_container_bottom babyMongomons_cust_galery">
                    <div className="cust_galer_container_bottom_block">
                        <div className="galer_prev" id="galer_prev" style={{transform: 'scale(-1, 1)'}}>
                            <svg width="49" height="54" viewBox="0 0 49 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow_galer inside">
                                <path d="M45.25 21.3708C49.5833 23.8727 49.5833 30.1273 45.25 32.6292L10.75 52.5478C6.41666 55.0496 1 51.9223 1 46.9186L1 7.08141C1 2.07771 6.41666 -1.0496 10.75 1.45225L45.25 21.3708Z" fill="#FE7878" stroke="#F77171" />
                            </svg>
                        </div>
                        <div className="galer_next" id="galer_next">
                            <svg width="49" height="54" viewBox="0 0 49 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow_galer inside">
                                <path d="M45.25 21.3708C49.5833 23.8727 49.5833 30.1273 45.25 32.6292L10.75 52.5478C6.41666 55.0496 1 51.9223 1 46.9186L1 7.08141C1 2.07771 6.41666 -1.0496 10.75 1.45225L45.25 21.3708Z" fill="#FE7878" stroke="#F77171" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BabyMongomons;