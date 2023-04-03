import { HashLink as Link } from "react-router-hash-link";

function Footer() {
  return (
    <div className="bg-custom-light-grey px-4 md:px-12 xl:px-24 pt-12 text-custom-black">
      <div className="flex justify-center sm:justify-between">
        <div className="flex flex-col justify-start space-y-4 ml-4">
          <p className="font-jakarta font-semibold text-4xl text-sky-900">
            Vitalidade <span className="sub-heading1 text-custom-blue">Viva</span>
          </p>
          <p className="parag2">Blog por Lucas Falcão</p>
        </div>
        <div className="grid gap-4 justify-items-center lg:grid-cols-3">
          <div className=" flex-col space-y-3 w-40 hidden lg:flex xl:w-fit">
            <p className="sub-heading2 mb-4 ">Categorias</p>
            <Link to="/#Alimentação" className="parag2 hover:text-custom-blue hover:underline">
              Alimentação saudável
            </Link>
            <Link to="/#Exercícios" className="parag2 hover:text-custom-blue hover:underline">
              Exercícios físicos
            </Link>
            <Link to="/#Saúde" className="parag2 hover:text-custom-blue hover:underline">
              Saúde mental
            </Link>
          </div>

          <div className=" hidden flex-col space-y-3 lg:flex">
            <p className="sub-heading2 mb-4">Sobre mim</p>

            <p className="parag2 cursor-pointer hover:text-custom-blue hover:underline">Esses links</p>
            <p className="parag2 cursor-pointer hover:text-custom-blue hover:underline">Não levam</p>
            <p className="parag2 cursor-pointer hover:text-custom-blue hover:underline">A lugar nenhum</p>
          </div>
          <div className="flex-col space-y-3 hidden sm:flex">
            <p className="sub-heading2 mb-4">Contato</p>

            <a
              target="_blank"
              href="mailto:lfalcaolopes@gmail.com"
              className="parag2 hover:text-custom-blue hover:underline"
            >
              Enviar email
            </a>
            <a
              target="_blank"
              href="https://github.com/lfalcaolopes"
              className="parag2 hover:text-custom-blue hover:underline"
            >
              GitHub
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/lfalcaolopes/"
              className="parag2 hover:text-custom-blue hover:underline"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
      <hr className="border-[1px] border-custom-grey mt-12 rounded-lg" />
      <div className="flex justify-center sm:justify-between mx-8 py-4 text-custom-dark-grey">
        <p>Alguns Direitos reservados © 2023</p>
        <p className="hidden sm:block">Feito por Lucas Falcão</p>
      </div>
    </div>
  );
}

export default Footer;
