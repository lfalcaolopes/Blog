import { HashLink as Link } from "react-router-hash-link";

function ArticleRoute() {
  return (
    <div id="rotas" className="bg-custom-off-white py-4 px-[6.2rem] border-b-4 border-custom-blue">
      <p>
        Você está em :{" "}
        <Link className="underline text-custom-blue hover:no-underline" to="/">
          Início
        </Link>{" "}
        {">"}{" "}
        <Link className="underline text-custom-blue hover:no-underline" to="/#categorias">
          Categoria
        </Link>{" "}
        {">"} <p className="inline-flex">Nome do artigo</p>
      </p>
    </div>
  );
}

export default ArticleRoute;
