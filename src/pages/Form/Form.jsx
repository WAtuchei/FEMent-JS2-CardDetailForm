import "../../sass/components/Form/form.scss";
import { useEffect, useState } from "react";
import PropTypes from "prop-types"
import { formHandler } from "./FormHandler";
import CardName from "./components/CardName";
import CardNumber from "./components/CardNumber";
import DateCVC from "./components/DateCVC";

function Form(props) {
  const cardData = {
    name: '',
    number: 0,
    month: 0,
    year: 0,
    CVC: 0
  }
  const [formData, updateFormData] = useState(cardData)

  // Card Name Data
  const getCardName = (newData) => {
    const cardName = newData,
      updateNewData = {
        name: cardName
      }
    updateFormData(prevData => ({
      ...prevData,
      ...updateNewData
    }))
  }
  // Card Num Data
  const getCardNumber = (newData) => {
    const cardNum = newData,
      updateNewData = {
        number: cardNum
      }
    updateFormData(prevData => ({
      ...prevData,
      ...updateNewData
    }))
  }
  // Date & CVC Data
  const getDateData = (newData) => {
    const {m ,y, cvcNum} = newData,
      updateNewData = {
        month: m,
        year: y,
        CVC: cvcNum
      }
    updateFormData(prevData => ({
      ...prevData,
      ...updateNewData
    }))
  }

  const sendFormData = (data) => {
    props.getFormData(data)
  }
  Form.propTypes = {
    getFormData: PropTypes.func
  }
  useEffect(() => {
    sendFormData(formData)
  }, [formData])

  return (
    <section className="flex basis-4/6 justify-center items-center mt-16 sm:mt-5 md:mt-40">
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
          <button className="w-full py-3 text-center text-white">
            Confirm
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
