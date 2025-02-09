import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Paper,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import image from "./assets/IMG_2509.png";
import tuder from "./assets/Tuder.png";
import scamalec from "./assets/scamalec.png";
import contact from "./assets/contact.png";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2C4C9C", // Blue theme color
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

const parallaxStyle = {
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const contentStyle = {
  padding: "64px 0",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ bgcolor: "primary.main", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Mavis Cheng 郑在萱
          </Typography>
          <Typography variant="h6">Home</Typography>
          <Typography variant="h6" sx={{ ml: 2 }}>
            About
          </Typography>
          <Typography variant="h6" sx={{ ml: 2 }}>
            Portfolio
          </Typography>
          <Typography variant="h6" sx={{ ml: 2 }}>
            Contact
          </Typography>
        </Toolbar>
      </AppBar>

      {/* First Parallax Section */}
      <Box
        sx={{
          ...parallaxStyle,
          height: "100vh",
          backgroundImage: `url(${image})`, // Parallax background image
        }}
      >
        {/* Overlay with faded image */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: 'url("/OneInterns.jpg")', // Faded background image of yourself
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            opacity: 0.3, // Adjust opacity for the fade effect
            zIndex: 1,
          }}
        />

        {/* Content Box */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            bgcolor: "rgba(0, 0, 0, 0.5)",
            zIndex: 2, // Ensure content appears above the faded image
          }}
        >
          <Typography variant="h1" color="secondary" align="center">
            Mavis Cheng
          </Typography>
        </Box>
      </Box>

      {/* About Me Section */}
      <Box sx={contentStyle}>
        <Container>
          <Typography variant="h3" align="center" sx={{ mb: 4 }}>
            About Me
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 4 }}>
            I am a y3 information systems undergraduate at the National
            University of Singapore. I am passionate about technology and enjoy
            learning new things.
          </Typography>
          {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Paper sx={{ p: 2, maxWidth: "500px", textAlign: "center" }}>
              <Typography variant="h6">My Name</Typography>
              <img
                src="image"
                alt="Photo of Me"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginTop: "16px",
                }}
              />
            </Paper>
          </Box> */}
        </Container>
      </Box>

      {/* Second Parallax Section */}
      <Box
        sx={{
          ...parallaxStyle,
          height: "400px",
          backgroundImage: 'url("your-image-url-2.jpg")',
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "400px",
            bgcolor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <Typography variant="h3" color="secondary">
            PORTFOLIO
          </Typography>
        </Box>
      </Box>

      {/* Portfolio Section */}
      <Box sx={contentStyle}>
        <Container>
          <Typography variant="h3" align="center" sx={{ mb: 4 }}>
            My Work
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 4 }}>
            Here are some of my latest work.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <img
              src={tuder}
              alt="Portfolio 1"
              style={{
                width: "calc(45% - 5px)",
                height: "auto",
                borderRadius: "8px",
              }}
            />
            <img
              src={scamalec}
              alt="Portfolio 2"
              style={{
                width: "calc(30% - 5px)",
                height: "auto",
                borderRadius: "8px",
              }}
            />
            {/* <img
              src={scam}
              alt="Portfolio 3"
              style={{ width: "calc(25% - 16px)", borderRadius: "8px" }}
            /> */}
            {/* <img
              src="your-image-url-portfolio4.jpg"
              alt="Portfolio 4"
              style={{ width: "calc(25% - 16px)", borderRadius: "8px" }}
            /> */}
          </Box>
        </Container>
      </Box>

      {/* Third Parallax Section */}
      <Box
        sx={{
          ...parallaxStyle,
          height: "400px",
          backgroundImage: 'url("your-image-url-3.jpg")',
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "400px",
            bgcolor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <Typography variant="h3" color="secondary">
            CONTACT
          </Typography>
        </Box>
      </Box>

      {/* Contact Section */}
      <Box sx={contentStyle}>
        <Container>
          <Typography variant="h3" align="center" sx={{ mb: 4 }}>
            Contact Me
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <img
              src={contact}
              alt="Contact Me"
              style={{ width: "calc(30% - 16px)", borderRadius: "8px" }}
            />
            <Box sx={{ width: "calc(50% - 16px)" }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Socials
              </Typography>
              <Typography variant="body1">
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/mavis-cheng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.linkedin.com/in/mavis-cheng
                </a>
                <br />
                <strong>Email:</strong> mavisczx@gmail.com
              </Typography>
              {/* <form style={{ marginTop: "16px" }}>
                <input
                  type="text"
                  placeholder="Name"
                  style={{
                    width: "48%",
                    marginRight: "4%",
                    padding: "8px",
                    marginBottom: "8px",
                  }}
                />
                <input
                  type="text"
                  placeholder="Email"
                  style={{
                    width: "48%",
                    padding: "8px",
                    marginBottom: "8px",
                  }}
                />
                <input
                  type="text"
                  placeholder="Message"
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginBottom: "8px",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "12px 24px",
                    backgroundColor: "#1E90FF",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  SEND MESSAGE
                </button>
              </form> */}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "secondary.main",
          p: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="body2"></Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
