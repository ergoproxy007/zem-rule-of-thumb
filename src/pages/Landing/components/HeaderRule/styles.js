import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    closingTitleXS: {
      [theme.breakpoints.only('xs')]: {
        fontSize: '1.1rem'
      },
    },
    closingTextXS: {
      [theme.breakpoints.only('xs')]: {
        fontSize: '2rem'
      },
    },
}));
  