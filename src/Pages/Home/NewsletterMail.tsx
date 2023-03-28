import Button from "../../Components/Button";

function NewsletterMail() {
  return (
    <form className="flex space-x-8">
      <input type="email" placeholder="Digite seu email" className="rounded-md px-4 w-80" />
      <Button text="Inscrever" />
    </form>
  );
}

export default NewsletterMail;
