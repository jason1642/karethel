import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import FeedHeader from '../../HomePage/RightColumn/FeedHeader.jsx'
import FeedMain from '../../HomePage/RightColumn/FeedMain.jsx'
import axios from 'axios'

const Feed = props => {

  const Container = styled.div`
    
  `;

  const [newsApiData, setNewsApiData] = useState([])

  useEffect(() => {
    // const NEWSAPI_KEY = 'cce7827002dc4aacac0aa05b70ad0f33'
    // const NEWSAPI_KEY_TWO = '1fae1394978c433199f7c1279bd1cae4'

    const BING_NEWS_API_KEY = '99c7685635msh8ab852673ebd9c8p11222bjsnf6f124405f1c'

    // const fetchNewsData = async () => {
    //   const response = await axios.get(`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${NEWSAPI_KEY_TWO}`)
    //   console.log(response)
    //   setNewsApiData(response.data.articles)
    // }
    const fetchNewsData = async () => {

      axios({
        "method": "GET",
        "url": "https://bing-news-search1.p.rapidapi.com/news/search",
        "headers": {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
          "x-rapidapi-key": BING_NEWS_API_KEY,
          "x-bingapis-sdk": "true",
          "useQueryString": true
        }, "params": {
          "freshness": "Day",
          "textFormat": "Raw",
          "safeSearch": "Off",
          "q": props.symbol
        }
      })
        .then((response) => {
          console.log(response)
          setNewsApiData(response.data.value)
        })
        .catch((error) => {
          console.log(error)
        })

    }
    fetchNewsData()

  }, [])
  return (
    <Container>
      <FeedHeader />
      <FeedMain
        businessNews={newsApiData}
      />
    </Container>
  )
}

export default Feed