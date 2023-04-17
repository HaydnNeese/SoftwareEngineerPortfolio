import { Box, Button, Container } from '@mui/material';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <Container maxWidth="md" sx={{flexGrow: 1}}>
            <Box
                sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignContent: 'center',
                        textAlign: 'center',
                        flexWrap: 'wrap',
                        paddingTop: '120px',
                        flexGrow: 1,
                        gap: '24px'
                }}>
                    <p className='greeting'>HELLO, I'M HAYDN NEESE</p>
                    <p className='headline'>
                        I am a front-end focused software engineer, with a passion for creating and problem solving.
                        I specialize in Cloud Platform Development, Angular, and React.
                    </p>
                    <Container>
                        <Button variant='contained' color='secondary'>Projects</Button>
                    </Container>
            </Box>
        </Container>
    );
};

export default LandingPage;
