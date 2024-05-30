import {Container, Typography, Paper } from "@mui/material";

function App() {
  return (
    <Container sx={{ bgcolor: "silver", height: "100vh" }}>
      <Typography variant="h1" align="center">
        Mavis Cheng 
      </Typography>
      <Paper elevation={3} sx={{ p: 2, m: 2 }}>
        <Typography variant="h5" align="center">
          About Me / Contact / Projects / Resume 
        </Typography>
      </Paper>
    </Container>
  );
}

export default App;
