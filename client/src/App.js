import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import { Redirect, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'
import HomeSearchBar from './components/SearchBar/SearchBar.jsx'
import { loginUser, verifyUser, removeToken } from './Services/api-helper';
import RoutesContainer from './components/Container/Container'

const App = () => {



  const [currentUser, setCurrentUser] = useState()

  const handleLogin = async (loginData) => {
    const currentUser1 = await loginUser(loginData);
    setCurrentUser(currentUser1)
    return currentUser ? true : false;
  }

  const handleLogout = () => {
    console.log("STRING")
    localStorage.clear();
    setCurrentUser(null)
    removeToken();
    // this.props.history.push('/login');
    window.location.reload()
    console.log(currentUser)
    return <Redirect to='/' />
  }

  const confirmUser = () => {
    const response = verifyUser();
    response.then(v => setCurrentUser(v))
    console.log(currentUser)
  }

  useState(() => {
    confirmUser();    // console.log(currentUser)

  }, [currentUser])
  // console.log(currentUser.watchlist)

  return (
    <div className="App">
      <Header
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      <Route exact path={['/', '/quote/:symbol']} render={(routerProps) =>
        <HomeSearchBar  {...routerProps} />} />


      {/* ./components/Container/Container */}
      <RoutesContainer
        handleLogin={handleLogin}
        currentUser={currentUser}
      />

      <Footer />
    </div>
  );
}

export default App;