import dayjs from "dayjs";
import { HashLink as Link } from "react-router-hash-link";

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

function ArticleCard({ data }: { data: CardProps }) {
  const publishDate = dayjs(data.attributes.publishedAt).format("MMM YY");

  function getRandomArbitrary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  console.log(data.attributes.slug);

  return (
    <Link
      to={"/artigo/" + data.attributes.slug}
      className="flex flex-col justify-between bg-custom-off-white w-[15rem] h-[20rem] p-4 rounded-lg"
    >
      <div>
        <img
          src={"http://localhost:1337" + data.attributes.cover.data.attributes.url}
          alt="Article image"
          className="object-cover h-36 w-full rounded-lg mb-4"
        />
        <p className="sub-heading2">{data.attributes.title}</p>
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
