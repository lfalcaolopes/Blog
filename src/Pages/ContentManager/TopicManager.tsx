import React from "react";

function TopicManager({ id }: { id: string }) {
  return (
    <>
      <div className="sm:col-span-6">
        <label htmlFor={`topicTitle${id}`} className="block sub-heading1 leading-10 text-gray-700">
          {id === "0" ? "Título" : "Subtítulo"}
        </label>

        <input
          type="text"
          name={`topicTitle${id}`}
          id={`topicTitle${id}`}
          autoComplete={`topicTitle${id}`}
          className="w-full p-2 parag2 rounded-md border border-gray-300 focus:ring-custom-blue focus:border-custom-blue "
        />
      </div>

      <div className="sm:col-span-6">
        <label htmlFor={`topicContent${id}`} className="block sub-heading1 leading-10 text-gray-700">
          Conteúdo
        </label>

        <textarea
          id={`topicContent${id}`}
          name={`topicContent${id}`}
          rows={5}
          className="w-full parag3 p-2 border border-gray-300 rounded-md focus:ring-custom-blue focus:border-custom-blue"
        />
      </div>
    </>
  );
}

export default TopicManager;
