import { Container, Typography } from "@mui/material";
import * as React from "react";
import robotImage from "./images/body2.png";

function Robot() {
  return (
    <Container maxWidth="md"
      sx={{
        marginBottom: "20px",
      }}
    >
      <h1>Amphitrite</h1>
      <h4>For 2022 RoboSub</h4>
      <img src={robotImage} alt="Robot" 
        width={"50%"}
      />

      <div>
        <Typography variant="h6" textAlign={"left"}>
          About the Robot
        </Typography>
        <Typography variant="body1" textAlign={"left"}>
          A fully autonomous robot that is expected to submerge into the water and perform a variety of tasks.
        </Typography>
        <br></br>

        
        <Typography variant="h6" textAlign={"left"}>
          Mechanical Design
        </Typography>
        <Typography variant="body1" textAlign={"left"}>
          Amphitrite’s frame is designed around stability, flexibility, durability, and versatility. Acrylic was used because of its lightweight, compact, and inexpensive material which allows for mass production. A 4-inch diameter PVC pipe was used as the main body to contain all the electrical components with 2 plates on both ends and 8 thread sticks to hold the submarine in position. The design creates greater stability and ability for the frame to absorb the shock in case of impact. Additionally, the design allows the team to easily place and rearrange sensors, cameras, thrusters, and other attachments if necessary.
        </Typography>


        <br></br>
        <Typography variant="h6" textAlign={"left"}>
          Software & Electronics Stack
        </Typography>

        <Typography variant="body1" textAlign={"left"}>
          The robot is powered by two 12v lipo battries and controlled by Raspberry Pi 4 as the computer and Arduino Uno as the microcontroller board.
        </Typography>

        <Typography variant="body1" textAlign={"left"}>
          We are controlling the thrusters through BlueRobotics ESC controllers, and detecting the surroundings through cameras, sonar, IMU, and depth sensors.
        </Typography>

        <Typography variant="body1" textAlign={"left"}>
          The software team leverages Robotics Operating System to control the robot. We are currently developing the Computer Vision and PID controller modules for the robot.
        </Typography>
      </div>
    </Container>
  )
}

export default Robot;