import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import PostHeadInfo, { PostHeadInfoProps } from './PostHeadInfo';

type GatsbyImgProps = {
  image: IGatsbyImageData;
  alt: string;
  className?: string;
};

type PostHeadProps = PostHeadInfoProps & {
  thumbnail: IGatsbyImageData;
};

const PostHeaderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30vh;

  @media (max-width: 768px) {
    height: 25vh;
  }
`;

const BackgroundImage = styled((props: GatsbyImgProps) => (
  <GatsbyImage {...props} style={{ position: 'absolute' }} />
))`
  z-index: -1;
  width: 70%;
  height: 100%;
  border-radius: 7px;
  object-fit: cover;
  filter: brightness(0.25);
`;

const PostHead = ({ title, date, categories, thumbnail }: PostHeadProps) => {
  return (
    <PostHeaderWrapper>
      <BackgroundImage image={thumbnail} alt="thumbnail" />
      <PostHeadInfo title={title} date={date} categories={categories} />
    </PostHeaderWrapper>
  );
};

export default PostHead;
