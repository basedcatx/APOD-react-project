import { useState } from "react"
import Footer from "./component/Footer"
import Main from "./component/Main"
import Sidebar from "./component/Sidebar"

function App() {
  const [showModal, setModal] = useState(false)
  const toggleModal = () => setModal(!showModal)

  return (
    <>
      <Main />
      {showModal && (<Sidebar toggleModal={toggleModal}/>)}
      <Footer toggleModal={toggleModal}/>
    </>
  )
}

export default App
