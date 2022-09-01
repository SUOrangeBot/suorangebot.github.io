import { Box, Button, Container, Typography } from "@mui/material";
import * as React from "react";


function Apply() {
  return (
    <Container maxWidth="md"
      sx={{
        marginBottom: "20px",
      }}
    >
      <h1>Apply</h1>

      <Typography variant="body1">
        Orange Robotics always welcomes new members on a rolling basis, we are glad to hear of your interest and would love to have you!
      </Typography>
      
      <Typography variant="body1">
        At the moment, experience with CAD modeling, VEX/FRC/FTC, C++ coding, fund raising or designing is a plus.
      </Typography>
      <Typography variant="body1"
        sx={{
          display: { xs:'none', md:'block' },
        }}
      >
        You can join the mailing list now to get latest updates for Fall 2022
      </Typography>

      <Button
        size="large"
        variant='outlined'
        href="https://forms.gle/5L79kFVRJh4zwgmZ9"
        target="_blank"
        style={{
          margin: '1rem',
        }}
      >Interest Form</Button>

      <Box 
        sx={{
          display: { xs:'none', md:'block' },
        }}
      >
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf4OdshWED6Dh7TSnuXRtlgwKVJkQYKsUS8PbOxZ9hDZR15Dw/viewform?embedded=true" width="640" height="2145" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

      </Box>
    </Container>
  )
}

export default Apply;
