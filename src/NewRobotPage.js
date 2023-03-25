import { Box, Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import { robots } from "./robots/RobotData";

function RobotCard(props) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <img src={props.image} alt={props.title} style={{ height: "200px", objectFit: "contain" }} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" textAlign={"left"} sx={{ mt: 2 }}>
            {props.name}
          </Typography>
          <Typography variant="body1" textAlign={"left"} sx={{ mt: 1 }}>
            {props.description}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              component={Link}
              to={`/robots/${props.id}`}
              size="small"
              sx={{
                borderRadius: "20px",
                textTransform: "none",
                boxShadow: "none",
                bgcolor: "#D44500",
                color: "white",
                width: "100%",
                "&:hover": {
                  bgcolor: "#A32D00",
                },
              }}
            >
              More Details
            </Button>
          </Box>
        </CardContent>
      </Card>
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
