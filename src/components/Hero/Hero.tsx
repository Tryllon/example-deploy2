import { Box, Container, Typography, Button } from "@mui/material"
import GoogleIcon from '@mui/icons-material/Google';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export const Hero = () => {

    return (
        <Box
            id='home'
            sx={{
                backgroundColor: '#f1f3f4;',
            }}
        >
            <Container
            >
                <Box
                    sx={{
                        display: { xs: 'flex', md: 'none' },
                        alignItems: 'left',
                        flexDirection: 'column',
                        padding: '20px 0px',
                        marginTop: '56px'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: "black",
                            marginBottom: '20px'
                        }}
                    >
                        <GoogleIcon
                            sx={{
                                marginRight: '10px',
                                fontSize: '3rem'
                            }}
                        />
                        <Typography
                            variant="h3"
                            noWrap
                            sx={{
                                fontFamily: 'roboto',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'black',
                            }}
                        >
                            KEEP
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            textAlign: 'left',
                            marginBottom: '20px'
                        }}
                    >
                        <Typography
                            sx={{
                                marginBottom: '20px'
                            }}
                            color={"#545454"}
                            variant={"subtitle1"}>
                            Capture what&apos;s important and get more done.
                        </Typography>
                        <Typography
                            variant={"caption"}
                            color={"#545454"}
                        >
                            Keep organised. Capture inspiration and to-dos effortlessly. Collaborate on notes with teammates and set reminders to stay on track. Everything syncs across your devices, so what&apos;s important is always within reach.
                        </Typography>
                    </Box>
                    <Box>
                        <Button
                            href='/pricing'
                            size="medium"
                            variant="contained">Get started</Button>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '70px 0px',
                        marginTop: '64px'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            color: "black",
                            alignItems: 'center',
                            marginBottom: '30px'
                        }}
                    >
                        <GoogleIcon
                            sx={{
                                marginRight: '10px',
                                fontSize: '4.5rem'
                            }}
                        />
                        <Typography
                            variant="h1"
                            noWrap
                            sx={{
                                fontFamily: 'roboto',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'black',
                            }}
                        >
                            KEEP
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            textAlign: 'center',
                            marginBottom: '30px'
                        }}
                    >
                        <Typography
                            sx={{
                                marginBottom: '20px'
                            }}
                            color={"#545454"}
                            variant={"body1"}>
                            Capture what&apos;s important and get more done.
                        </Typography>
                        <Typography
                            variant={"body2"}
                            color={"#545454"}
                        >
                            Keep organised. Capture inspiration and to-dos effortlessly. Collaborate on notes with teammates and set reminders to stay on track. Everything syncs across your devices, so what&apos;s important is always within reach.
                        </Typography>
                    </Box>
                    <Box>
                        <Button
                            href='/pricing'
                            size="medium"
                            variant="contained">Get started</Button>
                    </Box>

                </Box>
            </Container>

        </Box>
    )
}
export default Hero