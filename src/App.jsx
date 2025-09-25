import { useEffect, useState } from "react";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Sidebar from "./component/Sidebar";
import { FaGear } from "react-icons/fa6";
import { getHashedKey, getNasaUrl } from "./utils";

function App() {
  const [showModal, setModal] = useState(false);
  const toggleModal = () => setModal(!showModal);
  const [data, setData] = useState();
  // I want to rework on this app, everything about it, is wrong.

  useEffect(() =>
    {(async () => {
      try {
        const response = await fetch(getNasaUrl());
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json()
        if (json) {
          setData(json);
          localStorage.clear();
          localStorage.setItem(
            await getHashedKey(),
            JSON.stringify(json)
          );
        }
      } catch (e) {
        console.error(e);
      }
    })()}, []
  );

  return (
    <>
      {data ? (
        <Main jsonData={data} toggleModalOff={toggleModal} />
      ) : (
        <div className="loadingState">
          <FaGear />
        </div>
      )}
      {showModal && <Sidebar toggleModal={toggleModal} jsonData={data} />}
      {data && <Footer toggleModal={toggleModal} jsonData={data} />}
    </>
  );
}

export default App;
