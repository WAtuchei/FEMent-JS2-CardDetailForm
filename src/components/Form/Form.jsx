import "../../sass/components/Form/form.scss";
import { submitHandler } from "./FormHandler";

function Form() {

  return (
    <div className="flex basis-4/6 justify-center items-center">
      <form
        className="w-3/4 lg:w-1/2 h-1/2 flex flex-col justify-start"
        noValidate
        onSubmit={submitHandler}
      >
        {/* Card Name */}
        <div className="Card-name flex flex-col mx-4 my-2">
          <label htmlFor="cardholderName">CARDHOLDER NAME</label>
          <input
            type="text"
            name="cardholderName"
            placeholder="e.g. Jane Appleseed"
            className="mt-1.5 px-2.5 py-2"
          />
        </div>
        {/* Card Number */}
        <div className="Card-number flex flex-col mx-4 my-2">
          <label htmlFor="cardNumber">CARD NUMBER</label>
          <input
            type="text"
            name="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
            className="mt-1.5 px-2.5 py-2"
          />
        </div>
        {/* Date CVC */}
        <div className="Card-date-CVC flex flex-row mx-4 my-2 gap-x-1">
          {/* Date */}
            <div className="Card-date basis-1/2 pe-1 py-2 gap-x-1">
                <label htmlFor="expire">Exp. Date (MM/YY)</label>
                <div className="flex flex-row my-1.5 gap-x-1">
                    <input type="text" placeholder="MM" className="w-1/2 px-2.5 py-2" />
                    <input type="text" placeholder="YY" className="w-1/2 px-2.5 py-2" />
                </div>
            </div>
            {/* CVC */}
            <div className="Card-CVC basis-1/2 ps-1 py-2">
                <label htmlFor="CVC">CVC</label>
                <div>
                    <input type="text" placeholder="e.g. 123" className="w-full my-1.5 px-2.5 py-2" />
                </div>
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
