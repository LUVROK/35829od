import React from 'react';
import "./Team.css";
import ubisoft from "../../images/Ubisoft.png";
import dreamworks from "../../images/Dreamworks.png";
import Lionsgate from "../../images/LionsGate.png";
const Team = () => {

    return (
        <div className="team">
            <div className="team__wrap">
                <div animateIn="animate__fadeIn" animateOnce={true} className="team_h1">
                    The Team
                </div>
                <div className="team__container">
                    <div animateIn="animate__fadeInLeft" animateOnce={true} className="team__container__item">
                        <div className="profile_photo Eugene">
                        </div>
                        <h2 className="team_card_Title">
                            Alex<br />
                            <div className='team_card_Title_P'>Cummunity Manager</div>
                        </h2>
                    </div>
                    <div animateIn="animate__fadeIn" animateOnce={true} className="team__container__item">
                        <div className="profile_photo Andrey">
                        </div>
                        <h2 className="team_card_Title">
                            Andrew<br />
                            <div className='team_card_Title_P'>3D artist. worked for Dream Works, Lionsgate and Ubisoft</div>
                        </h2>
                    </div>
                    <div animateIn="animate__fadeInRight" animateOnce={true} className="team__container__item">
                        <div className="profile_photo Nikita">
                        </div>
                        <h2 className="team_card_Title">
                            Max<br />
                            <div className='team_card_Title_P'>Designer</div>
                        </h2>
                    </div>
                </div>
                <div className="team__container secrow">
                    <div animateIn="animate__fadeInLeft" animateOnce={true} className="team__container__item">
                        <div className="profile_photo Anton">
                        </div>
                        <h2 className="team_card_Title">
                            Arthurr<br />
                            <div className='team_card_Title_P'>Head moderato</div>
                        </h2>
                    </div>
                    <div animateIn="animate__fadeIn" animateOnce={true} className="team__container__item">
                        <div className="profile_photo RTZ">
                        </div>
                        <h2 className="team_card_Title">
                            Antony<br />
                            <div className='team_card_Title_P'>Smart-contract developer</div>
                        </h2>
                    </div>
                </div>
            </div>
            <div className="companies">
                <img src={ubisoft} alt="" className="ubisoft" />
                <img src={dreamworks} alt="" className="dreamworks" />
                <img src={Lionsgate} alt="" className="Lionsgate" />
            </div>
        </div>
    )
};

export default Team;
