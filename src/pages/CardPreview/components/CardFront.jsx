import { useContext } from "react"
import cardData from "../../../formContext"


function CardFront() {
  const { card, inputData } = useContext(cardData),
    { number } = inputData,
    inputNumber = number.toString()

  const formatCardNumber = (input) => {
    const cleanedInput = input.replace(/\s/g, ''),
      groups = cleanedInput.match(/.{1,4}/g);
    return groups ? groups.join(' ') : '';   
  }

  return (
    <>
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
            <div className="Card-front__inform w-3/4 sm:w-full flex flex-col lg:mb-3 pt-2">
              <div className="Card-front__inform--num w-full flex justify-around">
                <p>
                  {inputData.number !== "" ?
                    formatCardNumber(inputNumber)
                    : card.number
                  }
                </p>
              </div>
              <div className="w-full flex justify-between mt-2 md:mb-1 xl:-mb-2 2xl:mb-0 xl:mt-7 px-8">
                <div className="Card-front__inform--name">
                  <p>
                    {inputData.name !== "" ?
                      inputData.name.toUpperCase()
                      : card.name.toUpperCase()
                    }
                  </p>
                </div>
                <div className="Card-front__inform--date">
                  <p>
                    {inputData.month !== "" ?
                      inputData.month
                      : card.month
                    }
                     / 
                    {inputData.year !== "" ?
                      inputData.year
                      : card.year
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CardFront