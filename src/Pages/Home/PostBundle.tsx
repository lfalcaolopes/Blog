import React from "react";
import ArticleCard from "../../Components/ArticleCard";
import CategoryTitle from "../../Components/CategoryTitle";

function PostBundle() {
  return (
    <div>
      <CategoryTitle title="Featured Article" />
      <div className="grid justify-items-center grid-cols-4 pt-8">
        <ArticleCard title="How to make GUI in java looking good" />
        <ArticleCard title="How to sign up for GitHub Copilot" />
        <ArticleCard title="7 Ways to center a div with grid" />
        <ArticleCard title="Is programming dead?" />
      </div>
    </div>
  );
}

export default PostBundle;
