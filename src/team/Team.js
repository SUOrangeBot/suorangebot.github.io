
import { Grid, Link, Container } from '@mui/material';
import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import RosterArchive from './RosterArchive';
import MemberCard from './MemberCard';
import Sponsors from './Sponsors';

import ORTitle from '../components/ORTitle';

const team = [
  {
    name: "Zhuowei Zhang",
    position: "President & Software Lead",
    subteam: "Software",
  }, {
    name: "Alexandar Callo",
    position: "Vice President & Mechanical Lead",
    subteam: "Mechanical",
  }, {
    name: "Bei Luo",
    position: "Mechanical Team",
    subteam: "Mechanical",
  }, {
    name: "Kaifeng Chen",
    position: "Mechanical Team",
    subteam: "Mechanical",
  }, {
    name: "Luis Santin",
    position: "Electrical Lead",
    subteam: "Electrical",
  }, {
    name: "Arnaud Buard",
    position: "Software Team",
    subteam: "Software",
  }, {
    name: "Natalia Amado",
    position: "Secretary",
    subteam: "Software",
  }
]

function Team() {
  return (
    <Container maxWidth="md">
      <h1>Our Team</h1>
      <p>
        In the 2022 season, the Orange Robotics team will be competing at RoboNation's 
        <span> <Link href="https://robosub.org/programs/2022/">RoboSub competition</Link>.
        </span>
      </p>
      <p>
        Team meeting time: Friday 1:30 PM - 3:30 PM
      </p>
      <p>
        Location: Link Hall 043B
      </p>

      <ORTitle>2022 Summer Roster</ORTitle>
      <Grid container justifyContent={"flex-start"} >
        {
          team.map((member) => (
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

      <ORTitle>Previous Team</ORTitle>
      <RosterArchive />
      <div style={{
        marginBottom: '2rem'
      }}></div>


      <Sponsors />
      <div style={{
        marginBottom: '2rem'
      }}></div>
    </Container>
  )
}

export default Team;

