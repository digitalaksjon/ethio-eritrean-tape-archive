import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SocialProfile from '../../../components/social-profile/social-profile';
import {
  IntroWrapper,
  IntroTitle,
  Desciption,
  BgImage,
  IntroContentWrapper,
} from './style';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
} from 'react-icons/io';

type IntroProps = {};

const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: '#',
    tooltip: 'Facebook',
  },
  {
    icon: <IoLogoInstagram />,
    url: '#',
    tooltip: 'Instagram',
  },
  {
    icon: <IoLogoTwitter />,
    url: '#',
    tooltip: 'Twitter',
  },
  {
    icon: <IoLogoGithub />,
    url: '#',
    tooltip: 'Github',
  },
];

const Intro: React.FunctionComponent<IntroProps> = (props) => {
  const Data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `);

  const { about } = Data.site.siteMetadata;

  return (
    <IntroWrapper>
      <BgImage>ETHIO</BgImage>
      <IntroContentWrapper>
        <IntroTitle>Tapes from Ethiopia and Eritrea</IntroTitle>
        <Desciption>{about}</Desciption>
        <SocialProfile items={SocialLinks} />
      </IntroContentWrapper>
    </IntroWrapper>
  );
};

export default Intro;
