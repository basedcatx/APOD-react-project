
const Main = ({jsonData, toggleModalOff}) => 
         (
            <div className="imgContainer" onClick={toggleModalOff}>
            <img loading="lazy" src={jsonData?.hdurl} alt={jsonData?.title || "bg-image"} className="bgImage"/>
        </div>
    )

export default Main;