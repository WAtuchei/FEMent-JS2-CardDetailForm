import "../../sass/components/Form/form.scss";
import { useEffect, useState } from "react";
import PropTypes from "prop-types"
import CardName from "./components/CardName";
import CardNumber from "./components/CardNumber";
import DateCVC from "./components/DateCVC";
import FormComplete from "./components/FormComplete";

function Form(props) {
  const cardData = {
    name: '',
    number: 0,
    month: 0,
    year: 0,
    CVC: 0
  }
  const errorInput = {
    cardName: false,
    cardNum: false,
    cardDate: false,
    cardCVC: false
  }
  
  const [formData, updateFormData] = useState(cardData),
  [formSuccess, setFormSuccess] = useState(false),
  [formConfirm, setFormConfirm] = useState(true),
  [btnTrue, setBtnTrue] = useState('BTN-false'),
  [inputError, updateInputError] = useState(errorInput)

  console.log(inputError);
  // Card Name Data
  const getCardName = (newData, error) => {
    const cardName = newData
    const updateNewData = {
        name: cardName
      },
    updateError = {
      cardName: error
    }
    updateFormData(prevData => ({
      ...prevData,
      ...updateNewData
    }))
    updateInputError(prevData => ({
      ...prevData,
      ...updateError
    }))
  }

  // Card Num Data
  const getCardNumber = (...newData) => {
    const [cardNum, empty, error] = newData

    const NumError = (emp, err) => {
      if (emp || err) {
        return true;
      }
      else {
        return false;
      }
    }
    const updateNewData = {
        number: cardNum
      },
    updateError = {
      cardNum: NumError(empty, error)
    }
    updateFormData(prevData => ({
      ...prevData,
      ...updateNewData
    }))
    updateInputError(prevData => ({
      ...prevData,
      ...updateError
    }))
  }

  // Date & CVC Data
  const getDateData = (newData) => {
    const {m ,y, cvcNum, dateErr, cvcErr} = newData
    const updateNewData = {
        month: m,
        year: y,
        CVC: cvcNum
      },
    updateError = {
      cardDate: dateErr,
      cardCVC: cvcErr
    }
    updateFormData(prevData => ({
      ...prevData,
      ...updateNewData
    }))
    updateInputError(prevData => ({
      ...prevData,
      ...updateError
    }))
  }

  // Form Handler
  const formHandler = (e) => {
    e.preventDefault()
  }

  // Error Check
  const errorCheck = (errors) => {
    for (let o in errors) {
      if (errors[o]){
        setFormConfirm(true)
        setBtnTrue('BTN-false')
      }
      else {
        setFormConfirm(false)
        setBtnTrue('BTN-true')
      }
    }
  }
  // Send Data back to App
  const sendFormData = (data) => {
    props.getFormData(data)
  }
  Form.propTypes = {
    getFormData: PropTypes.func
  }
  useEffect(() => {
    sendFormData(formData)
    errorCheck(inputError)
  }, [formData, inputError])

  return (
    <section className="flex basis-4/6 justify-center items-center mt-16 sm:mt-5">
      {formSuccess ? 
        ( 
          <FormComplete /> 
        )
        :
        (
        <form
          className="w-3/4 lg:w-1/2 h-1/2 flex flex-col justify-start"
          noValidate
          onSubmit={formHandler}
        >
          <CardName getData={getCardName} />
          <CardNumber getData={getCardNumber}/>
          <DateCVC getData={getDateData} />
          
          {/* Form BTN */}
          <div className="mx-4 my-1 py-2 flex flex-row justify-center">
            <button className={`${btnTrue} w-full py-3 text-center text-white`} disabled={formConfirm}>
              Confirm
            </button>
          </div>
        </form>
        )
      }

    </section>
  );
}

export default Form;
