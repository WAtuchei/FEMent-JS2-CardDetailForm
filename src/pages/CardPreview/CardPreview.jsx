import { useContext } from "react";
import "../../sass/components/CardPreview/cardPreview.scss";
import formContext from "../../formContext";

function Form() {
  const { card } = useContext(formContext);

  return (
    <section className="Card-side flex basis-2/6 min-h-full">
      {/* Card container */}
      <div className="w-full h-full flex flex-col justify-center lg:gap-y-10">
        {/* Card front */}
        <section className="Card relative">
          <div
            className="Card-front w-full h-full absolute inset-y-1/4 
                  left-3 sm:left-6 md:left-12 lg:left-28 xl:left-38 2xl:left-2/4 text-white"
          >
            {/* container */}
            <div className="w-full h-full relative">
              {/* Logo */}
              <div className="Card-front__logo">
                <svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
                  <path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff" />
                </svg>
              </div>
              {/* Card inform */}
              <div className="Card-front__inform w-full flex flex-col pt-2">
                <div className="Card-front__inform--num w-full flex justify-around">
                  <p>{card.cardNum}</p>
                </div>
                <div className="w-full flex justify-between mt-2 px-5">
                  <div className="Card-front__inform--name">
                    <p>{card.cardName}</p>
                  </div>
                  <div className="Card-front__inform--date">
                    <p>
                      {card.cardM} / {card.cardY}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Card back */}
        <section className="Card relative lg:mt-5">
          <div
            className="Card-back w-full h-full absolute 
                  left-5 sm:left-6 md:left-20 lg:left-36 xl:left-52 2xl:left-2/3"
          >
            <div className="Card-back__CVC--con w-full h-6">
              <p className="Card-back__CVC--num">{card.cardCvc}</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Form;
