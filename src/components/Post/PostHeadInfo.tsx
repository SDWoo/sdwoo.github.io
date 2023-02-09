import styled from '@emotion/styled';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export type PostHeadInfoProps = {
  title: string;
  date: string;
  categories: string[];
};

const PostHeaderInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto; // 왜 이걸 쓸까 flex를 해놓고?
  padding: 60px 0;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 100%;
    padding: 40px 20px;
  }
`;

const PrevPageIcon = styled.div`
  display: grid;
  place-items: center; // 첨봄
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  color: #000000;
  font-size: 22px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 18px;
  }
`;

const Title = styled.div`
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: auto;
  white-space: normal;
  font-size: 35px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const PostHeaderInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500;

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
  }
`;

const PostHeadInfo = ({ title, date, categories }: PostHeadInfoProps) => {
  const goToBackPage = () => window.history.back();
  console.log(title, date, categories);
  return (
    <PostHeaderInfoWrapper>
      <PrevPageIcon onClick={goToBackPage}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </PrevPageIcon>
      <PostHeaderInfos>
        <Title>{title}</Title>
        <PostData>
          <div>{categories.join(' / ')}</div>
          <div>{date}</div>
        </PostData>
      </PostHeaderInfos>
    </PostHeaderInfoWrapper>
  );
};

export default PostHeadInfo;
