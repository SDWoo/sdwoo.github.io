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
  }
  * + h1,
  * + h2,
  * + h3 {
    margin-top: 20px;
  }

  hr + h1,
  hr + h2,
  hr + h3,
  hr + h4 {
    margin-top: 10px;
  }

  h1 {
    font-size: 35px;
  }

  h2 {
    font-size: 30px;
  }

  h3 {
    font-size: 25px;
  }

  h4 {
    font-size: 20px;
    padding-top: 10px;
  }

  // 인용문 스타일
  blockquote {
    margin: 5px 0;
    padding: 5px 15px;
    border-left: 2px solid #000000;
    font-weight: 800;
  }

  // 리스트 스타일
  ol,
  ul {
    margin-left: 20px;
    padding: 5px 0;
  }

  // 구분선 디자인
  hr {
    border: 1px solid #000000;
    margin: 30px 0;
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
    border-radius: 8px;

    // 막대기
    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }

    // 뒷배경
    &::-webkit-scrollbar {
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    color: #edd694;
    background-color: #1b1b1b;
    tab-size: 2;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 80px 20px;
    line-height: 1.6;
    font-size: 14px;

    h1 {
      font-size: 23px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 17px;
    }

    img {
      width: 100%;
    }

    hr {
      margin: 50px 0;
    }
  }
`;

const PostContent = ({ html }: PostContentProps) => {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
};

export default PostContent;
