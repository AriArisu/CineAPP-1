
import{ Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {

  return (
    <>
    <div className="min-h-screen flex flex-col justify-between items-center">
    <Header/>
    <Outlet/>
    </div>
    </>
  )
}

export default App
