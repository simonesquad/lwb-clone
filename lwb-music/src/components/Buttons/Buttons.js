import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    container: {
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
    },
    btn: {
        border: 'none',
        margin: 20,
        width: 250,
        height: 65,
        borderRadius: 6,
        cursor: 'pointer',
        color: 'black',
        backgroundSize: '200%',
        transition: '0.4s',
        '&:hover': {
            backgroundPosition: 'right',
            color: 'black'
        }
    },
    btn1: {
        backgroundImage: 'linear-gradient(45deg, #bdc3c7, #778beb, #f3a683)'
    }
})

export default function Buttons({text}) {
    const classes = useStyles()
    return (
        <>
        <div className={classes.container}>
            <Button className={ `${classes.btn} ${classes.btn1}`}>{text}</Button>
        </div>
        </>
    )
}