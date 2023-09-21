import './sass/reset.scss'
import './App.css'
import './pages/Form/Form'
import { useState } from 'react'
import formContext from './formContext'
import Form from './pages/Form/Form'
import CardPreview from './pages/CardPreview/CardPreview'

function App() {
  const cardData = {
    card: {
      name: "Jane Appleseed",
      number: "0000 0000 0000 0000",
      month: "00",
      year: "00",
      CVC: "000",
    },
    form: {
      name: "e.g. Jane Appleseed",
      number: "e.g. 1234 5678 9123 0000",
      month: "MM",
      year: "YY",
      CVC: "e.g. 123",
    },
    inputData: {
      name: '',
      number: 0,
      month: 0,
      year: 0,
      CVC: 0
    }
  }

  const [formData, updateFormData] = useState(cardData)
  const updateCardData = (newItem) => {
    updateFormData((prevItem) => ({
      ...prevItem,
      inputData: {
        ...newItem
      }
    }))
  }

  return (
    <formContext.Provider value={formData}>
      <main className="min-w-full flex flex-row">
        <CardPreview />
        <Form getFormData={updateCardData}/>
      </main>
    </formContext.Provider>
  );
}

export default App
