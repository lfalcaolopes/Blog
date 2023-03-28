import running from "../../Assets/illustration png.png";
import { CaretDown } from "@phosphor-icons/react";
import NewsletterMail from "./NewsletterMail";

function Hero() {
  return (
    <section id="hero" className="h-[calc(100vh-10rem)] flex flex-col justify-between items-center">
      <div className="flex items-center justify-between space-x-[5rem]">
        <div className="flex flex-col space-y-6">
          <h1 className="heading leading-tight">
            <span className="text-custom-blue">Vitalidade</span> e bem-estar ao seu alcance.
          </h1>
          <div>
            <p className="parag1 text-custom-dark-grey">
              Neste blog, compartilho sobre saúde e bem-estar, desde alimentação saudável e exercícios físicos.
              Certifique-se de se inscrever para receber as atualizações mais recentes
            </p>
          </div>
          <NewsletterMail />
        </div>
        <img src={running} alt="Woman running illustration" className="w-[25rem]" />
      </div>
      <a href="#description">
        <CaretDown size={40} weight="bold" className="mb-8" />
      </a>
    </section>
  );
}

export default Hero;
