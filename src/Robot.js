import { Container, Typography } from "@mui/material";
import * as React from "react";
import { useParams } from "react-router-dom";
import { robots } from "./robots/RobotData";

function Robot() {
  const { id } = useParams();
  const robot = robots.find((robot) => robot.id === parseInt(id));

  if (!robot) {
    return <div>Robot not found</div>;
  }

  return (
    <Container
      maxWidth="md"
      sx={{
        marginBottom: "20px",
      }}
    >
      <h1>{robot.name}</h1>
      <h4>For {robot.year} {robot.event}</h4>
      <img src={robot.image} alt="Robot" width={"50%"} />

      <div>
        {robot.sections.map((section, index) => (
          <React.Fragment key={index}>
            <Typography variant="h6" textAlign={"left"}>
              {section.title}
            </Typography>
            <Typography variant="body1" textAlign={"left"}>
              {section.content}
            </Typography>
            {index !== robot.sections.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    </Container>
  );
}

export default Robot;
