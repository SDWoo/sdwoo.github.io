import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'components/Common/GlobalStyle';
import Footer from 'components/Common/Footer';
import Header from 'components/Common/Header';
import { Helmet } from 'react-helmet';
import { PostListItemType } from 'types/PostItem.types';
type LayoutProps = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  posts?: PostListItemType[];
  children: ReactNode;
};

const Container = styled.main`
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

const Layout = ({
  title,
  description,
  url,
  image,
  posts,
  children,
}: LayoutProps) => {
  return (
    <Container>
      <Wrapper>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta property="og:url" content={url} />
          <meta property="og:site_name" content={title} />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />
          <meta name="twitter:site" content="@" />
          <meta name="twitter:creator" content="@사용자이름" />

          <meta
            name="google-site-verification"
            content="GIdjNoG0Gz01A9W7u5J1FH7khlkzqg8PM2hnh3pOgmc"
          />
          <meta
            name="naver-site-verification"
            content="480cb71e006a1a233e92748c8ba63215673624d6"
          />

          <html lang="ko" />
        </Helmet>
        <Header posts={posts} />
        <GlobalStyle />
        {children}
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Layout;
