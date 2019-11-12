import React from 'react';
import { SocialAnchor, SocialImage } from './SocialMedia.styles';
const SocialMedia = ({ link, url, name, mail }) => {
  return (
    <>
      {mail ? (
        <SocialAnchor href={`mailto:${mail}`}>
          <SocialImage src={url} alt={name} />
        </SocialAnchor>
      ) : (
        <SocialAnchor href={link} target='_blank'>
          <SocialImage src={url} alt={name} />
        </SocialAnchor>
      )}
    </>
  );
};

export default SocialMedia;
