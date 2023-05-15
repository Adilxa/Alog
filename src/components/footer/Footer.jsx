import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: '#f7f7f7',
        color: '#999999',
        padding: theme.spacing(2),
        textAlign: 'center',
        marginTop: 'auto',
        boxShadow: '0px -1px 5px rgba(0, 0, 0, 0.1)',
    },
    link: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        color: '#999999',
        textDecoration: 'none',
        '&:hover': {
            color: '#333333',
        },
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container>
                <Typography variant="body2" color="inherit">
                    &copy; {new Date().getFullYear()} Alog Inc. All rights reserved.
                </Typography>
                <Typography variant="body2" color="inherit">
                    <Link href="https://www.apple.com" color="inherit" className={classes.link}>
                        Privacy Policy
                    </Link>
                    <Link href="https://www.apple.com" color="inherit" className={classes.link}>
                        Terms of Use
                    </Link>
                    <Link href="https://www.apple.com" color="inherit" className={classes.link}>
                        Sales and Refunds
                    </Link>
                    <Link href="https://www.apple.com" color="inherit" className={classes.link}>
                        Legal
                    </Link>
                    <Link href="https://www.apple.com" color="inherit" className={classes.link}>
                        Site Map
                    </Link>
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
