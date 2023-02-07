import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Common/Layout';

type PostTemplateProps = {};

const PostTemplate = (props: PostTemplateProps) => {
  return <Layout>post_template</Layout>;
};

export default PostTemplate;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
