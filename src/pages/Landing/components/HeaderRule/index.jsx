import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

export const HeaderRule = () => {
    return (
        <AppBar position="relative" style={{ background : '#2E3B55' }}>
            <Toolbar>
                <Grid container>
                    <header>
                        HEADER
                    </header>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}