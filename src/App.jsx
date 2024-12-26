import { useEffect, useState } from "react"
import Footer from "./component/Footer"
import Main from "./component/Main"
import Sidebar from "./component/Sidebar"
import { FaGear } from "react-icons/fa6"

function App() {
  const [showModal, setModal] = useState(false)
  const toggleModal = () => setModal(!showModal)
  const toggleModalOff = () => setModal(false)
  let NASA_KEY = process.env.VITE_NASA_API_KEY || import.meta.env.NASA_API_KEY
  const [data, setData] = useState()
  const today = (new Date()).getDay().toString()
  const localKey = `NASA-${today}`


  async function fetchApiData  () {

      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`
        fetch(url).then(response => {
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
          }
          return response.json()
        })
        .then(data => {
          setData(data)
          localStorage.clear()
          localStorage.setItem(localKey, JSON.stringify(data))
          console.log("new search")
        })
        .catch(error => {
          console.error(error)
          setTimeout(() => {
            fetchApiData()
          }, 2000)
        })
  }
  
  useEffect(() => {
    if (localStorage.getItem(localKey) != null) {
      console.log("already exists")
      setData(JSON.parse(localStorage.getItem(localKey)))
    } else {
      fetchApiData()
    }

  }, [])

  return (
    <>
      {data ? (<Main jsonData={data} toggleModalOff={toggleModalOff}/>) : (
        <div className="loadingState">
          <FaGear />
        </div>
      )}
      {showModal && (<Sidebar toggleModal={toggleModal} jsonData={data}/>)}
      {data && (<Footer toggleModal={toggleModal} jsonData={data}/>)}
    </>
  )
}

export default App
