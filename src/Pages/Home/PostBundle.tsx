import React from "react";
import ArticleCard from "../../Components/ArticleCard";
import CategoryTitle from "../../Components/CategoryTitle";
import { gql, useQuery } from "@apollo/client";

const getCategoryArticles = gql`
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

interface CardProps {
  attributes: {
    title: string;
    publishedAt: string;
    slug: string;
    cover: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

interface ArticlesProps {
  articles: {
    data: CardProps[];
  };
}

function PostBundle({ category }: { category: string }) {
  const { loading, error, data } = useQuery<ArticlesProps>(getCategoryArticles, { variables: { category: category } });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error : {error.message}</p>;
  }
  if (data)
    return (
      <div id={`${category.split(" ")[0]}`}>
        <CategoryTitle title={category} />
        <div className="grid justify-items-center grid-cols-4 pt-8">
          {data.articles.data.map((article) => (
            <ArticleCard data={article} />
          ))}
        </div>
      </div>
    );
  else return null;
}

export default PostBundle;
