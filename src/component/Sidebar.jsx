import { ChevronRight } from "lucide-react";

export default function Sidebar ({toggleModal, jsonData}) {
    return (
        <div className="sidebar">
            <div onClick={toggleModal}></div>
            <div className="bgOverlay" />
            <div className="sidebarContents">
                <h2>{jsonData?.title}</h2>
                <div className="descriptionContainer">
                    <p className="descriptionTitle">{jsonData?.date}</p>
                    <p>{jsonData?.explanation}</p>
                </div>
                <button onClick={toggleModal}>
                    <ChevronRight />
                </button>
            </div>
        </div>
    )
}
