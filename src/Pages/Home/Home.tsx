import Newsletter from "./Newsletter";
import PostBundle from "./PostBundle";
import Description from "./Description";
import Hero from "./Hero";

function Home() {
  const categories = ["Alimentação saudável", "Exercícios físicos", "Saúde mental"];

  return (
    <>
      <div className="pb-12  text-custom-black">
        <div className="pt-16 px-4 bg-custom-off-white text-custom-black  md:p-12 md:py-20 xl:px-24">
          <Hero />

          {/* <Description /> */}
        </div>
        <section id="categorias" className="px-4 pt-24 flex flex-col space-y-24 bg-white md:px-12 xl:px-24">
          {categories.map((category, index) => (
            <PostBundle category={category} key={index} />
          ))}
        </section>
      </div>

      <Newsletter />
    </>
  );
}

export default Home;
