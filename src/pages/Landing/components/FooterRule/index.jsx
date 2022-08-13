import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(3),
    },
}));
  
function Copyright() {
    return (
      <Typography variant="h6" color="textSecondary" align="center">
        {'Copyright© '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

function LinkedIn() {
  return (
    <Link color="inherit" href="https://www.linkedin.com/in/daniel-arafat-torres-ruiz-59743813a/">
      <LinkedInIcon fontSize="large" />
      <span style={{ verticalAlign: 'super'}}>LinkedIn Profile</span>
    </Link>
  );
}

function GitHub() {
  return (
    <Link color="inherit" href="https://github.com/ergoproxy007">
        <GitHubIcon fontSize="large" />
        <span style={{ verticalAlign: 'super'}}>GitHub Community</span>
    </Link>
  );
}

export const FooterRule = (props) => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" color="black" component="p">
                Developed by Daniel Torres Ruiz
            </Typography>

            <Typography align="center" color="textSecondary" component="p">
              <LinkedIn />
              {' | '}
              <GitHub />
            </Typography>
            <Copyright />
        </footer>
    );
}
