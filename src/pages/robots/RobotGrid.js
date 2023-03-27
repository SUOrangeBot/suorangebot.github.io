import { Box, Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import { robots } from "../../constants/robotInfo";
import ORHeading from "../../house-components/ORHeading";

function RobotCard(props) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Link to={`/robots/${props.id}`} style={{ textDecoration: "none" }}>
          <Box
            sx={{
              height: "200px",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <img
              src={props.image.profile}
              alt={props.title}
              style={{ objectFit: "contain", maxWidth: "100%", maxHeight: "100%" }}
            />
          </Box>
        </Link>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" textAlign={"left"} sx={{ mt: 2 }}>
            {props.name}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" sx={{ 
            mb: 1, 
            textAlign: "left"
          }}>
            Year: {props.year}
          </Typography>
          <Typography variant="body1" textAlign={"left"} sx={{ mt: 1 }}>
            {props.description}
          </Typography>
        </CardContent>
        <Box sx={{ p: 1, display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            component={Link}
            to={`/robots/${props.id}`}
            // size="small"
            sx={{
              borderRadius: "8px",
              textTransform: "none",
              boxShadow: "none",
              bgcolor: "#D44500",
              color: "white",
              "&:hover": {
                bgcolor: "#A32D00",
              },
            }}
          >
            More Details
          </Button>
        </Box>
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

function RobotGrid() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <ORHeading headingSize="h1">Our Robots</ORHeading>
      <RobotsList robots={robots} />
    </Container>
  );
}

export default RobotGrid;
