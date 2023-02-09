import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import Layout from 'components/Common/Layout';

const NotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const NotFoundText = styled.div`
  font-size: 150px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 100px;
  }
`;

const NotFoundDescription = styled.div`
  font-size: 25px;
  text-align: center;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const GoToMainButton = styled(Link)`
  margin-top: 30px;
  font-size: 20px;
  text-decoration: underline;

  &:hover {
    text-decoration: underline;
  }
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <NotFoundPageWrapper>
        <NotFoundText>404</NotFoundText>
        <NotFoundDescription>
          찾을 수 없는 페이지입니다. <br />
          다른 콘텐츠를 보러 가보시겠어요?
        </NotFoundDescription>
        <GoToMainButton to="/">메인으로</GoToMainButton>
      </NotFoundPageWrapper>
    </Layout>
  );
};

export default NotFoundPage;
