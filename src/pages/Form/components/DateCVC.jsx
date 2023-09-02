import { useContext, useState } from 'react'
import formData from '../../../formContext'

function DateCVC() {
  const { form } = useContext(formData),
    [month, setMonth] = useState(''),
    [year,setYear] = useState(''),
    [cvc, setCVC] = useState(''),
    [dateError, setDateError] = useState(false),
    [cvcError, setCvcError] = useState(false)

    const monthHandler = (e) => {
      const monthValue = e.target.value,
        formatInput = monthValue.replace(/\D/g, '')

        e.target.maxLength = 2
        setMonth(formatInput)
        monthValue.length === 0 ? setDateError(true) : setDateError(false)
        monthValue.length === 2 ? document.querySelector('.Year').focus() : null
    }

    const yearHandler = (e) => {
      const yearValue = e.target.value,
        formatInput = yearValue.replace(/\D/g, '')

        e.target.maxLength = 2
        setYear(formatInput)
        yearValue.length === 0 ? setDateError(true) : setDateError(false)      
    }

    const cvcHandler = (e) => {
      const cvcValue = e.target.value

        e.target.maxLength = 3
        setCVC(cvcValue)
        cvcValue.length === 0 ? setCvcError(true) : setCvcError(false)
    }

  return (
    <div className="flex flex-row mx-4 my-2 gap-x-1">
      {/* Date */}
      <div className="basis-1/2 pe-1 py-2 gap-x-1">
        <label htmlFor="expire">Exp. Date (MM/YY)</label>
        <div className="flex flex-row my-1.5 gap-x-1">
          <input type="text"
            name='expire'
            value={month}
            placeholder={form.cardM}
            className="w-1/2 px-2.5 py-2"
            onChange={monthHandler}
          />
          <input type="text"
            name='expire'
            value={year}
            placeholder={form.cardY}
            className="Year w-1/2 px-2.5 py-2"
            onChange={yearHandler}
          />
        </div>

        {dateError && (
          <p className="Error-MSG text-red-500">
            Can&apos;t be blank
          </p>
        )}
      </div>

      {/* CVC */}
      <div className="basis-1/2 ps-1 py-2">
        <label htmlFor="CVC">CVC</label>
        <input type="text"
          id='CVC'
          value={cvc}
          placeholder={form.cardCvc}
          className="w-full my-1.5 px-2.5 py-2"
          onChange={cvcHandler}
        />

        {cvcError && (
          <p className="Error-MSG text-red-500">
            Can&apos;t be blank
          </p>
        )}
      </div>
    </div>
  )
}
export default DateCVC