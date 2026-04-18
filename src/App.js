import React, { useRef, useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  CssBaseline,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  IconButton,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import tuder from "./assets/Tuder.png";
import scamalec from "./assets/scamalec.png";
import cct from "./assets/cct.png";
import chio from "./assets/chio_logos.jpg";

// ─── Inline SVG Icons ────────────────────────────────────────────────────────

const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2.16 2.16 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.74.74 1.2 1.74 1.2 2.84 0 4.31-2.58 5.23-5.06 5.5.45.37.82.92.82 2.02v3.03c0 .27.18.64.73.55A11 11 0 0012 1.27" />
  </svg>
);

const OpenInNewIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ marginLeft: 6 }}
  >
    <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
  </svg>
);

// ─── Data ────────────────────────────────────────────────────────────────────

const projects = [
  {
    title: "Chio",
    tag: "Product",
    description:
      "A beauty and wellness super app (2 mobile apps + 1 web) unifying social engagement, service bookings, and personalisation. Central marketplace connecting users with service providers for discovery, booking, and payment.",
    tech: ["React Native", "React", "Figma", "Firebase"],
    image: chio,
    link: "https://www.figma.com/design/cfw3srLs423nmbMnTpS1Ov/Chio.?node-id=975-9028&t=lcFFyrak4NEPEIv3-1",
  },
  {
    title: "Tuder",
    tag: "SWE",
    description:
      "A platform connecting students with freelance tutors. Built a full-stack matching system with real-time scheduling, profile management, and review workflows.",
    tech: ["React", "Node.js", "MongoDB", "REST API"],
    image: tuder,
    link: "https://drive.google.com/file/d/1K26THpU81Wgk3tWSIPqivahKYL1nr52B/view?usp=sharing",
  },
  {
    title: "Scamalec",
    tag: "ML",
    description:
      "A Telegram bot that detects scam messages in real time using NLP classification. Protects users from phishing, social engineering, and fraud with automated message analysis.",
    tech: ["Python", "NLP", "Telegram API", "ML"],
    image: scamalec,
    link: "https://t.me/scamalec_bot",
  },
  {
    title: "Carbon Credit Tokens",
    tag: "Blockchain",
    description:
      "A full-stack DApp tokenizing carbon credits on Ethereum where 1 CCT equals 1 ton of CO2. Features smart contracts for CCT trading, project validation, and a resale marketplace. 16 passing test cases.",
    tech: ["Solidity", "ERC-20", "Ethereum", "Web3.js", "React"],
    image: cct,
    link: "https://drive.google.com/file/d/1fu8MuGq_wsEhS6sWxwunlZILqmN-cU-U/view?usp=sharing",
  },
];

const navLinks = [
  { label: "About", target: "about" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
];

const skillSet = [
  "Product Management",
  "Agile / Scrum",
  "React",
  "Python",
  "Solidity",
  "Node.js",
  "Figma",
  "Jira",
  "PostgreSQL",
  "PowerBI",
  "Data Analysis",
];

// ─── Scroll Animation Hook ──────────────────────────────────────────────────

function useInView() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: "-60px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}

function FadeInSection({ children, delay = 0 }) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Theme ───────────────────────────────────────────────────────────────────

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#6c63ff" },
    secondary: { main: "#00d4aa" },
    background: {
      default: "#0a0a0f",
      paper: "#111118",
    },
    text: {
      primary: "#e8e8ed",
      secondary: "#8888a0",
    },
  },
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: { fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontWeight: 600, letterSpacing: "-0.01em" },
    h3: { fontWeight: 600, letterSpacing: "-0.01em" },
    h6: { fontWeight: 600 },
    body1: { fontWeight: 400, lineHeight: 1.7 },
    body2: { fontWeight: 400, lineHeight: 1.6 },
    button: {
      fontWeight: 500,
      letterSpacing: "0.04em",
      textTransform: "none",
    },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0a0a0f",
          scrollBehavior: "smooth",
        },
        "::selection": {
          backgroundColor: "rgba(108, 99, 255, 0.3)",
          color: "#ffffff",
        },
        "::-webkit-scrollbar": { width: "8px" },
        "::-webkit-scrollbar-track": { background: "#0a0a0f" },
        "::-webkit-scrollbar-thumb": {
          background: "#2a2a3a",
          borderRadius: "4px",
        },
        "::-webkit-scrollbar-thumb:hover": { background: "#3a3a4a" },
      },
    },
  },
});

// ─── App ─────────────────────────────────────────────────────────────────────

function App() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Keyframe animations */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 20px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        .card-hover {
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-8px);
          border-color: rgba(108, 99, 255, 0.3) !important;
          box-shadow: 0 8px 32px rgba(108, 99, 255, 0.15), 0 0 0 1px rgba(108, 99, 255, 0.1) !important;
        }
        .card-hover:hover .card-image {
          transform: scale(1.05);
        }
        .social-btn {
          transition: all 0.3s ease;
        }
        .social-btn:hover {
          transform: translateY(-4px);
          color: #6c63ff !important;
          border-color: rgba(108, 99, 255, 0.4) !important;
          box-shadow: 0 0 20px rgba(108, 99, 255, 0.2);
          background-color: rgba(108, 99, 255, 0.05) !important;
        }
      `}</style>

      {/* ── Navigation ── */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: "rgba(10, 10, 15, 0.8)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            maxWidth: 1200,
            width: "100%",
            mx: "auto",
            px: { xs: 2, md: 3 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              background: "linear-gradient(135deg, #6c63ff, #00d4aa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              cursor: "pointer",
              fontSize: "1.1rem",
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            MC
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navLinks.map((link) => (
              <Button
                key={link.target}
                color="inherit"
                onClick={() =>
                  document
                    .getElementById(link.target)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                sx={{
                  color: "text.secondary",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  "&:hover": { color: "text.primary", bgcolor: "transparent" },
                  transition: "color 0.3s ease",
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* ── Hero ── */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          px: 3,
        }}
      >
        {/* Background gradient orbs */}
        <Box
          sx={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)",
            top: "-10%",
            right: "-10%",
            animation: "float 8s ease-in-out infinite",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,212,170,0.1) 0%, transparent 70%)",
            bottom: "-5%",
            left: "-5%",
            animation: "floatReverse 10s ease-in-out infinite",
            zIndex: 0,
          }}
        />

        {/* Hero content */}
        <Box
          sx={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "secondary.main",
              fontWeight: 500,
              letterSpacing: "0.15em",
              mb: 2,
              textTransform: "uppercase",
              fontSize: "0.85rem",
            }}
          >
            Software Engineer & Product Manager
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", sm: "2.75rem", md: "3.5rem" },
              fontWeight: 700,
              background:
                "linear-gradient(135deg, #6c63ff 0%, #00d4aa 50%, #6c63ff 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "gradientShift 4s ease-in-out infinite",
              mb: 2,
            }}
          >
            Hi, I'm Mavis Cheng
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "text.secondary",
              fontWeight: 300,
              fontSize: { xs: "1rem", md: "1.25rem" },
              maxWidth: 600,
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            I build products that last — from ideation to deployment.
          </Typography>
        </Box>

        {/* Scroll indicator */}
        <Box
          sx={{
            position: "absolute",
            bottom: 40,
            zIndex: 1,
            opacity: heroVisible ? 1 : 0,
            transition: "opacity 1s ease 1.5s",
          }}
        >
          <Box
            sx={{
              width: 24,
              height: 40,
              borderRadius: 12,
              border: "2px solid rgba(255,255,255,0.2)",
              display: "flex",
              justifyContent: "center",
              pt: "8px",
            }}
          >
            <Box
              sx={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                bgcolor: "rgba(255,255,255,0.4)",
                animation: "bounce 1.5s ease-in-out infinite",
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* ── About ── */}
      <Box id="about" sx={{ py: { xs: 10, md: 15 } }}>
        <Container maxWidth="md">
          <FadeInSection>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                color: "white",
                mb: 6,
                fontSize: { xs: "1.75rem", md: "2.25rem" },
              }}
            >
              About Me
            </Typography>
          </FadeInSection>

          <FadeInSection delay={0.15}>
            <Box
              sx={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 3,
                backdropFilter: "blur(10px)",
                p: { xs: 3, md: 5 },
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: "text.primary", mb: 3, lineHeight: 1.8 }}
              >
                Hello! I'm Mavis — I'm passionate about building products that
                make a real difference. With experience in product management at
                Apple, Jurong Port, and OCBC, alongside software engineering
                projects across blockchain, ML, and full-stack development, I
                bridge the gap between technical execution and product strategy.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}
              >
                From origami at 6, to rainbow looms at 10, to shipping products
                and writing code at 19 — I have always loved making things.
                Today, I channel that energy into building end-to-end: scoping
                requirements, managing stakeholders, architecting systems, and
                iterating on user feedback.
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  mb: 2,
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontSize: "0.7rem",
                }}
              >
                Skill Set
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {skillSet.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    sx={{
                      bgcolor: "rgba(108,99,255,0.1)",
                      color: "#6c63ff",
                      border: "1px solid rgba(108,99,255,0.2)",
                      fontWeight: 500,
                      fontSize: "0.75rem",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor: "rgba(108,99,255,0.2)",
                        boxShadow: "0 0 12px rgba(108,99,255,0.3)",
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </FadeInSection>
        </Container>
      </Box>

      {/* ── Projects ── */}
      <Box id="projects" sx={{ py: { xs: 10, md: 15 }, bgcolor: "#0d0d14" }}>
        <Container maxWidth="lg">
          <FadeInSection>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                color: "white",
                mb: 2,
                fontSize: { xs: "1.75rem", md: "2.25rem" },
              }}
            >
              Projects
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "text.secondary",
                mb: 8,
                maxWidth: 500,
                mx: "auto",
              }}
            >
              A selection of work spanning software engineering, machine
              learning, and blockchain.
            </Typography>
          </FadeInSection>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
              gap: 3,
            }}
          >
            {projects.map((project, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <Card
                  className="card-hover"
                  sx={{
                    bgcolor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 3,
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      bgcolor: "rgba(255,255,255,0.02)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: 140,
                      p: 2,
                    }}
                  >
                    <CardMedia
                      className="card-image"
                      component="img"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        transition: "transform 0.4s ease",
                        objectFit: "contain",
                        maxHeight: "100%",
                        width: "auto",
                        maxWidth: "100%",
                      }}
                    />
                    <Chip
                      label={project.tag}
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        bgcolor: "rgba(10,10,15,0.7)",
                        color: "#00d4aa",
                        fontWeight: 600,
                        fontSize: "0.7rem",
                        border: "1px solid rgba(0,212,170,0.3)",
                        backdropFilter: "blur(8px)",
                      }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{ color: "white", mb: 0.5, fontWeight: 600, fontSize: "0.95rem" }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        mb: 1.5,
                        lineHeight: 1.5,
                        fontSize: "0.8rem",
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {project.tech.map((t) => (
                        <Chip
                          key={t}
                          label={t}
                          size="small"
                          sx={{
                            bgcolor: "rgba(255,255,255,0.05)",
                            color: "text.secondary",
                            fontSize: "0.65rem",
                            height: 22,
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <Box sx={{ p: 2, pt: 0 }}>
                    <Button
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "#6c63ff",
                        fontWeight: 500,
                        fontSize: "0.85rem",
                        p: 0,
                        "&:hover": {
                          bgcolor: "transparent",
                          color: "#00d4aa",
                        },
                        transition: "color 0.3s ease",
                      }}
                    >
                      View Project
                      <OpenInNewIcon />
                    </Button>
                  </Box>
                </Card>
              </FadeInSection>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Contact ── */}
      <Box id="contact" sx={{ py: { xs: 10, md: 15 } }}>
        <Container maxWidth="sm">
          <FadeInSection>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                color: "white",
                mb: 2,
                fontSize: { xs: "1.75rem", md: "2.25rem" },
              }}
            >
              Get in Touch
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "text.secondary",
                mb: 6,
              }}
            >
              Open to opportunities in software engineering and product
              management. Let's connect.
            </Typography>
          </FadeInSection>

          <FadeInSection delay={0.15}>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
              {[
                {
                  icon: <LinkedInIcon />,
                  href: "https://www.linkedin.com/in/mavis-cheng",
                  label: "LinkedIn",
                },
                {
                  icon: <EmailIcon />,
                  href: "mailto:mavisczx@gmail.com",
                  label: "Email",
                },
                {
                  icon: <GitHubIcon />,
                  href: "https://github.com/mavisczx",
                  label: "GitHub",
                },
              ].map((social) => (
                <IconButton
                  key={social.label}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label={social.label}
                  sx={{
                    color: "text.secondary",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 2,
                    width: 56,
                    height: 56,
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </FadeInSection>
        </Container>
      </Box>

      {/* ── Footer ── */}
      <Box
        component="footer"
        sx={{
          py: 4,
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", fontSize: "0.8rem" }}
        >
          Designed & built by Mavis Cheng
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
