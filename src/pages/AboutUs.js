import { Box, Container, Grid, Typography } from "@mui/material";
import * as React from "react";
import ORHeading from "../house-components/ORHeading";
import Sponsors from "./Sponsors";

function AboutUs() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <ORHeading headingSize="h1">About Us</ORHeading>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Who We Are</Typography>
          <Typography variant="body1" sx={{ mt: 1, mb: 3, lineHeight: 1.6 }}>
            Orange Robotics is a student-led engineering club at the School of Engineering and Computer Science at Syracuse University. Founded in 2016 by passionate undergraduate and graduate students, our mission is to expose students to the field of robotics by encouraging them to participate in the designing, building, and creating of robots. We promote creativity and inspire students to become technology leaders, and we push learning by competing in robotic competitions and engaging in collaborative-based projects.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Our Challenges</Typography>
          <Typography variant="body1" sx={{ mt: 1, mb: 3, lineHeight: 1.6 }}>
            As a Registered Student Organization (RSO) on campus, we receive a semester budget from the Student Association (SA) for materials only. However, this funding comes with restrictions and cannot be used for extra costs like learning materials, competition fees, or traveling expenses.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Our Journey to the VEXU World Championship</Typography>
          <Typography variant="body1" sx={{ mt: 1, mb: 3, lineHeight: 1.6 }}>
            Since fall 2022, our passionate team of engineering students has been working tirelessly to design mechanical systems, software, and competition strategies to maximize our chances of success as a rookie team. Despite being underfunded and participating in our first year, our efforts and teamwork have enabled us to quickly learn, adapt, and build robots that helped us qualify for the 2023 VEX Robotics World Championship through the Skills Challenge.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">We Need Your Support</Typography>
          <Typography variant="body1" sx={{ mt: 1, mb: 3, lineHeight: 1.6 }}>
            Now that we have successfully qualified for the VEXU World Championship, we need help and support to cover our registration fees and traveling expenses. Our team members have already paid out of pocket for the first two competitions earlier this year, and we need additional funding to participate in the championship event.
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, mb: 3, lineHeight: 1.6 }}>
            We want to assure our valued sponsors that the funds raised will be used solely for these purposes, and we are committed to maintaining complete transparency in how the funds are allocated. By supporting our team, you will be playing a vital role in helping us showcase our talents on the global stage, while also allowing us to focus on our performance without the burden of financial constraints.
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, mb: 3, lineHeight: 1.6 }}>
            We greatly appreciate your generosity and will keep you informed of our progress and expenditure throughout the journey. If you are interested in sponsoring our team or have any questions, please feel free to reach out to us at <a href="mailto:suorangerobotics@gmail.com">suorangerobotics@gmail.com</a>.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h5" color="primary">
              Become a Sponsor
            </Typography>
          </Box> */}
          <Sponsors />
        </Grid>
      </Grid>
    </Container>
  );

}

export default AboutUs;
