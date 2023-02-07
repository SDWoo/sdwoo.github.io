import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'components/Common/GlobalStyle';
import Footer from 'components/Common/Footer';
import Header from 'components/Common/Header';

type LayoutProps = {
  children: ReactNode;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 768px;
  width: 100%;
  min-height: 100vh;

  flex-direction: column;
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <GlobalStyle />
        {children}
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Layout;
