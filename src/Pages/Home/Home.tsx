import Newsletter from "./Newsletter";
import PostBundle from "./PostBundle";
import Description from "./Description";
import Hero from "./Hero";
import { gql, useQuery } from "@apollo/client";

function Home() {
  const categories = ["Alimentação saudável", "Exercícios físicos", "Saúde mental"];

  return (
    <>
      <div className="pb-12  text-custom-black">
        <div className="p-24 bg-custom-off-white text-custom-black">
          <Hero />
          <Description />
        </div>
        <section id="categorias" className="px-24 pt-24 flex flex-col space-y-24 bg-white">
          {categories.map((category, index) => (
            <PostBundle category={category} key={category[0] + index} />
          ))}
        </section>
      </div>

      <Newsletter />
    </>
  );
}

export default Home;
