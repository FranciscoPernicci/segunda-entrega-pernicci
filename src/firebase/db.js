
import { getFirestore,
    collection,
    getDocs,
    query,
    where,
    doc,
    getDoc,
    addDoc
} from "firebase/firestore"
import {app} from "./config"

const db = getFirestore(app)



export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = []
    
    querySnapshot.forEach((doc) => {
    products.push(doc.data())
    });

    return products
}


export const filterByCategory =  async ( category ) => {
    const q = query(collection(db, "products"), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    const filterProducts =[]

    querySnapshot.forEach((doc) => {
    filterProducts.push(doc.data())
});
    return filterProducts
}


export const getProduct = async(id)=>{
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    
    return docSnap.data()
}   else {
  // docSnap.data() will be undefined in this case
    console.log("No such document!");
} 


}


export const createOrder= async() =>{
    try {
        const docRef = await addDoc(collection(db, "orders"), order);
        
        return docRef.id
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}