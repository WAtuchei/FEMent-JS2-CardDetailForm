import { useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import cardData from '../../../formContext'

function CardName(props) {
    const { form } = useContext(cardData),
      [nameVal, setNameVal] = useState(''),
      [isEmpty, setIsEmpty] = useState(false)

    const cardNameHandler = (e) => {
      const cardNameValue = e.target.value

      e.target.maxLength = 36
      setNameVal(cardNameValue)
      cardNameValue.trim().length === 0 ? setIsEmpty(true) : setIsEmpty(false)
    }

    const sendNameData = (name) => {
      const data = name.toLowerCase()
      props.getData(data)
    }
    CardName.propTypes = {
      getData: PropTypes.func
    }
    useEffect(() => {
      sendNameData(nameVal)
    }, [nameVal])

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
          {isEmpty && (
            <p className="Error-MSG text-red-500">
              Can&apos;t be blank
            </p>
            )
          }
      </div>
   ); 
}
export default CardName