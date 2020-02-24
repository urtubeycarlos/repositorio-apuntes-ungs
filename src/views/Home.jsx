import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Logo from '../components/Logo';
import Search from '../components/Search';
import Upload from '../components/Upload';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useState } from 'react';

const Home = () => {
    /**
     * Methods
    */
    const a11yProps = (index) => {
        return {
          id: `full-width-tab-${index}`,
          'aria-controls': `full-width-tabpanel-${index}`,
        };
    }
    const useStyles = makeStyles(theme => ({
        root: {
          backgroundColor: theme.palette.background.paper,
          width: '100%',
        },
      }));

    /**
     * Component - TODO: Refactor to an atomic and independent component
    */
    const TabPanel = (props) => {
        const { children, value, index, ...other } = props;
      
        return (
          <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
          >
            <Box p={3}>{children}</Box>
          </Typography>
        );
      }

    /**
     * States and setStates
    */
    const [tabIndex, setTabIndex] = useState(0);

    /**
     * Variables
    */
    const theme = useTheme();
    const classes = useStyles();
    

    return (
        <div>
            <Container>
                <Logo />
                <AppBar position="static" color="default">
                    <Tabs
                        value={tabIndex}
                        onChange={(event, index) => setTabIndex(index)}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="Buscar Apuntes" {...a11yProps(0)} />
                        <Tab label="Subir Apuntes" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    className={classes.root}
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={tabIndex}
                >
                    <TabPanel value={tabIndex} index={0} dir={theme.direction}><Search /></TabPanel>
                    <TabPanel value={tabIndex} index={1} dir={theme.direction}><Upload /></TabPanel>
                </SwipeableViews>
            </Container>
        </div>)
}

export default Home;