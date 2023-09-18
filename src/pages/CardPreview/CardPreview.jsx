import "../../sass/components/CardPreview/cardPreview.scss";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";

function Form() {

  return (
    <section className="Card-side flex basis-2/6 min-h-full">
      {/* Card container */}
      <div className="w-full h-full flex flex-col justify-center lg:gap-y-10">
        <CardFront />
        <CardBack />
      </div>
    </section>
  );
}

export default Form;
