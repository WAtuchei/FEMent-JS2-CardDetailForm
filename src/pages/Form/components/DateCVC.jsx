import { useContext } from 'react'
import formData from '../../../formContext'

function DateCVC() {
   const { form } = useContext(formData)
   const isError = false
   
   return (
      <div className="flex flex-row mx-4 my-2 gap-x-1">
          {/* Date */}
          <div className="basis-1/2 pe-1 py-2 gap-x-1">
            <label htmlFor="expire">Exp. Date (MM/YY)</label>
            <div className="flex flex-row my-1.5 gap-x-1">
              <input type="text"
               placeholder={form.cardM}
               className="w-1/2 px-2.5 py-2"
              />
              <input type="text"
               placeholder={form.cardY}
               className="w-1/2 px-2.5 py-2"
              />
            </div>

            {!isError && (
            <p className="Error-MSG text-red-500">
              Can&apos;t be blank
            </p>
            )}
          </div>
          {/* CVC */}
          <div className="basis-1/2 ps-1 py-2">
            <label htmlFor="CVC">CVC</label>
            <>
              <input type="text"
               placeholder={form.cardCvc}
               className="w-full my-1.5 px-2.5 py-2"
              />
            </>

            {!isError && (
            <p className="Error-MSG text-red-500">
              Can&apos;t be blank
            </p>
            )}
          </div>
        </div>
   )
}
export default DateCVC