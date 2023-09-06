import './sass/reset.scss'
import './App.css'
import './pages/Form/Form'
import { useState } from 'react'
import formContext from './formContext'
import Form from './pages/Form/Form'
import CardPreview from './pages/CardPreview/CardPreview'

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
    data: {
      name: '',
      number: 0,
      month: 0,
      year: 0,
      CVC: 0
    }
  }
  const [formData, updateFormData] = useState(exFormData),
    updateData = (newItem) => {

    }

  return (
    <formContext.Provider value={exFormData}>
      <main className="min-w-full flex flex-row">
        <CardPreview />
        <Form getFormData ={updateData}/>
      </main>
    </formContext.Provider>
  );
}

export default App
