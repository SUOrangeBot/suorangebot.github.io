
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MemberCard = ({ member }) => {
    return (
        <Card
        elevation={0}
        sx={{
        width: '100%',
        }}>
        {/* <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/idk.jpg"
            alt="Profile Picture"
        /> */}
        <CardContent>
            <Typography color="primary" gutterBottom variant="h6" component="div">
            {member.name}
            </Typography>
            <Typography  variant="body2" color="text.secondary">
            {member.position}
            </Typography>
        </CardContent>
        {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions> */}
        </Card>
    )
}

export default MemberCard;