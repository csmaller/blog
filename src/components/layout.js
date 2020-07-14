import React from "react"
import { Link } from "gatsby";
import "../../style.scss";

import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

const LayoutContainer = styled.div`

  margin-left: auto;
  margin-right: auto;
`;

export default function Layout(props) {

  const { location, title, children, background } = props
  const rootPath = `${__PATH_PREFIX__}/`
  const blogPath = `${__PATH_PREFIX__}/blog/`
  let header

 // if (location.pathname === rootPath || location.pathname === blogPath) {
    header = (
      <h1 className="mt-1" >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={location.pathname === blogPath ? `/` : `/`}
        >
          {title}
        </Link>
      </h1>
    )
  // } else {
  //   header = (
  //     <h3
  //       style={{
  //         fontFamily: `Montserrat, sans-serif`,
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           textDecoration: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/blog/`}
  //       >
  //         {title}
  //       </Link>
  //     </h3>
  //   )
  // }
  return (
    <Wrapper >
      <LayoutContainer >
        <div className="row d-flex justify-content-center">
          <header className="col-12">{header}</header>
        </div>
        <div className="row">
          <main>{children}</main>
        </div>
      </LayoutContainer>
      <Footer className="row">
        © {new Date().getFullYear()}, Built with
          {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </Wrapper>
  )

}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`


