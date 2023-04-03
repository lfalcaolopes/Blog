export interface CardProps {
  attributes: {
    title: string;
    publishedAt: string;
    slug: string;
    cover: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

export interface ArticlesListProps {
  articles: {
    data: CardProps[];
  };
}

export interface FullArticleProps {
  articles: {
    data: {
      attributes: {
        category: { data: { attributes: { name: string } } };
        cover: { data: { attributes: { url: string } } };
        mainTopic: string;
        publishedAt: string;
        title: string;
        updatedAt: string;
      };
    }[];
  };
}
