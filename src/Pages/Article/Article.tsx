import { useLocation } from "react-router-dom";
import ArticleRoute from "./ArticleRoute";
import Topic from "./Topic";
import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";

interface ArticleProps {
  articles: {
    data: {
      attributes: {
        category: { data: { attributes: { name: string } } };
        cover: { data: { attributes: { url: string } } };
        mainTopic: string;
        publishedAt: string;
        title: string;
        updatedAt: string;
      };
    }[];
  };
}

const getFullArticle = gql`
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

function Article() {
  const location = useLocation().pathname.split("/")[2];

  const { loading, error, data } = useQuery<ArticleProps>(getFullArticle, { variables: { slug: location } });

  const dataInfo = data?.articles.data[0].attributes;

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error : {error.message}</p>;
  }
  if (dataInfo)
    return (
      <div className="bg-custom-off-white text-custom-black pb-20">
        <ArticleRoute category={dataInfo.category.data.attributes.name} title={dataInfo.title} />
        <img
          src={"http://localhost:1337" + dataInfo.cover.data.attributes.url}
          alt=""
          className="w-full h-60 absolute z-0 object-cover"
        />

        <div className="grid justify-center-center mx-40 mt-20 py-10 px-32 z-10 rounded-md bg-white drop-shadow-lg shadow-md">
          <h1 className="heading mt-12 text-center">{dataInfo.title}</h1>

          <div className="h-[3px] w-40 rounded-full my-12 bg-custom-blue justify-self-center" />

          <div className="flex flex-col space-y-8">
            {dataInfo.mainTopic.split("\n\n").map((item, index) => {
              return <Topic content={item} key={item[0] + index} />;
            })}
          </div>
        </div>
      </div>
    );
  else return null;
}

export default Article;
