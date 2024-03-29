import './StartPage.css';
import React from 'react';
import Natali from '../../assets/page1/Natali.webp';

const StartPage = ({ scrollToAboutMe, scrollToOffers, scrollToFeedback, setMenu, closeMenu, menu }) => {

    const setFaceBook = (event) => {
        event.preventDefault()
        window.location.href = 'https://www.facebook.com/natali.aktibaeva';
    }

    const setInstagram = (event) => {
        event.preventDefault()
        window.location.href = 'https://www.instagram.com/aktybaieva/';
    }

    return (
        <div className='start__page__wrap'>
            <div className='start__page__head'>
                <ul className='start-ul-head'>
                    <li className='logo-img'>
                    </li>
                    <li>
                        <ul className='start-head-center'>
                            <li className='head-center-li'><button className='start-head-link' onClick={scrollToAboutMe} >Про мене</button></li>
                            <li className='head-center-li'><button className='start-head-link' onClick={scrollToOffers}>Пропозиції</button></li>
                            <li className='head-center-li'><button className='start-head-link' onClick={scrollToFeedback}>Зворотній зв`язок</button></li>
                        </ul>
                    </li>
                    <li className='start-head-right'>
                        <button className='start__burger__button' onClick={setMenu}>
                            <div className="burger-menu">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                        </button>
                        <button className='start-link-profile1' onClick={setFaceBook}></button>
                        <button className='start-link-profile2' onClick={setInstagram}></button>
                    </li>
                </ul>
            </div>
            <div className='start__page__body'>
                <ul className='start-body-left'>
                    <li id='body-first-li'>Наталія<br />Актибаєва</li>
                    <li id='body-second-li'>креативний пiдпри<span className='shrift__c'>с<span className='shrift__є' id='span2__page1'>~</span></span>мець</li>
                    <li id='body-third-li'>Вмію робити з ідеї працюючий бізнес</li>
                    <button className='start__body__button' onClick={scrollToFeedback}>Консультація</button>
                </ul>
                <div className={menu ? 'start__burger__menu' : 'start__burger__close'}>
                    <button className='start__burger__text' onClick={scrollToOffers}>Пропозиції</button>
                    <button className='start__burger__text' onClick={scrollToAboutMe}>Про мене</button>
                    <button className='start__burger__x' onClick={closeMenu}><div className='start__img__x'>&#10006;</div></button>
                </div>
                <div className='start__body_background'>
                </div>
                <div className='start-body-right'>
                    <img className='natali-logo' src={Natali} alt="logo" />
                    <img className='natali-logo__adapt' src={Natali} alt="logo" />
                </div>
            </div>
        </div >
    )
}


export default StartPage;