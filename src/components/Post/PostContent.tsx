import styled from '@emotion/styled';
import React from 'react';

interface PostContentProps {
  html: string;
}

const MarkdownRenderer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 100px 0;
  word-break: break-all;

  line-height: 1.8;
  font-size: 16px;
  font-weight: 400;

  p {
    padding: 3px 0;
  }

  h1,
  h2,
  h3 {
    font-weight: 800;
    margin-bottom: 30px;
  }
  * + h1,
  * + h2,
  * + h3 {
    margin-top: 80px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  // 인용문 스타일
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid #000000;
    font-weight: 800;
  }

  // 리스트 스타일
  ol,
  ul {
    margin-left: 20px;
    padding: 30px 0;
  }

  // 구분선 디자인
  hr {
    border: 1px solid #000000;
    margin: 100px 0;
  }

  // Link 디자인
  a {
    color: #4263eb;
    text-decoration: underline;
  }

  // 코드 블럭 디자인
  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }
`;

const PostContent = ({ html }: PostContentProps) => {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
};

export default PostContent;
