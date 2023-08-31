import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

const InstagramFeed = ({ isVisible, latestPostLink }) => {

  latestPostLink = latestPostLink ? latestPostLink : 'https://www.instagram.com/p/CsEcjHZL7yb/';

  return (
    <div className="instagram-widget" style={{ display: isVisible ? 'block' : 'none' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InstagramEmbed url={latestPostLink} />
      </div>
    </div>
  );
};

export default InstagramFeed;
