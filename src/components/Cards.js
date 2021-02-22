import useFirestore from "../useFirestore";

// Use the useFirestore hook to fetch the data and then map over the data to create the restaurant cards.

// setSelectedCard is used to store the data of the card that is clicked on.

const Reviews = ({ setSelectedCard }) => {
    const { docs } = useFirestore('reviews')
    
    return ( 
        <div className="reviews-container">
            { docs && docs.map((doc) => (
                <div className="review" key={doc.key} onClick={() => setSelectedCard(doc)}>
                    <img src={doc.imageSrc} alt="Image of the restaurant" className="card-image" />
                    <h1 className="card-heading">{doc.name}</h1>
                    <h1 className="card-review">Read Review</h1>
                </div>
            ))}
        </div>
     );
}

 
export default Reviews;