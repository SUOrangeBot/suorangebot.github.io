import * as React from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import sponsorImage01 from "../images/syr_eng-comp-science_full.svg";
import sponsorImage02 from "../images/SYRACUSE_Horizontal_2Line_ORANGE_RGB.png";

import ORTitle from '../house-components/ORHeading';


function Sponsors() {
    return (
        <div>
            <ORTitle>Current Sponsors</ORTitle>

            <header style={{
                    marginBottom: "2rem",
                }}>
                We are grateful to our sponsors for their support of our team.
            </header>

            <img src={sponsorImage02} alt="Robot" 
                width={"30%"}
                style={{
                    marginRight: "2rem",
                }}
            />
            <img src={sponsorImage01} alt="Robot" 
                width={"40%"}
            />  
        </div>
    )
}

export default Sponsors;