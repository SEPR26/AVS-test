import {styled} from '@mui/styles';

export const Root = styled('div')({

    '& div.left-side': {
        '& div.left-line': {
            position: 'fixed',
            width: '8px',
            height: '100%',
            top: 0,
            background: '#F8CECA'
        },
        '& div.avs-logo': {
            margin: '46px 0 0 38px'
        },
        '& div.login-card': {
            margin: '130px 0 0 26px',
            '& h3': {
                fontWeight: '700',
                fontSize: '37px',
                marginBottom: '10px'
            },
            '& p.sub-title': {
                fontWeight: '600',
                fontSize: '17px'
            }
        }
    }
});