import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import robotImage from "./images/body2.png";

function RobotCard(props) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column", height: "100%" }}>
        <img src={props.imageSrc} alt={props.title} style={{ height: "200px", objectFit: "contain" }} />
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" textAlign={"left"} sx={{ mt: 2 }}>
            {props.title}
          </Typography>
          <Typography variant="body1" textAlign={"left"} sx={{ mt: 1 }}>
            {props.description}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" component={Link} to={`/robots/${props.id}`} size="small">
              More Details
            </Button>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}

function RobotsList(props) {
  return (
    <Grid container spacing={2} sx={{ mt: 4, mb: 4 }}>
      {props.robots.map((robot, index) => (
        <RobotCard key={index} id={index} {...robot} />
      ))}
    </Grid>
  );
}

function Robot() {
  const robots = [
    {
      title: "Amphitrite",
      description:
        "A fully autonomous robot that is expected to submerge into the water and perform a variety of tasks.",
      imageSrc: robotImage,
    },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" textAlign={"center"} sx={{ mb: 4 }}>
        Our Robots
      </Typography>
      <RobotsList robots={robots} />
    </Container>
  );
}

export default Robot;
