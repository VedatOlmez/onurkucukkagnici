import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import InstagramIcon from '@static/icons/instagram.svg';

const SOCIAL = [
  {
    icon: InstagramIcon,
    link: 'https://www.instagram.com/onur.kucukkagnici',
  },
];

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        art_pot: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "customers_pot" }
        ) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <FooterWrapper>
          <StyledContainer>
              <Copyright>
              <h2>İLETİŞİM</h2>
              <div>
                <p>
                  <b>Adres</b><br />
                  <a href='https://g.page/dishekimikonya?share'>
                  Yeni Meram Cad. No: 33A<br />Meram, Konya<br />
                  </a>
                  <br /><b>Telefon</b>
                  <br /><a href="tel://+903323200404">0(332) 320 04 04</a><br />
                  <a href="tel://+905442330177">0(544) 233 01 77</a>
                </p>
              </div>
              <br></br>
              <span>
                SEO Uzmanı - 
                {` `}
                <ExternalLink href="https://www.vedatolmez.com/">
                  <b>Vedat Ölmez</b>
                </ExternalLink>
              </span>
            </Copyright>
            <SocialIcons>
              {SOCIAL.map(({ icon, link }) => (
                <ExternalLink key={link} href={link}>
                  <img src={icon} alt="link" />
                </ExternalLink>
              ))}
            </SocialIcons>
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
    )}
  />
);

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Art = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 48px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
