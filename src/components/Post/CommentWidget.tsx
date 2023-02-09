import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const src = 'https://utteranc.es/client.js';
const repo = 'SDWoo/sdwoo.github.io';

type UtteranceAttributesType = {
  src: string;
  repo: string;
  'issue-term': string;
  label: string;
  theme: string;
  crossorigin: string;
  async: string;
};

const UtterancesWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const CommentWidget = () => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current === null) return;
    const utterances: HTMLScriptElement = document.createElement('script');

    const attributes: UtteranceAttributesType = {
      src,
      repo,
      'issue-term': 'pathname',
      label: 'comments',
      theme: 'github-light',
      crossorigin: 'anonymous',
      async: 'true',
    };

    // html 이 없어서 이렇게 따로 넣어줘야되나 봄
    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    element.current.appendChild(utterances);
  }, []);

  return <UtterancesWrapper ref={element} />;
};

export default CommentWidget;
