import React from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
    background-image: url(/footer_wave.svg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 250px;
    position: relative;

    span {
    position: absolute;
    bottom: 4rem;
    color: #fff;
    a {
    text-decoration: underline;
    }
    }
`;

function Footer() {
  return (
    <FooterSection>
      <div className="Container" />
    </FooterSection>
  );
}

export default Footer;