import "../../sass/components/Form/form.scss";

function Form() {
  return (
    <div className="flex basis-4/6 justify-center items-center">
      <form
        className="w-3/4 lg:w-1/2 h-1/2 mx-auto flex flex-col justify-start items-center bg-cyan-100"
        noValidate
      >
        <div className="Card-name flex flex-col mx-4 my-2">
          <label htmlFor="cardholderName">CARDHOLDER NAME</label>
          <input
            type="text"
            name="cardholderName"
            placeholder="e.g. Jane Appleseed"
          />
        </div>
        <div className="Card-number flex flex-col mx-4 my-2">
          <label htmlFor="cardNumber">CARD NUMBER</label>
          <input
            type="text"
            name="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
          />
        </div>
        <div className="Card-date-CVC mx-4 my-2 flex flex-row">
            <div className="Card-date basis-1/2 border border-red-500">
                <label htmlFor="expire">Exp. Date (MM/YY)</label>
                <div className="flex flex-row">
                    <input type="text" placeholder="MM" />
                    <input type="text" placeholder="YY" />
                </div>
            </div>
            <div className="Card-CVC bassis-1/2 border border-red-500">
                <label htmlFor="CVC">CVC</label>
                <div>
                    <input type="text" placeholder="e.g. 123" />
                </div>
            </div>
        </div>
        <div className="container mx-4 my-2">
          <button>Confirm</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
