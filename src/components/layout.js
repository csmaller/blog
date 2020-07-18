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
        <div className="col-1">
          <Link to={location.pathname === blogPath ? `/` : `/`} >
            <img src={Logo} class="float-left" />
          </Link>
        </div>
        <nav className="col-11 mb-4 mt-0 justify-content-left bg-primary mt-4 p-0">
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
            <main>{children}</main>
          </div>
        </LayoutContainer>
        <Footer className="align-content-center">
          Follow us on Social Media
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
  text-align: left;
  margin:auto;
  margin: 24px;
  position:absolute;
  bottom:0;

  a{
    box-shadow: none;
    margin-left:10px;
  }
`


