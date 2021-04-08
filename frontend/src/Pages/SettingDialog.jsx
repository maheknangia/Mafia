import React from 'react';
import { Slider, Button, withStyles } from '@material-ui/core';
import styles from '../Styles/SettingDialog.module.css';

const StyledButton = withStyles({
    root: {
        alignSelf: 'start',
        height: '100%',
        borderRadius: '10px',
        backgroundColor: '#EE6644',
    },
    label: {
        textTransform: 'capitalize',
        letterSpacing: '2px',
        fontSize: '1.2rem',
        color: 'white',
    },
})(Button);

// TODO: implement the slider functions
const SettingDialog = () => (
    <div className={styles.container}>
        <div>
            <b> Sound </b>
            <Slider
            defaultValue={20}/>
        </div>
        <div>
            <b> Brightness </b>
            <Slider
            defaultValue={50}/>
        </div>
        <div>
            <b> Voting Time </b>
            <Slider
            defaultValue={20}
            aria-labelledby="discrete-slider-restrict"
            step={10}
            valueLabelDisplay="auto"/>
        </div>
        <div>
            <b> Discussion Time </b>
            <Slider
                defaultValue={60}
                aria-labelledby="discrete-slider-restrict"
                step={10}
                valueLabelDisplay="auto"/>
        </div>
        <div>
            <StyledButton variant="contained">Leave Game</StyledButton>
        </div>
    </div>
);

export default SettingDialog;
