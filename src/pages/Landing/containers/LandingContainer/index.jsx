import CssBaseline from '@material-ui/core/CssBaseline';
import { HeaderRule } from 'pages/Landing/components/HeaderRule';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledContainer = withStyles((props) => {
  return ({
      root: {
          padding: "0px",
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

    </StyledContainer>
  );
}

export default LandingContainer;
