import Newsletter from "./Newsletter";
import PostBundle from "./PostBundle";
import Description from "./Description";
import Hero from "./Hero";

function Home() {
  const api =
    "3aca0ff0937d206a8b8556a2c4de7d1c45dc72c19870cafa43e259fb579b36dd3dc6d9844c9fc375303d02764fec3a5aee4e26098a58660bcedfbac942101d0597fe57c3fb8201ab431eef97c248397b6b79945d86fbdbf188fc5cd14c1c42334d87ccd3cef8d172497477495b13e87f37645f1a69a15fa3875aa3365adde958";

  return (
    <>
      <div className="pb-12  text-custom-black">
        <div className="p-24 bg-custom-off-white text-custom-black">
          <Hero />
          <Description />
        </div>
        <section id="categorias" className="px-24 pt-24 flex flex-col space-y-24 bg-white">
          <PostBundle title="Alimentação saudável" />
          <PostBundle title="Exercícios físicos" />
          <PostBundle title="Saúde mental" />
        </section>
      </div>

      <Newsletter />
    </>
  );
}

export default Home;
