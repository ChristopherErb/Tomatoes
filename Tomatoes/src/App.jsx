import Header from './Components/Header'
import About from './Components/About'
import Main from './Components/Main'
import Products from './Components/Products'


const App = () =>{
  return (
    <div className='app'>
        <div className='app-header'>
          <Header />
        </div>
        <div className='content'>
          <Main />
          <About />
          <Products />
        </div>
    </div>
  )
}

export default App
