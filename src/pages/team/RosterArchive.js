import * as React from 'react';
import { Grid } from '@mui/material';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MemberCard from './MemberCard';
import { TEAM_2022_SUMMER, TEAM_2022_SPRING } from '../../constants/teamInfo.js'


export default function RosterArchive() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>2022 Summer Roster</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container justifyContent={"flex-start"} >
              {
              TEAM_2022_SUMMER.map((member) => (
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
              TEAM_2022_SPRING.map((member) => (
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

