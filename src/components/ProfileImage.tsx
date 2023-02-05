import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 150px;
  height: 150px;
  margin-bottom: 30px;
  border-radius: 50%;
`;

interface PropfileImageProps {
  profileImage: IGatsbyImageData;
}

const ProfileImage = ({ profileImage }: PropfileImageProps) => {
  return <ProfileImageWrapper image={profileImage} alt="Profile Image" />;
};

export default ProfileImage;
