import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import PostItem from './PostItem';
import { PostListItemType } from '../types/PostItem.types';
import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll';
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

interface PostListProps {
  selectedCategory: string;
  posts: PostListItemType[];
}

const PostList = ({ selectedCategory, posts }: PostListProps) => {
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  );

  return (
    <PostListWrapper ref={containerRef}>
      {postList.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: PostListItemType) => (
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          <PostItem {...frontmatter} link={slug} key={id} />
        ),
      )}
    </PostListWrapper>
  );
};

export default PostList;
