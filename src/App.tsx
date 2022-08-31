import {Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages/loginPage";
import {MainPage} from "./pages/mainPage";
import {Page404} from "./pages/404/Page404";

function App() {

  return (
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/main' element={<MainPage/>}/>
      <Route path='*' element={<Page404/>}/>
    </Routes>
  )
}

export default App
