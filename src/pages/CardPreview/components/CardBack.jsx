import { useContext } from "react"
import cardData from "../../../formContext"

function CardBack() {
  const { card, inputData } = useContext(cardData)

   return (
     <>
      <section className="Card relative lg:mt-5">
        <div
          className="Card-back w-full h-full absolute 
                left-5 sm:left-6 md:left-20 lg:left-36 xl:left-52 2xl:left-2/3"
        >
        <div className="Card-back__CVC--con w-full h-6">
          <p className="Card-back__CVC--num text-white">
            {inputData.CVC !== "" ?
             inputData.CVC
             : card.CVC
            }
          </p>
        </div>
      </div>
      </section>
     </>  
   )
}

export default CardBack