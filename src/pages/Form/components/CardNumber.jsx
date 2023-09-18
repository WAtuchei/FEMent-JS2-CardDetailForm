import { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import cardData from '../../../formContext'

function CardNumber(props) {
    const { form } = useContext(cardData),
      [numVal, setNumVal] = useState(''),
      [isError, setIsError] = useState(false),
      [isEmpty, setIsEmpty] = useState(false)

    // ChatGPT
    function formatCardNumber(input) {
      const cleanedInput = input.replace(/\s/g, ''),
        groups = cleanedInput.match(/.{1,4}/g);
      return groups ? groups.join(' ') : '';
    }

    const cardNumHandler = (e) => {
      const cardNumberValue = e.target.value,
        regEx = /^\d+$/,
        regExTest = cardNumberValue.replace(/\s/g, ''),
        formatNum = formatCardNumber(cardNumberValue)
      
      e.target.maxLength = 19      
      setNumVal(formatNum)
      regExTest.trim().length === 0 ? setIsEmpty(true) : setIsEmpty(false)
      regEx.test(regExTest) || regExTest.length === 0 ? setIsError(false) : setIsError(true)
    }

    // Send to Form
    const sendNumData = (cardNumber) => {
      const data = cardNumber.replace(/\s/g, '')
      props.getData(data)
    }

    CardNumber.propTypes = {
      getData: PropTypes.func
    }
    useEffect(() => {
      sendNumData(numVal)
    }, [numVal])


   return (
      <div className="flex flex-col mx-4 my-2">
          <label htmlFor="cardNumber">CARD NUMBER</label>
          <input
            type="text"
            id='cardNumber'
            value={numVal}
            placeholder={form.number}
            className="mt-1.5 px-2.5 py-2"
            onChange={cardNumHandler}
          />
          
          <>
            {isError && (
            <p className="Error-MSG py-1 text-red-500">
              Wrong format, numbers only
            </p>
            )}
            {isEmpty && (
            <p className="Error-MSG py-1 text-red-500">
              Can&apos;t be blank 
            </p>
            )}
          </>
        </div>
   )
}
export default CardNumber