import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
const NavBar = (props) => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                React & Material-UI Sample Application
                </Typography>
                <Button variant="contained" onClick={() => props.handleState('mode1', 'nav')}>Default</Button>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;