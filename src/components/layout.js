import React from "react"
import { Link } from "gatsby";
import { Button } from "react-bootstrap";
import "../../style.scss";
import HeroImage from "../../content/assets/superior.jpg";
import Logo from "../../content/assets/jackalopelogo.jpg";
import styled from "styled-components"

import { Container } from "react-bootstrap";

const LayoutContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export default function Layout(props) {

  const { location, title, children, background } = props
  const rootPath = `${__PATH_PREFIX__}/`
  const blogPath = `${__PATH_PREFIX__}/blog/`
  const header = (
    <Link
      style={{
        boxShadow: `none`,
        textDecoration: `none`,
        color: `inherit`,
      }}
      to={location.pathname === blogPath ? `/` : `/`}
    >
      <img src={Logo} class="float-left" />
      <h1 className="mt-4 ml-5 float-left" >{title}</h1>
    </Link>
  )

  return (
    <Container>
      <Wrapper >
        <LayoutContainer >
          <div className="row d-flex justify-content-center">
            <Header className="col-12 mb-0">{header}</Header>
            <nav className="col-12 mb-4 mt-0 justify-content-left">
              <Link to="/blog/">
                <Button marginTop="35px">Blog</Button>
              </Link>
            </nav>
          </div>
          <img src={HeroImage} className="w-100 h-50 p-0" />
          <div className="row">
            <main>{children}</main>
          </div>
        </LayoutContainer>
        <Footer className="align-content-center">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Wrapper>
    </Container>
  )

}

const Header = styled.div`
   img { 
     width: 100px;
   }
`

const Nav = styled.div`

`;

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`


