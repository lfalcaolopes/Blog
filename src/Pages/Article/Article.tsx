import { useLocation } from "react-router-dom";
import ArticleRoute from "./ArticleRoute";
import Topic from "./Topic";

import { useQuery } from "@apollo/client";
import { FullArticleProps } from "../../Props/types";
import { getFullArticle } from "../../Props/queries";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";

function Article() {
  const [imgLoaded, setImgLoaded] = useState(false);
  const location = useLocation().pathname.split("/")[2];

  const { loading, error, data } = useQuery<FullArticleProps>(getFullArticle, { variables: { slug: location } });

  const dataInfo = data?.articles.data[0].attributes;

  if (error) {
    console.log(error);
    return <p>Error : {error.message}</p>;
  }

  return (
    <div className="bg-custom-off-white text-custom-black md:pb-20">
      <ArticleRoute category={dataInfo?.category.data.attributes.name} title={dataInfo?.title} />
      <img
        src={"http://localhost:1337" + dataInfo?.cover.data.attributes.url}
        alt=""
        className={"w-full h-60 absolute z-0 object-cover hidden md:block" + (imgLoaded ? "" : " hidden")}
        onLoad={() => setImgLoaded(true)}
      />
      {!imgLoaded && <Skeleton className="w-full h-60 absolute z-0 object-cover hidden md:block" />}

      <div className="grid justify-center-center py-10 px-4 bg-white md:drop-shadow-lg md:shadow-md md:mx-20 md:px-12 md:mt-20 md:z-10 md:rounded-md lg:px-32 lg:mx-40">
        <h1 className="heading text-4xl sm:text-6xl mt-4 sm:mt-12 text-center">{dataInfo?.title}</h1>
        {loading && <Skeleton count={2} className="heading text-4xl sm:text-6xl mt-4 sm:mt-12 text-center" />}

        <div className="h-[3px] w-40 rounded-full my-12 bg-custom-blue justify-self-center" />

        {loading && <Skeleton count={5} />}
        <div className="flex flex-col space-y-8">
          {dataInfo?.mainTopic.split("\n\n").map((item, index) => {
            return <Topic content={item} key={item[0] + index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Article;
