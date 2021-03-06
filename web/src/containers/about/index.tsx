import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import LogoImage from '../../images/logo_big.png';
import SocialProfile from '../../components/social-profile/social-profile';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io';
import {
  AboutWrapper,
  AboutImage,
  AboutPageTitle,
  AboutDetails,
  SocialProfiles,
} from './style';

const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: 'https://www.facebook.com/redqinc/',
    tooltip: 'Facebook',
  },
  {
    icon: <IoLogoInstagram />,
    url: 'https://www.instagram.com/redqinc/',
    tooltip: 'Instagram',
  },
  {
    icon: <IoLogoTwitter />,
    url: 'https://twitter.com/redqinc',
    tooltip: 'Twitter',
  },
  {
    icon: <IoLogoLinkedin />,
    url: 'https://www.linkedin.com/company/redqinc/',
    tooltip: 'Linked In',
  },
];

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = (props) => {

  return (
    <AboutWrapper>

      <AboutPageTitle>
        <h2>About Ethio-Eritrean Tape Archive</h2>
        <p>
          StoryHub is a beautiful Gatsby Blog theme designed to showcase your
          work in style. Perfect for designers, artists, photographers and
          developers to use for their portfolio website.
        </p>
      </AboutPageTitle>
      <AboutImage>
        <img src={LogoImage} alt="logo" />
      </AboutImage>


      <AboutDetails>
        <h2>Hey there, what’s up?</h2>
        <p>
          RedQ Team is a creative agency specializing in building scalable,
          high-performance web & mobile application. Our main concern is
          creating more value into the application so that can help our
          customers to grow their business.
        </p>
        <p>
          RedQ Team is a creative agency specializing in building scalable,
          high-performance web & mobile application. Our main concern is
          creating more value into the application so that can help our
          customers to grow their business.
        </p>

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  );
};

export default About;
