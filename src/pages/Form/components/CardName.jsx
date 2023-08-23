import { useContext } from "react"
import formData from '../../../formContext'

function CardName() {
   const { form } = useContext(formData)

   return (
      <div className="flex flex-col mx-4 my-2">
          <label htmlFor="cardholderName">CARDHOLDER NAME</label>
          <input
            type="text"
            name="cardholderName"
            placeholder={form.cardName}
            className="mt-1.5 px-2.5 py-2"
          />
        </div>
   )
}
export default CardName