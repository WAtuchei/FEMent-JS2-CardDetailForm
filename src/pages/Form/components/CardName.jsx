import { useContext, useState } from "react"
import formData from '../../../formContext'

function CardName() {
    const { form } = useContext(formData),
      [nameVal, setNameVal] = useState(''),
      [isError, setIsError] = useState(false)

    const cardNameHandler = (e) => {
      const cardNameValue = e.target.value
      e.target.maxLength = 36
      setNameVal(cardNameValue)
      cardNameValue.trim().length === 0 ? setIsError(true) : setIsError(false)
    }

   return (
      <div className="flex flex-col mx-4 my-2">
          <label htmlFor="cardholderName">CARDHOLDER NAME</label>
          <input
            type="text"
            id="cardholderName"
            value={nameVal}
            placeholder={form.cardName}
            className="mt-1.5 px-2.5 py-2"
            onChange={cardNameHandler}
          />
          {isError && (
            <p className="Error-MSG text-red-500">
              Can&apos;t be blank
            </p>
            )
          }
      </div>
   ); 
}
export default CardName