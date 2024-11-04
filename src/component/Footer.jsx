import { FaCircleInfo} from "react-icons/fa6"

export default function Footer ({toggleModal}) {
    return (
        <footer>
            <div className="bgGradient" />
            <div>
               <h2>The brutal martial landscape</h2>
               <h1>APOD Project</h1>
            </div>
            <button onClick={toggleModal}>
                <FaCircleInfo />
            </button>
        </footer>
    )
}