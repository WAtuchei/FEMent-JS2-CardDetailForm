import { formHandler } from "./FormHandler";
import "../../sass/components/Form/form.scss";
import CardName from "./components/CardName";
import CardNumber from "./components/CardNumber";
import DateCVC from "./components/DateCVC";

function Form() {


  return (
    <section className="flex basis-4/6 justify-center items-center">
      <form
        className="w-3/4 lg:w-1/2 h-1/2 flex flex-col justify-start"
        noValidate
        onSubmit={formHandler}
      >
        <CardName />
        <CardNumber />
        <DateCVC />
        
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
