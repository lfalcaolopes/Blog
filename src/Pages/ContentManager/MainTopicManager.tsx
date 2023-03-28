import React from "react";

function MainTopicManager() {
  return (
    <>
      <div className="sm:col-span-6">
        <label htmlFor="mainTitle" className="block sub-heading1 leading-10 text-gray-700">
          Título
        </label>

        <input
          type="text"
          name="mainTitle"
          id="mainTitle"
          autoComplete="mainTitle"
          className="w-full p-2 parag2 rounded-md border border-gray-300 focus:ring-custom-blue focus:border-custom-blue "
        />
      </div>

      <div className="sm:col-span-6">
        <label htmlFor="mainContent" className="block sub-heading1 leading-10 text-gray-700">
          Conteúdo
        </label>

        <textarea
          id="mainContent"
          name="mainContent"
          rows={5}
          className="w-full parag3 p-2 border border-gray-300 rounded-md focus:ring-custom-blue focus:border-custom-blue"
        />
      </div>
    </>
  );
}

export default MainTopicManager;
