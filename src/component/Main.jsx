export default function Main({toggleModalOff, jsonData}) {
    return (
        <div className="imgContainer" onClick={toggleModalOff}>
            <img src={jsonData?.hdurl} alt={jsonData?.title || "bg-image"} className="bgImage"/>
        </div>
    )
}