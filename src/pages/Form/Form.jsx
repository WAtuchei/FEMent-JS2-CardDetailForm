import "../../sass/components/Form/form.scss";
import { useEffect, useState } from "react";
import { formHandler } from "./FormHandler";
import CardName from "./components/CardName";
import CardNumber from "./components/CardNumber";
import DateCVC from "./components/DateCVC";

function Form() {
  const cardData = {
    name: '',
    number: 0,
    month: 0,
    year: 0,
    CVC: 0
  }

  const [data, updateData] = useState(cardData)
  const getData = (newData) => {
    const {m ,y, cvcNum} = newData,
      updateNewData = {
        month: m,
        year: y,
        CVC: cvcNum
      }
    updateData(prevData => ({
      ...prevData,
      ...updateNewData
    }))
  }

  useEffect(() => {
    console.log(data);
  }, [data])

  return (
    <section className="flex basis-4/6 justify-center items-center">
      <form
        className="w-3/4 lg:w-1/2 h-1/2 flex flex-col justify-start"
        noValidate
        onSubmit={formHandler}
      >
        <CardName />
        <CardNumber />
        <DateCVC getData={getData} />
        
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
