import React from "react"
import styled from "styled-components";
import HeroImage from "../../content/assets/superior_rectangle.png";
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactGA from 'react-ga';
ReactGA.initialize('UA-177166710-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const HeroContainer = styled.div`
  background-size: cover;
  padding: 1px 0px 0px 0px;
  position: relative;

  .container-hero-image-background {
    width: 100%;
    height: 100%;
    top: 100px;
    position: absolute;

    .hero-image-source {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;

const MainContainer = styled.div`
  .overlay {
    width: 50%;
    padding: 75px 95px 75px 70px;
    opacity: .9;
    color: white;
  }
`;

function MainContent() {
  return (
    
      <div id="divOverlay" data-overlay-display="True"  class="overlay bg-primary">
        <h2 class="heading2 content white" id="why_mountain_america_3">Welcome to Jackalope Adventures</h2>
      </div>
  )

}
export default function IndexPage(props) {

  const siteTitle = "Jackalope Adventures"

  return (
    <>
      <HeroContainer>
        <div className="container-hero-image-background">
          <img src={HeroImage} className="hero-image-sournce" />
        </div>
      </HeroContainer>

      <Layout location={props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`jackalope adventures`, `jackalope`, `backcountry skiing`, `utah ski touring`]}
        />
        <MainContainer>
          <MainContent />
        </MainContainer>
      </Layout>
    </>
  );

}