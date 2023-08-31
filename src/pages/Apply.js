import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import * as React from "react";
import ORHeading from "../house-components/ORHeading";

function Apply() {
  return (
    <Container maxWidth="md" sx={{ marginBottom: "20px", mt: 4 }}>

      <ORHeading headingSize="h1">
        Apply
      </ORHeading>

      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Orange Robotics will hold a recruitment event in the fall semester. If you are interested please fill out the form below. We will contact you when the recruitment details are finalized.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          At the moment, experience with CAD modeling, VEX/FRC/FTC, PID control, CV, fund raising, web dev is a plus. (2023 April)
        </Typography>

        <Button
          size="large"
          variant="outlined"
          href="https://forms.gle/GZxWonnnCUA2RDSr9"
          target="_blank"
          sx={{ mb: 2 }}
        >
          Interest Form
        </Button>
      </Paper>

      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScfde4ChxadMmU44ZoELE8RKPmxF4yDFpiF0ImGXs9XjsuR1Q/viewform?embedded=true" width="640" height="1888" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Apply;
