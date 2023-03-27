import React from "react";

function ArticleRoute() {
  return (
    <div className="bg-custom-off-white py-4 px-[6.2rem] border-b-4 border-custom-blue">
      <p>
        Você está em :{" "}
        <a className="underline text-custom-blue hover:no-underline" href="">
          Início
        </a>{" "}
        {">"}{" "}
        <a className="underline text-custom-blue hover:no-underline" href="">
          Categoria
        </a>{" "}
        {">"}{" "}
        <a className="underline text-custom-blue hover:no-underline" href="">
          Nome do artigo
        </a>
      </p>
    </div>
  );
}

export default ArticleRoute;
