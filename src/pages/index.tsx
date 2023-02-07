import React, { useMemo } from 'react';
import Introduction from 'components/Introduction';
import CategoryList from 'components/CategoryList';
import PostList from 'components/PostList';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { PostListItemType } from '../types/PostItem.types';
import queryString, { ParsedQuery } from 'query-string';
import { graphql } from 'gatsby';
import { CategoryListProps } from '../components/CategoryList';
import Layout from 'components/Common/Layout';

interface IndexPageProps {
  location: {
    search: string;
  };
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[];
    };
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}

const IndexPage = ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}: IndexPageProps) => {
  const parsed: ParsedQuery<string> = queryString.parse(search);
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category;

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostListItemType,
        ) => {
          categories.forEach(category => {
            list[category] =
              list[category] === undefined ? 1 : list[category] + 1;
          });

          list['All'] += 1;

          return list;
        },
        { All: 0 },
      ),
    [],
  );

  return (
    <Layout>
      <Introduction profileImage={gatsbyImageData} />
      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
      <PostList selectedCategory={selectedCategory} posts={edges} />
    </Layout>
  );
};

export default IndexPage;

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
    }
  }
`;
