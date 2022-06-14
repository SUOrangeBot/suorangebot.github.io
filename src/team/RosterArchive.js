import * as React from 'react';
import { Grid } from '@mui/material';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MemberCard from './MemberCard';


export default function RosterArchive() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>2022 Spring Roster</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Grid container justifyContent={"flex-start"} >
                {
                team_2022_spring.map((member) => (
                    <Grid item xs={12} sm={4} md={3} lg={3} key={member.name}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        p: 2,
                        mb: 3,
                        width: '280px',
                    }}
                    >
                    <MemberCard member={member} />
                    </Grid>
                ))
                }
            </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}


const team_2022_spring = [
    {
      name: "Amia Diakite",
      position: "President",
      subteam: "Software",
    }, {
      name: "Alexandar Callo",
      position: "Mechanical Lead",
      subteam: "Mechanical",
    }, {
      name: "Arnaud Buard",
      position: "Software",
      subteam: "Software",
    }, {
      name: "Bei Luo",
      position: "Mechanical",
      subteam: "Mechanical",
    }, {
      name: "Kaifeng Chen",
      position: "Mechanical",
      subteam: "Mechanical",
    }, {
      name: "Luis Santin",
      position: "Electrical Lead",
      subteam: "Electrical",
    }, {
      name: "Zhuowei Zhang",
      position: "Vice President",
      subteam: "Software",
    }, 
  ]