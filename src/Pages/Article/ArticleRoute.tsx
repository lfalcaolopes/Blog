import { HashLink as Link } from "react-router-hash-link";

function ArticleRoute({ category, title }: { category: string | undefined; title: string | undefined }) {
  return (
    <div id="rotas" className="bg-custom-off-white py-4 px-[6.2rem] border-b-4 border-custom-blue">
      <p>
        Você está em :{" "}
        <Link className="underline text-custom-blue hover:no-underline" to="/">
          Início
        </Link>{" "}
        {">"}{" "}
        <Link className="underline text-custom-blue hover:no-underline" to="/#categorias">
          {category}
        </Link>{" "}
        {">"} {title}
      </p>
    </div>
  );
}

export default ArticleRoute;
