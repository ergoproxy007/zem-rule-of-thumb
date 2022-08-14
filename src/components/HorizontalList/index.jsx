import Box from '@material-ui/core/Box';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: 0,
    overflowX: 'scroll',
  }
}));

const Contenedor = styled.div`
  background-color: red
`;

export const HorizontalList = (props) => {
    const classes = useStyles();
  
    return (
      <Contenedor>
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
        <List className={classes.root}>
          <ListItem>
            <ListItemText primary="foo1" secondary="bar1bar1bar1" />
          </ListItem>
          <ListItem>
            <ListItemText primary="foo2" secondary="bar2bar2bar2bar2" />
          </ListItem>
          <ListItem>
            <ListItemText primary="foo3" secondary="bar3bar3bar3bar3" />
          </ListItem>
          <ListItem>
            <ListItemText primary="foo4" secondary="bar4" />
          </ListItem>
          <ListItem>
            <ListItemText primary="foo5" secondary="bar5" />
          </ListItem>
        </List>
      </Box>
    </Contenedor>
    );
  }