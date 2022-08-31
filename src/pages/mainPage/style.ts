import {styled} from '@mui/material';

export const Root = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('lg')]: {
        display: 'block',
    },
    '& div.left-line': {
        position: 'fixed',
        zIndex: '10',
        width: '8px',
        height: '100%',
        top: 0,
        background: '#F8CECA'
    },
    '& div.left-side': {
        [theme.breakpoints.down('xl')]: {
            marginRight: '70px'
        },
        [theme.breakpoints.down('lg')]: {
            width: '100%',
            margin: '0 auto',
            maxWidth: '500px',
            '& .avs-text': {
                marginTop: '66px',
                '& h2': {
                    fontSize: '50px',
                    fontWeight: '800',
                    lineHeight: '50px',
                }
            }
        },
        [theme.breakpoints.down('md')]: {
            '& .avs-text': {
                marginTop: '66px',
                [theme.breakpoints.down('sm')]: {
                    marginTop: '0',
                    margin: '66px 30px 0'
                },
                '& h2': {
                    fontSize: '40px',
                    fontWeight: '800',
                    lineHeight: '50px',
                    [theme.breakpoints.down('sm')]: {
                        fontSize: '25px',
                        fontWeight: '800',
                        lineHeight: '33px',
                    },
                }
            }
        },
        '& div.avs-logo': {
            margin: '46px 0 0 38px'
        },
        '& div.card-wrapper': {
            margin: '130px 0 110px 26px',
            maxWidth: '500px',
            [theme.breakpoints.down('lg')]: {
                margin: '66px 0 10px',
            },
            [theme.breakpoints.down('sm')]: {
                margin: '66px 30px 10px',
            },
            '& div.top-content': {
                '& h2': {
                    fontWeight: '700',
                    fontSize: '37px',
                    marginBottom: '43px',
                },
                '& p.btn-label': {
                    fontSize: '16px',
                    fontWeight: '600',
                    marginBottom: '10px'
                },
                '& .card-btn': {
                    width: '100%',
                    boxShadow: 'none',
                    background: '#FE9235',
                    padding: '13px 16px',
                    marginBottom: '45px',
                    '&:hover': {
                        background: '#FFAB62'
                    }
                }
            },
            '& div.bottom-content': {
                '& p.bottom-title': {
                    marginTop: '38px',
                    fontWeight: '700',
                    fontSize: '24px',
                    marginBottom: '25px'
                },
                '& div.help-icons': {
                    display: 'flex',
                    alignItems: 'center',
                    [theme.breakpoints.down('sm')]: {
                        flexDirection: 'column',
                    },
                    '& div.help-item': {
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100px',
                        width: '100%',
                        [theme.breakpoints.down('sm')]: {
                            height: 'auto',
                            marginBottom: '10px'
                        },
                        '& a': {
                            color: '#000000',
                            fontSize: '15px'
                        }
                    }
                }
            }
        }
    },
    '& div.right-side': {
        position: 'relative',
        width: '50%',
        background: `#FEE9E7 url('/dots_26.png')`,
        [theme.breakpoints.down('lg')]: {
            width: '100%',
        },
        [theme.breakpoints.down('md')]: {
            background: `#fff url('/dots_26.png')`,
        },
        '& div.avs-text': {
            maxWidth: '550px',
            width: '100%',
            margin: '125px auto 0',
            '& h2': {
                fontSize: '54px',
                fontWeight: '800',
                lineHeight: '63px',
                [theme.breakpoints.down('xl')]: {
                    textAlign: 'center',
                    fontSize: '40px',
                    fontWeight: '800',
                    lineHeight: '50px'
                },
            }
        },
        '& div.magic-img': {
            '& img': {
                position: 'absolute',
                maxWidth: '100%',
                bottom: 0,
                [theme.breakpoints.down('lg')]: {
                    position: 'relative'
                }
            }
        }
    }
}));