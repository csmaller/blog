import React, { useEffect } from "react"
import styled from "styled-components";
import HeroImage from "../../content/assets/superior_rectangle.png";
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactGA from 'react-ga';
ReactGA.initialize(process.env.GOOGLE_ID);

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

    @media(max-width:765px){
      width:100%;
      padding: 10px;
    }
  }
`;

function MainContent() {
  return (
    <div id="divOverlay" data-overlay-display="True" className="overlay bg-primary">
      <h2 className="heading2 content white" >Welcome to Jackalope Adventures</h2>
      <p>Whether it's learning skills on the mountain bike, 
          training hard for that big race, 
          learning how to rock climb,
          finding the deep untracked lines,
          or exploring one of the many great ski resorts in the Wasatch 
          Jackalope Adventures will be your guide.
          
      </p>
    </div>
  );
}

export default function IndexPage(props) {

  useEffect(() => {
    if (typeof "window" !== "undefined") {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, [])

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
