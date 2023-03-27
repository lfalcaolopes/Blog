import React from "react";

function Topic({ title, content }: { title: string; content: string[] }) {
  return (
    <div className="mt-12 grid gap-6">
      <h2 className="sub-heading1 text-4xl ">{title}</h2>
      {content.map((paragraph, index) => (
        <p key={index + paragraph[0]} className="parag1 leading-7">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default Topic;
