import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="hakkinda">
        <Container>
          <Grid>
            <div>
              <h2>Onur Küçükkağnıcı Kimdir?</h2>
              <p>
              Onur Küçükkağnıcı İstanbul Üniversitesi, Çapa Diş Hekimliği Fakültesi mezunudur. İmplant ve Estetik Diş Hekimliğinde binlerce vaka tedavi etmiştir. Yurtiçinde ve yurtdışında bir çok İmplant ve Estetik Hekimliği eğitimi almıştır.
              </p>
              <br></br>
              <p>
              <p> <b>Randevu İçin</b> <a href="tel://+903128761343">0(332) 320 04 04</a></p>
              </p>
            </div>
            <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Eğitim Hayatı</h2>
              <p>
              Onur KÜÇÜKKAĞNICI ilkokul ve ortaöğretimini Konya’da tamamlamıştır.  ÖSS sınavında %0,7 lik dilimle girdiği  İstanbul Üniversitesi Diş Hekimliği Fakültesi Çapa’da lisans eğitimini tamamladıktan sonra Diş Hekimi olarak çalışmaya başlamıştır.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <p>
              Tekirdağ ili Hayrabolu ilçesinde vatani görevini yerine getirdikten sonra İstanbul’da bir çok klinikte hasta kabul etmiştir. Bu süreçte hem yurt içinde hem de yurt dışında implantoloji, estetik diş hekimliği, diş hekimliğinde yumuşak doku lazer uygulamaları, diş hekimliğinde tam seramik uygulamaları üzerine eğitimler almıştır. 2017 yılında memleketi Konya’ya taşınarak Meram Yeniyol caddesinde  hizmet vermeye başlamıştır.
              </p>
              <br></br>
              <p>
              Konya implant, Konya implant tedavisi ve Konya implant fiyatları konusunda hazırladığımız blog sayfamızı okuyabilirsiniz.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
