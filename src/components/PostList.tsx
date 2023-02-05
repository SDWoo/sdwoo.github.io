import React from 'react';
import styled from '@emotion/styled';
import PostItem from './PostItem';
import { PostListItemType } from '../types/PostItem.types';
const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`;

const PostList = ({ posts }: { posts: PostListItemType[] }) => {
  return (
    <PostListWrapper>
      {posts.map(({ node: { id, frontmatter } }: PostListItemType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr/" key={id} />
      ))}
    </PostListWrapper>
  );
};

export default PostList;
