import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import ProfileImage from './ProfileImage';
import ReactRotatingText from 'react-rotating-text';
import { keyframes } from '@emotion/react';
import IconButtonBar from './IconButtonBar';

const blinking_cursor = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 120px;
  margin-bottom: 120px;
  background-color: white;
`;

const IntroductionWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  word-break: keep-all;
`;

const Title = styled.p`
  font-size: 32px;
  font-weight: 300;
  span {
    .react-rotating-text {
      animation: ${blinking_cursor} 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0
        infinite;
      font-size: 35px;
      line-height: 35px;
    }
  }
`;

const ThumbnailWrapper = styled.div``;

const SocialLink = styled.div``;

export interface Link {
  [index: string]: string;
  post: string;
  github: string;
  demo: string;
}

const Introduction = function () {
  const description: string[] = [
    '새로운 것에 이끌리는',
    '사람에게 이로운 것을 추구하는',
    '타이거 벨트인',
  ];

  const links: Link = {
    post: '/gatsby-starter-zoomkoding-introduction',
    github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
    demo: 'https://www.zoomkoding.com',
  };

  return (
    <Container>
      <IntroductionWrapper>
        <Title>
          안녕하세요.
          <br />
          <ReactRotatingText items={description} />
          <br />
          개발자 <strong>신동우</strong>입니다.
          <br />
        </Title>
        <SocialLink>
          <IconButtonBar links={links} />
        </SocialLink>
      </IntroductionWrapper>
      <ThumbnailWrapper>
        <ProfileImage />
      </ThumbnailWrapper>
    </Container>
  );
};

export default Introduction;
