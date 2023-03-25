import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import * as React from "react";

function Apply() {
  return (
    <Container maxWidth="md" sx={{ marginBottom: "20px", mt: 4 }}>
      <Typography variant="h4" textAlign={"center"} sx={{ mb: 4 }}>
        Apply
      </Typography>

      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Orange Robotics always welcomes new members on a rolling basis, we are glad to hear of your interest and would love to have you!
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          At the moment, experience with CAD modeling, VEX/FRC/FTC, fund raising, media management designing is a plus. (2023 April)
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, display: { xs: "none", md: "block" } }}>
          You can join the mailing list now to get the latest updates for Fall 2022.
        </Typography>

        <Button
          size="large"
          variant="outlined"
          href="https://forms.gle/Z4e9B5PtzLVWGdLa6"
          target="_blank"
          sx={{ mb: 2 }}
        >
          Interest Form
        </Button>
      </Paper>

      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe4h844jDOQCT2vChAbKgK0huAyrpUAbqEBCfu-ppVXLI7hoQ/viewform?embedded=true" width="640" height="982" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Apply;
