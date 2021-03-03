import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import { Redirect, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'
import HomeSearchBar from './components/SearchBar/SearchBar.jsx'
import { loginUser, registerUser, getAllPosts, verifyUser, removeToken } from './Services/api-helper';
import RoutesContainer from './components/Container/Container'
import SearchBar from './components/SearchBar/SearchBar'

const App = () => {

  useEffect(() => {
    //25 most active stock info
    // const fetchStockData1 = async () => {
    //   const FMP_API_KEY = '0dafce6ce2fa49c8f0acd0ac316dfa33';
    //   const TIINGO_API_KEY = '458b98b2a987d2fba65f5be43ca8f1090488992b';
    //   const STOCK_API_KEY = "sk_6c78c6836d0240f585f888b8e84ef757"
    //   const responseTwo = await axios(`https://cloud.iexapis.com/stable/stock/market/list/mostactive?listLimit=25&token=${STOCK_API_KEY}`)
    //   console.log(responseTwo)
    //   setStockApiDataIexapis(responseTwo.data)
    //   const response1 = await axios('https://finnhub.io/api/v1/stock/profile2?symbol=SPY&token=brlva87rh5re8ma1oe5g')
    // }
  }, []
  )
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
      <HomeSearchBar />


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