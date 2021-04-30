import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ReactGA from 'react-ga';
import { graphql } from "gatsby";

ReactGA.initialize('UA-177166710-1');

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
    <div className="col-12 text-justify">
      <h2 className="heading2 content white">About </h2>
      <h4>Corey Smaller</h4>
      <p>Bachelors of Science - Exercise Physiology
      </p>
      <p>Almost 30 years experience as a coach and trainer</p>
      <p>AIARE Avalanche Level 1 Certified </p>
      <p>15 years of skiing the Wasatch</p>

    </div>
  );

}

export default function About(props) {

  useEffect(() => {
    if (typeof "window" !== "undefined") {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, [])

  const siteTitle = "About Jackalope Adventures"

  return (
    <>

      <Layout location={props.location} title={siteTitle}>
        <SEO
          title="About"
          keywords={[`jackalope adventures`, `jackalope`, `backcountry skiing`, `utah ski touring`]}
        />
        <MainContainer className="col-12 justify-content-center">
          <MainContent />
        </MainContainer>
      </Layout>
    </>
  );

}