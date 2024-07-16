import './App.css'
import ObserveUserLocation from './components/ObserveUserLocation'

function App() {

  return (
    <main className='container my-5'>
      <h1>Ayoba npm package API</h1>
      <a className='d-block mb-5' href="https://www.npmjs.com/package/ayoba-microapp-api#observeUserPresence">npm package</a>
      <ObserveUserLocation/>
    </main>
  )
}

export default App
