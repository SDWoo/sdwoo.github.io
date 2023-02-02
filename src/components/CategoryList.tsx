import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

export interface CategoryListProps {
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  };
}

interface GatsbyLinkProps {
  children: ReactNode;
  className?: string;
  active?: boolean;
  to: string;
}

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  max-width: 768px;

  @media (max-width: 768px) {
    margin-left: 50px;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<GatsbyLinkProps>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }
`;

const CategoryList = ({
  selectedCategory,
  categoryList,
}: CategoryListProps) => {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?categroy=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          #{name}({count})
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  );
};

export default CategoryList;
