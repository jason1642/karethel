import React from 'react';
import styled from 'styled-components'

const Footer = () => {
  const Footer = styled.footer`
    display: flex;
    color: #52e3c2;
    padding: 1.5rem 3rem;
    font-size: 14px;
    justify-content: space-between; 
  `;
  const Links = styled.a`

  `;
  return (
    <Footer>
      ©2020 Jason Cruz, Inc. Some rights reserved.
      |
      <Links>Terms of Use</Links>|
      <Links>Privacy Policy</Links>
      |
      <Links>Third Party Content and Services</Links>
      |
      <Links>Copyright Dispute Policy</Links>
      |
      <Links>Careers</Links>
      |
      <Links>Press</Links>
      |
      <Links>Security</Links>
      |
      <Links>CCPA</Links>
    </Footer>
  );
}

export default Footer;