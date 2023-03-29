import { useState } from "react";
import Button from "../../Components/Button";
import CoverPhoto from "./CoverPhoto";
import TopicManager from "./TopicManager";

function ContentManager() {
  const [topics, setTopics] = useState<number[]>([]);
  return (
    <div className="flex justify-center bg-custom-off-white text-custom-black">
      <form
        className="max-w-5xl w-full m-20 space-y-8 divide-y divide-gray-300"
        onSubmit={(e) => {
          e.preventDefault();
          const target = e.target as HTMLFormElement;
          console.log(target.elements);
        }}
      >
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <h1 className="sub-heading1 text-5xl">Artigo</h1>
            <p className="mt-4 parag3 text-gray-500">
              This information will be displayed publicly so be careful what you share.
            </p>

            <div className="mt-6 flex flex-col space-y-6">
              <TopicManager id="0" />

              {topics.map((_, index) => {
                return <TopicManager key={index} id={`${index + 1}`} />;
              })}

              <a
                className="parag-bold inline-flex justify-end space-x-2 cursor-pointer text-custom-blue hover:text-indigo-700"
                onClick={() => {
                  setTopics([...topics, topics.length]);
                }}
              >
                <p>+</p> <span className="underline">Adicionar topico</span>
              </a>

              <CoverPhoto />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-8">
          <Button text="Publicar" />
        </div>
      </form>
    </div>
  );
}

export default ContentManager;
