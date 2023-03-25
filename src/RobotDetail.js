import { Container, Paper, Typography } from "@mui/material";
import * as React from "react";
import { useParams } from "react-router-dom";
import robotImage from "./images/body2.png";

function RobotDetails() {
  const { id } = useParams();

  const robots = [
    {
      title: "Amphitrite",
      description:
        "A fully autonomous robot that is expected to submerge into the water and perform a variety of tasks.",
      imageSrc: robotImage,
    },
  ];

  const robot = robots[id];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" textAlign={"center"} sx={{ mb: 4 }}>
        {robot.title} Details
      </Typography>
      <Paper sx={{ p: 2 }}>
        <img src={robot.imageSrc} alt={robot.title} style={{ height: "400px", objectFit: "contain" }} />
        <Typography variant="body1" textAlign={"left"} sx={{ mt: 2 }}>
          {robot.description}
        </Typography>
      </Paper>
    </Container>
  );
}

export default RobotDetails;
