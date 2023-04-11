import { gql } from "@apollo/client";

export const getCategoryArticles = gql`
  query getArticles($category: String!) {
    articles(filters: { category: { name: { startsWith: $category } } }, pagination: { limit: 4 }) {
      data {
        attributes {
          title
          publishedAt
          slug
          cover {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const getAllCategoryArticles = gql`
  query getArticles($category: String!) {
    articles(filters: { category: { name: { startsWith: $category } } }) {
      data {
        attributes {
          title
          publishedAt
          slug
          cover {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const getFullArticle = gql`
  query getFullArticle($slug: String!) {
    articles(filters: { slug: { contains: $slug } }) {
      data {
        attributes {
          title
          publishedAt
          mainTopic
          cover {
            data {
              attributes {
                url
              }
            }
          }
          category {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
