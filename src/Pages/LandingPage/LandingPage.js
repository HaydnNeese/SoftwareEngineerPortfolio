import { Box, Button, Container } from "@mui/material";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <Container maxWidth="md" sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          textAlign: "center",
          gap: "24px",
        }}
      >
        <p className="greeting">HELLO, I'M HAYDN NEESE</p>
        <p className="headline">
          I am a front-end focused software engineer with a passion for creating user-friendly interfaces.
          I specialize in digesting complex data from back-end services and providing it to the user in intuitive ways using Angular 15+ and the various tools that come with that.
          I have additional experience in development with React as well.
        </p>
        <Container>
          <Button variant="contained" color="secondary">
            Projects
          </Button>
        </Container>
      </Box>
    </Container>
  );
};

export default LandingPage;
