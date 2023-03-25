import { Container, Typography, Modal, Box } from "@mui/material";
import * as React from "react";
import { useParams } from "react-router-dom";
import { robots } from "../constants/robotInfo";

function RobotDetail() {
  const { id } = useParams();
  const robot = robots.find((robot) => robot.id === parseInt(id));

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    console.log("open\n")
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <h4>
        For {robot.year} {robot.event}
      </h4>
      <img
        src={robot.image.default}
        alt="Robot"
        width={"50%"}
        onClick={handleOpen}
        style={{
          borderRadius: "4px",
          cursor: "pointer",
        }}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="robot-image-modal"
        aria-describedby="robot-image-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            maxWidth: "95%",
            maxHeight: "95%",
            overflow: "auto",
          }}
        >
          <img
            src={robot.image.default}
            alt="Robot"
            width="100%"
            style={{
              display: "block",
              borderRadius: "4px",
            }}
          />
        </Box>
      </Modal>

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

export default RobotDetail;
