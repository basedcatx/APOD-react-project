import { FaArrowRight } from "react-icons/fa6";

export default function Sidebar ({toggleModal}) {
    return (
        <div className="sidebar">
            <div onClick={toggleModal} />
            <div className="bgOverlay" />
            <div className="sidebarContents">
                <h2>The brutal marshian landscape</h2>
                <div>
                    <p>Description</p>
                    <p>JKASdasjda;sdl;asd;asja;sdjasa;sldalsasd</p>
                </div>
                <button onClick={toggleModal}>
                    <FaArrowRight />
                </button>
            </div>
        </div>
    )
}