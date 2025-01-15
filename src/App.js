import './App.css'
import img_react from './logo.svg'

function App() {
  let nombre = 'Ángel Hurtado'
  let profesion = 'Programador web'
  const tarjeta = <div className="tarjeta-profesion">
    <h2>{nombre}</h2>
    <p>{profesion}</p>
  </div>

  return <div className="mi-clase">
    <h1>Hola mundo desde React !!!</h1>
    {tarjeta}
    <img src={img_react} className="logo"/>
    {{a:"asdf", b:"asdffd"}["b"]}
  </div>
}

export default App;
