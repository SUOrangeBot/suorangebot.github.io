import * as React from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import sponsorImage01 from "../images/syr_eng-comp-science_full.svg";
import sponsorImage02 from "../images/SYRACUSE_Horizontal_2Line_ORANGE_RGB.png";
import sponsorImage03 from "../images/sa.png"

import ORTitle from '../house-components/ORHeading';

function Sponsors() {
    const imgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        objectPosition: 'center',
    };

    return (
        <div>
            <ORTitle>Current Sponsors</ORTitle>

            <header style={{
                    marginBottom: "2rem",
                }}>
                We are grateful to our sponsors for their support of our team.
            </header>

            <ImageList variant="masonry" cols={3} gap={8}>
                <ImageListItem style={{ width: '280px', height: '200px' }}>
                    <img
                        src={sponsorImage01}
                        alt="Syracuse University"
                        loading="lazy"
                        style={imgStyle}
                    />
                </ImageListItem>
                <ImageListItem style={{ width: '280px', height: '200px' }}>
                    <img
                        src={sponsorImage02}
                        alt="SU ESC"
                        loading="lazy"
                        style={imgStyle}
                    />
                </ImageListItem>
                <ImageListItem style={{ width: '180px', height: '180px' }}>
                    <img
                        src={sponsorImage03}
                        alt="SA"
                        loading="lazy"
                        style={imgStyle}
                    />
                </ImageListItem>
            </ImageList>
        </div>
    )
}

export default Sponsors;
