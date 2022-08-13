import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { HeaderRule } from 'pages/Landing/components/HeaderRule';
import { MainRule } from 'pages/Landing/components/MainRule';
import { FooterRule } from 'pages/Landing/components/FooterRule';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledContainer = withStyles((props) => {
  return ({
      root: {
          paddingRight: "80px",
          paddingLeft: "80px",
          backgroundColor: "#F4F4F4",
          [props.breakpoints.only('xs')]: {
              paddingRight: "0",
              paddingLeft: "0",
          },
      },
  })
})(Container);

const LandingContainer = () => {
  return (
    <StyledContainer maxWidth="xl" xs={12}>

      <CssBaseline />
      
      <HeaderRule />

      <MainRule />

      <FooterRule />

    </StyledContainer>
  );
}

export default LandingContainer;
