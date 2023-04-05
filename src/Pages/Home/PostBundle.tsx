import React from "react";
import ArticleCard from "../../Components/ArticleCard";
import CategoryTitle from "../../Components/CategoryTitle";
import { gql, useQuery } from "@apollo/client";
import ScrollableArea from "../../Components/ScrollableArea";
import { ArticlesListProps } from "../../Props/types";
import { getCategoryArticles } from "../../Props/queries";
import ArticleCardSkeleton from "../../Components/Skeletons/ArticleCardSkeleton";

function PostBundle({ category }: { category: string }) {
  const { loading, error, data } = useQuery<ArticlesListProps>(getCategoryArticles, {
    variables: { category: category },
  });

  if (error) {
    return <p>Error : {error.message}</p>;
  }

  return (
    <div id={`${category.split(" ")[0]}`}>
      <CategoryTitle title={category} />

      <ScrollableArea>
        <div className="grid justify-items-center min-w-[60rem] grid-cols-4 pt-8 lg:grid-cols-4">
          {data?.articles.data.map((article, index) => (
            <div key={index}>
              {/* {loading && <ArticleCardSkeleton />} */}
              {/* {!loading && <ArticleCard data={article} loading={loading} key={article.attributes.slug[0] + index} />} */}
              <ArticleCard data={article} loading={loading} key={article.attributes.slug[0] + index} />
            </div>
          ))}
        </div>
      </ScrollableArea>
    </div>
  );
}

export default PostBundle;
