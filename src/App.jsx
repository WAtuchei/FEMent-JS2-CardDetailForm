import Form from './components/Form/Form'
import CardPreview from './components/CardPreview/CardPreview'
import './components/Form/Form'
import './sass/reset.scss'
import './App.css'

function App() {

  return (
    <div className='min-w-full h-screen flex flex-row'>
      <CardPreview />
      <Form />
    </div>
  )
}

export default App
