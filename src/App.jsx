import Form from './components/Form/Form'
import CardPreview from './components/CardPreview/CardPreview'
import formContext from './formContext'
import './components/Form/Form'
import './sass/reset.scss'
import './App.css'

function App() {
  const exFormData = {
    card: {
      cardName: "Jane Appleseed",
      cardNum: "0000 0000 0000 0000",
      cardM: "00",
      cardY: "00",
      cardCvc: "000",
    },
    form: {
      cardName: "e.g. Jane Appleseed",
      cardNum: "e.g. 1234 5678 9123 0000",
      cardM: "MM",
      cardY: "YY",
      cardCvc: "e.g. 123",
    },
  }

  return (
    <formContext.Provider value={exFormData}>
      <div className="min-w-full h-screen flex flex-row">
        <CardPreview />
        <Form />
      </div>
    </formContext.Provider>
  );
}

export default App
