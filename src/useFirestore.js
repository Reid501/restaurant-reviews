import { useState, useEffect } from 'react';
import { db } from './firebase/config'

// Custome hook to fetch the collection of docs from firebase. 

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([])

    useEffect(() => {
        let documents = [];
        db.collection(collection).get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                documents.push(doc.data());
            })
            setDocs(documents);
        })
    }, [collection]);

    return { docs };
}   


export default useFirestore;