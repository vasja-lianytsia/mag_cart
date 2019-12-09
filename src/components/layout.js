import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyle } from '../styles/globalStyle';
import Navigation from './includes/Navigation';
import NavigationMobile from './includes/NavigationMobile';
import Footer from './includes/footer';
import Contact from './Contact';
import GoogleMaps from './googlemaps';
 


const PageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  width: 100%;
  @media (max-width: 710px) {
    width: 100%;
  }
`

const MainSection = styled.main`
  margin: 30px 0;
  width: 100%;
  
`

const FooterStyled = styled.footer`
  width: 100%;
  padding: 20px;
  text-align: right;

  @media (max-width: 600px) {
    text-align: center;
  }
`
const ExternalLink = styled.a`
  color: #c59fc5;
`


class Layout extends React.Component {

  componentDidMount() {
    if (window.Snipcart) {
      window.Snipcart.api.configure('show_continue_shopping', true);
    }
  }


  render() {
    const {   children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <PageWrapper>
          <Navigation />
          <NavigationMobile />
            
            <MainSection>{children}</MainSection>
            <Contact />
            <GoogleMaps />
            <Footer />
          </PageWrapper>
        </>
      </ThemeProvider>
    )
  }
}

export default Layout
