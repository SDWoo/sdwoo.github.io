import React from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'components/Common/GlobalStyle';
import Introduction from 'components/Introduction';
import Header from 'components/Common/Header';
import Footer from 'components/Common/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  min-height: 100vh;
  word-break: keep-all;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 720px;
  width: 100%;

  flex-direction: column;
`;

const IndexPage = function () {
  return (
    <Container>
      <Wrapper>
        <GlobalStyle />
        <Header />
        <Introduction />
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default IndexPage;
