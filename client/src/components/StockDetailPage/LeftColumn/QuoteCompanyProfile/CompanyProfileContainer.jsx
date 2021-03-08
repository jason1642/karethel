import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Description from './Description';
import SectorIndustryOverview from './SectorIndustryOverview'
import axios from 'axios'

const QuoteCompanyProfile = props => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;
    border-radius: 0 0 20px 20px;
    background-color: #393945;
    color: lightgrey;
  `;

  const [companyProfile, setCompanyProfile] = useState()
  useEffect(() => {
    // API KEY ONE - 
    // const IEX_API_KEY = 'pk_3256652724eb490abdfd234401050f50';

    // API KEY TWO
    const IEX_API_KEY = 'pk_c93669f2ba4f4caab1df2c56cc4ce5fb ';


    const fetchStockData = async () => {
      const response = await axios.get(`https://cloud.iexapis.com/stable/stock/${props.symbol}/company?token=${IEX_API_KEY}`)
      setCompanyProfile(response.data)
    }


    fetchStockData()

  }, [])
  console.log(companyProfile)


  return (
    <Container>
      { companyProfile ? <Description companyProfile={companyProfile} /> : <></>}
      { companyProfile ? <SectorIndustryOverview stockData={props.stockData} companyProfile={companyProfile} /> : <></>}
    </Container>
  );
}

export default QuoteCompanyProfile;