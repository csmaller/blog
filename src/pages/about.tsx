import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ReactGA from 'react-ga';
import { graphql } from "gatsby";
import Self from "../../content/assets/touring_main.jpeg";

ReactGA.initialize('UA-177166710-1');


const MainContainer = styled.div`

.smaller-font {
  font-size:12px;
}
ul li{
  padding : 0;
  margin: 0;
}

`;

function MainContent() {
  return (
    <div className="row">
      <div className="col-12 col-lg-6 text-justify">
        <h4>Corey Smaller</h4>
        <p className="mt-3 mb-0 font-weight-bold">Masters of Science - Information Technology</p>
        <p className="pl-4 smaller-font">Bentley McCallum School of Business- Waltham, MA </p>
        <p className="mt-3 mb-0 font-weight-bold">Bachelors of Science - Exercise Physiology</p>
        <p className="pl-4 smaller-font">Bridgewater State University - Bridgewater, MA
        </p>
        <p className="mt-3 mb-0 font-weight-bold ">Associates of Arts - Communications</p>
        <p className="pl-4 smaller-font">Dean College - Franklin, MA
        </p>
        <br />
        <ul>
          <li>30 years experience as a coach and trainer</li>
          <li>AIARE Avalanche Level 1 Certified </li>
          <li>15 years of touring the Wasatch Range</li>
        </ul>
      </div>
      <div className="col-12 col-lg-6">
        <img src={Self} className="float-left" />
      </div>
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
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="About"
        keywords={[`jackalope adventures`, `jackalope`, `backcountry skiing`, `utah ski touring`]}
      />
      <MainContainer className="col-12 justify-content-center">
        <MainContent />
      </MainContainer>
    </Layout>
  );

}