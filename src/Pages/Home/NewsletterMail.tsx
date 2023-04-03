import Button from "../../Components/Button";

function NewsletterMail() {
  return (
    <form className="flex space-x-2 sm:space-x-8">
      <input type="email" placeholder="Digite seu email" className="rounded-md px-2  w-[min(50vw,20rem)] md:px-4" />
      <Button text="Inscrever" />
    </form>
  );
}

export default NewsletterMail;
