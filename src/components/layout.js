import React from "react"
import { Link } from "gatsby";
import { Button } from "react-bootstrap";
import "../../style.scss";
import Logo from "../../content/assets/logo_no_bg.png";
import styled from "styled-components";
import { SocialIcon } from 'react-social-icons'

import { Container } from "react-bootstrap";

export default function Layout(props) {

  const { location, title, children, background } = props
  const rootPath = `${__PATH_PREFIX__}/`
  const blogPath = `${__PATH_PREFIX__}/blog/`

  function Header() {
    return (
      <>
        <div className="col-lg-1 col-4">
          <Link to={location.pathname === blogPath ? `/` : `/`} >
            <img src={Logo} class="float-left" />
          </Link>
        </div>
        <nav className="col-lg-11 col-8 mb-4 mt-0 justify-content-left bg-primary mt-4 p-0">
          <Link to="/" disabled={location.pathname === "/"}>
            <Button marginTop="35px">Home</Button>
          </Link>
          <Link to="/blog/" disabled={location.pathname === "/blog/"}>
            <Button marginTop="35px">Blog</Button>
          </Link>
        </nav>
      </>
    );
  }


  return (
    <Container>
      <Wrapper >
        <LayoutContainer >
          <HeaderContainer className="row mb-0">
            <Header />
          </HeaderContainer>
          <div className="row">
            <main className="px-2 px-lg-0">{children}</main>
          </div>
        </LayoutContainer>
        <Footer className="align-content-center">
          <p><a href="https://www.jackalopeadventures.com">jackalopeadventures.com &trade;</a></p>
          <SocialIcon url="https://www.facebook.com/jackalopeAdventureTouring"/>
          <SocialIcon url="https://www.instagram.com/jackalopeadventures/" />
        </Footer>
      </Wrapper>
    </Container>
  )

}

const LayoutContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 10rem; 
`;

const HeaderContainer = styled.div`
  nav{
    height: 40px;
  }
`;

const Nav = styled.div`

`;

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align:center;
  width: 100%;
  height: 2.5rem; 

  a{
    box-shadow: none;
    margin-left:10px;
    height:30px !important;
    width:30px !important;
  }
`


