
import { Grid, Link, Container } from '@mui/material';
import * as React from 'react';

import RosterArchive from './RosterArchive';
import MemberCard from './MemberCard';

import { TEAM_2022_SUMMER, TEAM_2023_SPRING } from '../../constants/teamInfo.js'
import ORHeading from '../../house-components/ORHeading';

function Team() {
  return (
    <Container maxWidth="md">
      <ORHeading headingSize="h1">Our Team</ORHeading>
      <p>
        Team meeting time: Friday 5PM-8PM
      </p>
      <p>
        Location: Link Hall 023 (Basement)
      </p>
      <p>
        In the 2023 season, Orange Robotics compted at the New York City and RIT events, and was invited to the World Championship.
      </p>
      <p>
        In the 2022 season, the Orange Robotics team was competing at RoboNation's 
        <span> <Link href="https://robosub.org/programs/2022/">RoboSub competition</Link>.
        </span>
      </p>

      <ORHeading>2023 Spring Roster</ORHeading>
      <Grid container justifyContent={"flex-start"} >
        {
          TEAM_2023_SPRING.map((member) => (
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

      <ORHeading>Previous Team</ORHeading>
      <RosterArchive />

      <div style={{
        marginBottom: '2rem'
      }}></div>
    </Container>
  )
}

export default Team;

