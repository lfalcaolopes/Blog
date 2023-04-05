import { useState } from "react";
import Button from "../../Components/Button";
import * as Toast from "@radix-ui/react-toast";

function NewsletterMail() {
  const [open, setOpen] = useState(false);
  return (
    <form
      className="flex space-x-2 sm:space-x-8"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input type="email" placeholder="Digite seu email" className="rounded-md px-2  w-[min(50vw,20rem)] md:px-4" />

      <Toast.Provider swipeDirection="right">
        <button
          className="bg-custom-blue p-4 rounded-md text-white parag-bold"
          type="submit"
          onClick={() => {
            setOpen(true);
          }}
        >
          Inscrever
        </button>

        <Toast.Root
          className="bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
          open={open}
          onOpenChange={setOpen}
        >
          <Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
            Email adicionado com sucesso!
          </Toast.Title>
          <Toast.Description className="[grid-area:_description] m-0 text-slate11 text-[13px] leading-[1.3]">
            Agora você receberá nossas novidades por email.
          </Toast.Description>
        </Toast.Root>
        <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
      </Toast.Provider>
    </form>
  );
}

export default NewsletterMail;
