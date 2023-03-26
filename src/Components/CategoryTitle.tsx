import { CaretDoubleRight } from "@phosphor-icons/react";

function CategoryTitle({ title }: { title: string }) {
  return (
    <div className="flex justify-between py-4 sub-heading1 text-custom-black">
      <div className="flex space-x-4 items-center">
        <p>{title}</p>
        <div className="h-[5px] w-8 border-b-2 border-custom-black"></div>
      </div>

      <a href="" className="flex items-center space-x-2">
        <p>Ver todos</p>
        <CaretDoubleRight weight="bold" />
      </a>
    </div>
  );
}

export default CategoryTitle;
