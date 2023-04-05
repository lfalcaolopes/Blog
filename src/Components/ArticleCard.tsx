import dayjs from "dayjs";
import { HashLink as Link } from "react-router-hash-link";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CardProps } from "../Props/types";
import { useState } from "react";

function ArticleCard({ data, loading }: { data: CardProps; loading: boolean }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const publishDate = dayjs(data.attributes.publishedAt).format("MMM YY");

  function getRandomArbitrary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <Link
      to={"/artigo/" + data.attributes.slug}
      className="flex flex-col justify-between bg-custom-off-white min-w-[13rem] w-[20vw] aspect-[3/4] p-4 rounded-lg"
    >
      <div>
        <img
          src={"http://localhost:1337" + data.attributes.cover.data.attributes.url}
          alt="Article image"
          className={"object-cover h-36 w-full rounded-lg mb-4" + (imgLoaded ? "" : " hidden")}
          onLoad={() => {
            setImgLoaded(true);
          }}
        />
        {!imgLoaded && <Skeleton className="object-cover h-36 w-full rounded-lg mb-4" />}

        {<p className="sub-heading2 min-h-[8rem] pb-2">{data.attributes.title}</p> || <Skeleton count={3} />}
      </div>
      <div className="flex justify-between parag3 w-full text-custom-dark-grey relative">
        <p>{publishDate}</p>
        <p className="font-bold absolute left-1/2 ">∙</p>
        <p>{getRandomArbitrary(3, 6)} Min</p>
      </div>
    </Link>
  );
}

export default ArticleCard;
