import mail from "../../Assets/mail.png";
import NewsletterMail from "./NewsletterMail";

function Newsletter() {
  return (
    <div className="py-12 flex flex-col items-center space-y-8 bg-custom-off-white">
      <img src={mail} alt="Icone caixa de correios" />
      <div className="flex flex-col items-center space-y-4">
        <h3 className="sub-heading1 text-4xl">Inscreva-se para as últimas novidades</h3>
        <p className="parag1 text-custom-dark-grey">Assine a newsletter e não perca um artigo novo</p>
      </div>
      <NewsletterMail />
    </div>
  );
}

export default Newsletter;
