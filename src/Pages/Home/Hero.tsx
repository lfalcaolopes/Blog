import running from "../../Assets/illustration png.png";
import { CaretDown } from "@phosphor-icons/react";
import NewsletterMail from "./NewsletterMail";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <section
      id="hero"
      className="h-[calc(100dvh-3rem)] md:h-[calc(100vh-8rem)] flex flex-col justify-between items-center"
    >
      <div className="flex items-center justify-between xl:space-x-[5rem]">
        <div className="space-y-6 pt-12 md:p-0">
          <h1 className="heading leading-none text-center md:text-left">
            <span className="text-custom-blue">Vitalidade</span> e bem-estar ao seu alcance.
          </h1>
          <div>
            <p className="parag1 leading-tight text-custom-dark-grey text-justify">
              Neste blog abordamos saúde, bem-estar e estilo de vida em categorias separadas para facilitar a navegação.
              Desde exercícios físicos até receitas saudáveis, oferecemos informações úteis e relevantes escritas pelo
              ChatGPT. Aproveite a leitura!
            </p>
          </div>
          {/* <NewsletterMail /> */}
        </div>

        <img src={running} alt="Woman running illustration" className="w-[25rem] hidden md:block" />
      </div>
      <ScrollLink to="categorias" smooth={true} offset={70}>
        <CaretDown size={40} weight="bold" className="mb-8" />
      </ScrollLink>
    </section>
  );
}

export default Hero;
