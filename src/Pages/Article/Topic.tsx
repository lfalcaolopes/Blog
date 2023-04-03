import Markdown from "markdown-to-jsx";

function Topic({ content }: { content: string }) {
  return (
    <Markdown
      options={{
        overrides: {
          h2: {
            props: {
              className: "sub-heading1 text-2xl sm:text-4xl pt-12",
            },
          },
          span: {
            component: "p",
            props: {
              className: "parag1 leading-7",
            },
          },
          li: {
            props: {
              className: "parag1 leading-7",
            },
          },
          ol: {
            props: {
              className: "flex flex-col space-y-4 list-decimal list-inside",
            },
          },
          ul: {
            props: {
              className: "flex flex-col space-y-4 list-disc list-inside",
            },
          },
        },
      }}
    >
      {content}
    </Markdown>
  );
}

export default Topic;
