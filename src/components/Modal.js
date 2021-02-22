import closeBtn from "../close.svg"

const Modal = ({ selectedCard, setSelectedCard }) => {

    // Click handler is used to check that the click event is on the background or the close button. 
    const handleClick = (e) => {
        if (e.target.classList.contains('background')){
            setSelectedCard(null);
        } else if (e.target.classList.contains('closeBtn')){
            setSelectedCard(null);
        }
    }

    // Create the Modal with the data from the selectedCard prop. 
    return ( 
        <div className="background" onClick={handleClick}>
           { selectedCard && (
           <div className="modal">
               <div className="modal-wraper">
                   <img src={closeBtn} alt="close button" className="closeBtn"/>
                    <img src={selectedCard.imageSrc} alt="restraunt" className="modal-img" /> 
                    <h1 className="modal-header">{selectedCard.name}</h1>
                    <h2 className="modal-location">Location: {selectedCard.location}</h2>
                    <h2 className="modal-hours">Opening Hours: {selectedCard.hours}</h2>
                    <h2 className="modal-vegan">Vegan: {selectedCard.vegan}</h2>
                    <h2 className="modal-review-header">Review:</h2>
                    <p>{selectedCard.review}</p>
                </div>
            </div>)}
        </div>
     );
}
 
export default Modal;