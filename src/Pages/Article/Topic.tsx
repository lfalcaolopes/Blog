import React from "react";

function Topic({ title, content }: { title: string | undefined; content: string[] }) {
  return (
    <div className="mt-12 grid gap-6">
      <h2 className="sub-heading1 text-4xl ">{title}</h2>
      {content.map((item, index) => {
        return (
          <p className="parag1 leading-7" key={index}>
            {item}
          </p>
        );
      })}
    </div>
  );
}

export default Topic;
