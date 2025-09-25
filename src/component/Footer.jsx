import { CircleDotIcon } from "lucide-react";

export default function Footer ({toggleModal, jsonData}) {
    return (
        <footer>
            <div className="bgGradient" />
            <div>
          
               <h2>{jsonData?.title}</h2>
            </div>
            <button onClick={toggleModal}>
                <CircleDotIcon />
            </button>
        </footer>
    )
}
