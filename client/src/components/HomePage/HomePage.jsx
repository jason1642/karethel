import React from 'react';
import HomePageContentContainer from './HomePageContentContainer';



const HomePage = props => {



  return (
    <div className='home-page-container'>
      <HomePageContentContainer
        currentUser={props.currentUser} />
    </div>
  );
}

export default HomePage;