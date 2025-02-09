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
import cct from "./assets/cct.png";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

const projects = [
  {
    title: "Tuder [SWE]",
    description: "A platform connecting students and tutors for freelancers.",
    image: tuder,
    link: "https://drive.google.com/file/d/1K26THpU81Wgk3tWSIPqivahKYL1nr52B/view?usp=sharing",
  },
  {
    title: "Scamalec [ML]",
    description:
      "A telegram bot scam detection tool to prevent phishing and fraud.",
    image: scamalec,
    link: "https://t.me/scamalec_bot",
  },
  {
    title: "Carbon Credit Tokens [Blockchain]",
    description: "Using blockchain to revolutionize carbon credit trading.",
    image: cct,
    link: "https://drive.google.com/file/d/1fu8MuGq_wsEhS6sWxwunlZILqmN-cU-U/view?usp=sharing",
  },
];

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
            Hello! I am Mavis and I am passionate about product - especially in
            building products that last! From origami (at 6 years old) to
            rainbow looms (at 10 years old) to software projects (at 19 years
            old), I hope to deliver meaningful products.
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
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 4,
            }}
          >
            {projects.map((project, index) => (
              <Card key={index} sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Button
                  href={project.link}
                  target="_blank"
                  variant="contained"
                  color="primary"
                  sx={{ m: 2 }}
                >
                  View Project
                </Button>
              </Card>
            ))}
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
