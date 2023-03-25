export const robots = [
    {
      id: 1,
      name: "Amphitrite",
      year: "2022",
      event: "RoboSub",
      image: require("./images/body2.png"),
      sections: [
        {
          title: "About the Robot",
          content:
            "A fully autonomous robot that is expected to submerge into the water and perform a variety of tasks.",
        },
        {
          title: "Mechanical Design",
          content: `Amphitrite’s frame is designed around stability, flexibility, durability, and versatility. Acrylic was used because of its lightweight, compact, and inexpensive material which allows for mass production. A 4-inch diameter PVC pipe was used as the main body to contain all the electrical components with 2 plates on both ends and 8 thread sticks to hold the submarine in position. The design creates greater stability and ability for the frame to absorb the shock in case of impact. Additionally, the design allows the team to easily place and rearrange sensors, cameras, thrusters, and other attachments if necessary.`,
        },
        {
          title: "Software & Electronics Stack",
          content: `The robot is powered by two 12v lipo batteries and controlled by Raspberry Pi 4 as the computer and Arduino Uno as the microcontroller board.
  
  We are controlling the thrusters through BlueRobotics ESC controllers, and detecting the surroundings through cameras, sonar, IMU, and depth sensors.
  
  The software team leverages Robotics Operating System to control the robot. We are currently developing the Computer Vision and PID controller modules for the robot.`,
        },
      ],
    },
  ];
  