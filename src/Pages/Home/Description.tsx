import plank from "../../Assets/illustration png 2.png";

function Hero() {
  return (
    <section id="description" className=" flex flex-col justify-between items-center">
      <div className="flex items-center justify-between space-x-[5rem]">
        <img src={plank} alt="Woman doing plank illustration" className="w-[25rem]" />
        <div className="flex flex-col space-y-8">
          <p className="parag1 text-custom-dark-grey">
            Cuidar da saúde é fundamental para ter uma vida plena e feliz. Quando nos preocupamos com nossa saúde,
            estamos investindo em nosso bem-estar físico, mental e emocional. Hábitos saudáveis, como alimentação
            equilibrada, prática regular de exercícios físicos e cuidados com a saúde mental, são essenciais para
            prevenir doenças e melhorar a qualidade de vida.
          </p>
          <p className="parag1 text-custom-dark-grey">
            Além disso, quando adotamos hábitos saudáveis, estamos cultivando uma relação mais positiva com nós mesmos.
            Sentir-se bem com o próprio corpo e mente é importante para ter autoestima e confiança, além de contribuir
            para uma vida mais feliz e realizada. Portanto, invista em sua saúde e comece a desfrutar dos benefícios de
            uma vida saudável!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
