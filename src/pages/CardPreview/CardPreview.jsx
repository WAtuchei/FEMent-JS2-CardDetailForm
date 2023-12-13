import "../../sass/components/CardPreview/cardPreview.scss";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";

function CardPreview() {

  return (
    <section className="Card-side  min-h-full flex basis-2/6 justify-center">
      {/* Card container */}
      <div className="w-full h-full flex flex-col justify-center lg:gap-y-10">
        <CardFront />
        <CardBack />
      </div>
    </section>
  );
}

export default CardPreview;
