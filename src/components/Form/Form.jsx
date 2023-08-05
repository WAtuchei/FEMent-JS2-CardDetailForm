import { useContext } from "react";
import formData from "../../formContext";
import { submitHandler } from "./FormHandler";
import "../../sass/components/Form/form.scss";

function Form() {
  const {form} = useContext(formData)
  const isError = false

  return (
    <div className="flex basis-4/6 justify-center items-center">
      <form
        className="w-3/4 lg:w-1/2 h-1/2 flex flex-col justify-start"
        noValidate
        onSubmit={submitHandler}
      >
        {/* Card Name */}
        <div className="flex flex-col mx-4 my-2">
          <label htmlFor="cardholderName">CARDHOLDER NAME</label>
          <input
            type="text"
            name="cardholderName"
            placeholder={form.cardName}
            className="mt-1.5 px-2.5 py-2"
          />
        </div>
        {/* Card Number */}
        <div className="flex flex-col mx-4 my-2">
          <label htmlFor="cardNumber">CARD NUMBER</label>
          <input
            type="text"
            name="cardNumber"
            placeholder={form.cardNum}
            className="mt-1.5 px-2.5 py-2"
          />
          {!isError && <p className="Error-MSG py-1 text-red-500">Wrong format, numbers only</p>}
        </div>
        {/* Date CVC */}
        <div className="flex flex-row mx-4 my-2 gap-x-1">
          {/* Date */}
            <div className="basis-1/2 pe-1 py-2 gap-x-1">
                <label htmlFor="expire">Exp. Date (MM/YY)</label>
                <div className="flex flex-row my-1.5 gap-x-1">
                    <input type="text" placeholder={form.cardM} className="w-1/2 px-2.5 py-2" />
                    <input type="text" placeholder={form.cardY} className="w-1/2 px-2.5 py-2" />
                </div>
                {!isError && <p className="Error-MSG text-red-500">Can&apos;t be blank</p>}
            </div>
            {/* CVC */}
            <div className="basis-1/2 ps-1 py-2">
                <label htmlFor="CVC">CVC</label>
                <div>
                    <input type="text" placeholder={form.cardCvc} className="w-full my-1.5 px-2.5 py-2" />
                </div>
                {!isError && <p className="Error-MSG text-red-500">Can&apos;t be blank</p>}
            </div>
        </div>
        {/* Form BTN */}
        <div className="mx-4 my-1 py-2 flex flex-row justify-center">
          <button className="w-full py-3 text-center text-white">Confirm</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
