import React from 'react';
import ReactTooltip from 'react-tooltip';
import InfoIconSVG from '../../images/infoicon01.svg'
import styled from 'styled-components'

const InfoIcon = () => {
  const InfoIconContainer = styled.div`
  padding-right: 3rem;
`;
  const InfoIcon = styled.img`
    height: 16px;
    width: 16px;
    margin-left: 8px;
    `;
  return (
    <InfoIconContainer>
      <ReactTooltip
        backgroundColor='white'
        textColor='black'
        place='left'
        multiline='true'
        effect='solid'
        html={true} />
      <InfoIcon
        data-offset="{'top': -100}"

        data-html={true}
        data-tip={
          `<div style={{ height: '100px', width: '100px', backgroundColor: 'white', opacity: 1, padding: '1rem' }}>

            <h1 style={{ marginBottom: '0px' }}>What can I search for?</h1>
            <h2>Companies</h2>
            <div>Find companies (stocks) by searching for a ticker or company name.</div>
            <h2>ETFs and Mutual Funds</h2>
            <div>ETFs and Mutual funds represent ways to own a diversified bundle of stocks or other assets.
            </br>
             Find funds by searching for a ticker or company name.</div>
            <h2>Institutional Investors</h2>
            <div>Institutional investors like hedge funds, holding companies, 
          
            and more are required to file their public equity holdings with the SEC.
            </br>
             You can see their disclosed holdings on Atom. Search for institutional investors by name.
            <h2>Sectors</h2>
            You can search for sectors of the market, such as Technology or Airlines, 
            and find pre-made hubs for those sectors created by the Atom team.</div>
            </div>`
        }


        src={InfoIconSVG} alt='' />
    </InfoIconContainer>
  );
}

export default InfoIcon;