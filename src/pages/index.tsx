import React from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'components/Common/GlobalStyle';
import Introduction from 'components/Introduction';
import Header from 'components/Common/Header';
import Footer from 'components/Common/Footer';
import CategoryList from 'components/CategoryList';
import PostList from 'components/PostList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 768px;
  width: 100%;
  min-height: 100vh;

  flex-direction: column;
`;

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
};

const IndexPage = () => {
  return (
    <Container>
      <Wrapper>
        <GlobalStyle />
        <Header />
        <Introduction />
        <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
        <PostList />
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default IndexPage;
