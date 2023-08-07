import { useContext } from "react";
import "../../sass/components/CardPreview/cardPreview.scss";
import formContext from "../../formContext";

function Form() {
  const { card } = useContext(formContext);

  return (
    <section className="Card-bg flex basis-2/6 min-h-full">
      {/* Card container */}
      <div className="w-full h-full flex flex-col relative">
        {/* Card front */}
        <div
          className="Card-front absolute inset-y-1/4 md:top-38 lg:top-60 xl:top-40 
                    left-3 sm:left-6 md:left-12 lg:left-28 xl:left-38 2xl:left-2/4 text-white"
        >
          <div className="Card-logo">
            <svg
              width="84"
              height="47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="23.478"
                cy="23.5"
                rx="23.478"
                ry="23.5"
                fill="#fff"
              />
              <path
                d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
                stroke="#fff"
              />
            </svg>
          </div>
          <div className="Card-inform">
            <div className="Card-num">
              <p>{card.cardNum}</p>
            </div>
            <div className="Card-name">
              <p>{card.cardName}</p>
            </div>
            <div className="Card-date">
              <p>
                {card.cardM} / {card.cardY}
              </p>
            </div>
          </div>
        </div>
        {/* Card back */}
        <div
          className="Card-back absolute inset-y-2/4 
                    left-5 sm:left-6 md:left-20 lg:left-36 xl:left-52 2xl:left-2/3"
        >
          <p className="CVC-num">{card.cardCvc}</p>
        </div>
      </div>
    </section>
  );
}

export default Form;
