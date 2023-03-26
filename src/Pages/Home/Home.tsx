import Newsletter from "./Newsletter";
import PostBundle from "./PostBundle";
import Description from "./Description";
import Hero from "./Hero";

function Home() {
  return (
    <>
      <div className="pb-12  text-custom-black">
        <div className="p-24 bg-custom-off-white text-custom-black">
          <Hero />
          <Description />
        </div>
        <div className="px-24 pt-24 flex flex-col space-y-24 bg-white">
          <PostBundle />
          <PostBundle />
          <PostBundle />
        </div>
      </div>

      <Newsletter />
    </>
  );
}

export default Home;
