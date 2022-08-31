import React from 'react';
import {Root} from "./style";
import imgLogo from '/logo.png'
import magicImg from '/img-magic.png'
import {Button, Divider, Hidden, Typography} from "@mui/material";
import {LightSvg, QuestionSvg, BooksSvg} from "@src/assents/icons";

export const MainPage = () => {

    return (
        <Root>
            <div className='left-line'/>
            <div className='left-side'>
                <div className='avs-logo'>
                    <img src={imgLogo} alt="avs"/>
                </div>
                <Hidden lgUp>
                    <div className='avs-text'>
                        <Typography variant='h2'>AVS Video ReMaker Giveaway</Typography>
                    </div>
                </Hidden>
                <div className='card-wrapper'>
                    <div className='top-content'>
                        <Typography variant='h2'>Thank you!</Typography>
                        <Typography className='btn-label'>Download the full version of AVS Video ReMaker 6.7.1.262</Typography>
                        <Button variant='contained' className='card-btn'>Download the full version</Button>
                    </div>
                    <Divider />
                    <div className='bottom-content'>
                        <Typography className='bottom-title'>Helpful resources</Typography>
                        <div className='help-icons'>
                            <div className='help-item'>
                                <BooksSvg/>
                                <a href="#">Knowledge centre</a>
                            </div>
                            <div className='help-item'>
                                <LightSvg/>
                                <a href="#">Tips & tricks</a>
                            </div>
                            <div className='help-item'>
                                <QuestionSvg/>
                                <a href="#">Got a question or an idea? Contact us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-side'>
                <Hidden lgDown>
                    <div className='avs-text'>
                        <Typography variant='h2'>AVS Video ReMaker Giveaway</Typography>
                    </div>
                </Hidden>
                <div className='magic-img'>
                    <img src={magicImg} alt="mag"/>
                </div>
            </div>
        </Root>
    );
};

