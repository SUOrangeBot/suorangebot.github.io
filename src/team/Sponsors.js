

import * as React from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import sponsorImage01 from "../images/syr_eng-comp-science_full.svg";
import sponsorImage02 from "../images/SYRACUSE_Horizontal_2Line_ORANGE_RGB.png";

import ORTitle from '../house-components/ORTitle';


function Sponsors() {
    return (
        <div>

            <ORTitle>Our Sponsors</ORTitle>

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

            <p>
            We are currently looking for sponsors to support our team.
            </p>
            <p>
                If you are interested in sponsoring our team, please contact us at <a href="mailto:suorangerobotics@gmail.com">
                suorangerobotics@gmail.com
            </a>
            </p>
        </div>
    )
}

export default Sponsors;