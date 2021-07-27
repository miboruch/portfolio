import React from 'react';

import { links } from 'config/socials';

import { Row, Link, Paragraph } from './social-links.styles';

const SocialLinks: React.FC = () => {
  return (
    <Row>
      {links.map(({ name, url }) => (
        <Link href={url} key={name}>
          {name}
        </Link>
      ))}
      <Paragraph>Pl</Paragraph>
    </Row>
  );
};

export default SocialLinks;
