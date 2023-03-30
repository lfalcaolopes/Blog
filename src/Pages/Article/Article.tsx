import ArticleRoute from "./ArticleRoute";
import img from "../../Assets/articleCover.png";
import Topic from "./Topic";
import { useEffect, useState } from "react";

interface ArticleProps {
  blocks: { body: string; id: number }[];
  category: { data: {} };
  cover: { data: {} };
  createdAt: string;
  mainTopic: string;
  publishedAt: string;
  slug: string;
  title: string;
  updatedAt: string;
}

function Article() {
  const [apiData, setApiData] = useState<ArticleProps>();

  useEffect(() => {
    async function getPosts() {
      const response = await fetch("http://localhost:1337/api/articles?populate=*");
      const data = await response.json();
      console.log(data.data[0].attributes.blocks);

      setApiData(data.data[0].attributes);
    }

    getPosts();
  }, []);

  return (
    <div className="bg-custom-off-white text-custom-black pb-20">
      <ArticleRoute />
      <img src={img} alt="" className="w-full h-60 absolute z-0 object-cover" />

      <div className="grid justify-center-center mx-40 mt-20 p-12 z-10 rounded-md bg-white drop-shadow-lg shadow-md">
        <h1 className="heading mt-12 text-center">{apiData?.title}</h1>

        <div className="h-[3px] w-40 rounded-full my-12 bg-custom-blue justify-self-center" />

        <div className="flex flex-col space-y-6">
          {apiData?.mainTopic.split("\n\n").map((item, index) => {
            return (
              <p className="parag1 leading-7" key={index}>
                {item}
              </p>
            );
          })}
        </div>

        {apiData?.blocks.map((block, index) => {
          let bodyArr = block.body.split("\n\n");

          const topicTitle = bodyArr.shift()?.split(" ")[1];

          return <Topic title={topicTitle} content={bodyArr} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Article;
