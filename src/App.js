import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// pages & components
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Navbar from './components/Navbar'

function App() {


  return (
    <div className="App">


          <Navbar />

              <Home />



    </div>
  );
}

export default App