import articleImg from "../assets/articleCover.png";

function ArticleCard({ title }: { title: string }) {
  return (
    <div className="flex flex-col justify-between bg-custom-off-white w-[15rem] h-[20rem] p-4 rounded-lg">
      <div>
        <img src={articleImg} alt="Article image" className="object-cover h-36 w-full rounded-lg mb-4" />
        <p className="sub-heading2">{title}</p>
      </div>
      <div className="flex justify-between parag3 w-full text-custom-dark-grey relative">
        <p>Mar 2023</p>
        <p className="font-bold absolute left-1/2 ">∙</p>
        <p>3 Min</p>
      </div>
    </div>
  );
}

export default ArticleCard;
