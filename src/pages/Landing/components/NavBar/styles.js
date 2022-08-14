import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    position: {
      paddingLeft: '50px',
      [theme.breakpoints.only('xs')]: {
        paddingLeft: '16px',
        width: '100%'
      },
    },
  }));
  