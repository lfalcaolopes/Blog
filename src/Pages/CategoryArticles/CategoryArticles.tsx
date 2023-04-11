import React from "react";
import { useLocation } from "react-router-dom";
import decode from "decode-uri-component";
import { useQuery } from "@apollo/client";
import { ArticlesListProps } from "../../Props/types";
import { getAllCategoryArticles } from "../../Props/queries";
import ArticleCard from "../../Components/ArticleCard";

function CategoryArticles() {
  const location = decode(useLocation().pathname.split("/")[2]);

  const { loading, error, data } = useQuery<ArticlesListProps>(getAllCategoryArticles, {
    variables: { category: location },
  });

  if (error) {
    return <p>Error : {error.message}</p>;
  }

  return (
    <div className="py-16 px-4 min-h-screen md:p-12 md:py-20 xl:px-24">
      <div className="flex space-x-4 items-center sub-heading2 text-4xl text-custom-black">
        <p className="">{location}</p>

        <div className="h-[5px] w-8 border-b-2 hidden sm:block border-custom-black"></div>
      </div>

      <div className="grid justify-items-center gap-y-8 pt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.articles.data.map((article, index) => (
          <div key={index}>
            <ArticleCard data={article} isBigger={true} key={article.attributes.slug[0] + index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryArticles;
