import { FaCircleInfo} from "react-icons/fa6"

export default function Footer ({toggleModal, jsonData}) {
    return (
        <footer>
            <div className="bgGradient" />
            <div>
          
               <h2>{jsonData?.title}</h2>
            </div>
            <button onClick={toggleModal}>
                <FaCircleInfo />
            </button>
        </footer>
    )
}
