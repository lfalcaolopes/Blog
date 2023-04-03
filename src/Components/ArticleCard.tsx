import dayjs from "dayjs";
import { HashLink as Link } from "react-router-hash-link";
import LoadingImg from "../Assets/SVGs/LoadingImg";

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

function ArticleCard({ data, loading }: { data: CardProps; loading: boolean }) {
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
        {(
          <img
            src={"http://localhost:1337" + data.attributes.cover.data.attributes.url}
            alt="Article image"
            className="object-cover h-36 w-full rounded-lg mb-4"
          />
        ) || <LoadingImg />}

        <p className="sub-heading2 min-h-[8rem] pb-2">{data.attributes.title}</p>
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
