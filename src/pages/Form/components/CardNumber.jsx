import { useContext } from 'react'
import formData from '../../../formContext'

function CardNumber() {
   const { form } = useContext(formData)
   const isError = false

   return (
      <div className="flex flex-col mx-4 my-2">
          <label htmlFor="cardNumber">CARD NUMBER</label>
          <input
            type="text"
            name="cardNumber"
            placeholder={form.cardNum}
            className="mt-1.5 px-2.5 py-2"
          />
          
          {!isError && (
          <p className="Error-MSG py-1 text-red-500">
            Wrong format, numbers only
          </p>
          )}
        </div>
   )
}
export default CardNumber