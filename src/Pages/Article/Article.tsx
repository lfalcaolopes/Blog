import ArticleRoute from "./ArticleRoute";
import img from "../../assets/articleCover.png";
import Topic from "./Topic";

function Article() {
  const test = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nesciunt distinctio magnam cupiditate inciduntnon minima aliquid at dignissimos quae omnis porro rerum, accusamus, corporis quibusdam quia odio, obcaecati aspernatur!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nesciunt distinctio magnam cupiditate inciduntnon minima aliquid at dignissimos quae omnis porro rerum, accusamus, corporis quibusdam quia odio, obcaecati aspernatur!",
  ];
  return (
    <div className="bg-custom-off-white text-custom-black pb-20">
      <ArticleRoute />
      <img src={img} alt="" className="w-full h-60 absolute z-0 object-cover" />

      <div className="grid justify-center-center mx-40 mt-20 p-12 z-10 rounded-md bg-white drop-shadow-lg shadow-md">
        <h1 className="heading mt-12 text-center">Depressão: como prevenir e tratar seus sintomas</h1>

        <div className="h-[3px] w-40 rounded-full my-12 bg-custom-blue justify-self-center" />

        <p className="parag1 leading-7 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nesciunt distinctio magnam cupiditate incidunt
          non minima aliquid at dignissimos quae omnis porro rerum, accusamus, corporis quibusdam quia odio, obcaecati
          aspernatur!
        </p>
        <p className="parag1 leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nesciunt distinctio magnam cupiditate incidunt
          non minima aliquid at dignissimos quae omnis porro rerum, accusamus, corporis quibusdam quia odio, obcaecati
          aspernatur!
        </p>
        <Topic title="Sintomas" content={test} />
        <Topic title="Causas" content={test} />
      </div>
    </div>
  );
}

export default Article;
