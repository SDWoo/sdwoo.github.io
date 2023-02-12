import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const src = 'https://giscus.app/client.js';
const repo = 'SDWoo/sdwoo.github.io';

type UtteranceAttributesType = {
  src: string;
  'data-repo': string;
  'data-repo-id': string;
  'data-category': string;
  'data-category-id': string;
  'data-mapping': string;
  'data-strict': string;
  'data-reactions-enabled': string;
  'data-emit-metadata': string;
  'data-input-position': string;
  'data-theme': string;
  'data-lang': string;
  crossorigin: string;
  async: string;
};

const GiscusWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const CommentWidget = () => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current === null) return;
    const giscus: HTMLScriptElement = document.createElement('script');

    const attributes: UtteranceAttributesType = {
      src,
      'data-repo': repo,
      'data-repo-id': 'R_kgDOI3JM_Q',
      'data-category': 'Comments',
      'data-category-id': 'DIC_kwDOI3JM_c4CUJ2Y',
      'data-mapping': 'title',
      'data-strict': '0',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'bottom',
      'data-theme': 'preferred_color_scheme',
      'data-lang': 'ko',
      crossorigin: 'anonymous',
      async: 'true',
    };

    // html 이 없어서 이렇게 따로 넣어줘야되나 봄
    Object.entries(attributes).forEach(([key, value]) => {
      giscus.setAttribute(key, value);
    });

    element.current.appendChild(giscus);
  }, []);

  return <GiscusWrapper ref={element} />;
};

export default CommentWidget;
