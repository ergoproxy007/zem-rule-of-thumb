import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { NavBar } from 'pages/Landing/components/NavBar';
import { HeaderRule } from 'pages/Landing/components/HeaderRule';
import { MainRule } from 'pages/Landing/components/MainRule';
import { FooterRule } from 'pages/Landing/components/FooterRule';
import { DivContainer } from "views/Tags/BlockLevel";
import { BannerTop } from 'views/AsideBanner/BannerTop';
import { BannerBottom } from 'views/AsideBanner/BannerBottom';
import { typeviews } from 'context/helper/store.helper';

const StyledContainer = withStyles((props) => {
  return ({
      root: {
          padding: '0px',
          [props.breakpoints.only('xs')]: {
              paddingRight: '0',
              paddingLeft: '0',
          },
      },
  })
})(Container);

const LandingContainer = () => {
  const [currentOption, setCurrentOption] = useState('');
  const NONE = 'None';
  return (
    <StyledContainer maxWidth='xl' xs={12}>

      <CssBaseline />
      
      <NavBar />

      <HeaderRule />

      <DivContainer className='max-centered'>
        <BannerTop />
        <MainRule options={typeviews}
                  currentOption={currentOption}
                  handleCurrentOption={setCurrentOption}
                  defaultValue={NONE} />
        <BannerBottom />
        <FooterRule />
      </DivContainer>

    </StyledContainer>
  );
}

export default LandingContainer;
