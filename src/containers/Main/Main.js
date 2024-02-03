import './Main.css';
import React, { useState } from 'react';
import StartPage from '../../components/StartPage/StartPage';
import PhotoNatali2 from '../../components/PhotoNatali2/PhotoNatali2';
import Page3Crown from '../../components/Page3Crown/Page3Crown';
import PageFour from '../../components/PageFour/PageFour';
import Page5Prescription from '../../components/Page5Prescription/Page5Prescription';
import Page6Business from '../../components/Page6Business/Page6Business';
import Page7Achievements from '../../components/Page7Achievements/Page7Achievements';
import Page8Chess from '../../components/Page8Chess/Page8Chess';
import Page9Fond from '../../components/Page9Fond/Page9Fond';

function Main() {

  const [menu, showMenu] = useState(false);

  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById('aboutMe');
    aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  };

  const scrollToOffers = () => {
    const aboutMeSection = document.getElementById('Offers');
    aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  };

  const scrollToFeedback = () => {
    const aboutMeSection = document.getElementById('Feedback');
    aboutMeSection.scrollIntoView({ behavior: 'smooth' });
  };

  const setMenu = () => {
    showMenu(true);
  };

  const closeMenu = () => {
    showMenu(false);
  };

  return (
    <div className="Main">
      <StartPage
        scrollToAboutMe={scrollToAboutMe}
        scrollToOffers={scrollToOffers}
        scrollToFeedback={scrollToFeedback}
        setMenu={setMenu}
        closeMenu={closeMenu}
        menu={menu}
      />
      <PhotoNatali2 />
      <Page3Crown />
      <PageFour />
      <Page5Prescription />
      <Page6Business />
      <Page7Achievements />
      <Page8Chess />
      <Page9Fond scrollToAboutMe={scrollToAboutMe} scrollToOffers={scrollToOffers} />
    </div>
  );
}

export default Main;
