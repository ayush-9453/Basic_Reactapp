import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import {BsSearch} from "react-icons/bs";
import {AiFillPlusCircle} from "react-icons/ai"
import {collection, getDoc, getDocs} from "firebase/firestore"
import {db} from "./config/firebase";
import ContactCard from "./components/ContactCard";
//import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
 const App = () => {
  const [contacts, setContacts]=useState([]);
  const[isOpen,setOpen] =useState(false);
  const onOpen=()=>{
    setOpen(true);
  };
  const onClose=()=>{
    setOpen(false);
  };
  useEffect(()=>{
    const getContacts= async() =>{
      try {
        const contactsRef = collection(db,"contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc)=>
        {
          return{
            id:doc.id,
            ...doc.data()
          } 
        });
        setContacts(contactLists);
      } catch (error) {
        console.log(error)
      }
    };
    getContacts();
  },[]);
  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
       <Navbar/>
       < div className="flex gap-2">
       <div className="relative flex flex-grow items-center">
         <input type="text" className="bg-transparent border text-white pl-9 border-white rounded-md h-10 flex-grow" />
         <BsSearch className="text-white ml-1 mr-1 absolute text-3xl"/>
       </div>
       <AiFillPlusCircle onClick={onOpen} className="flex justify-center items-center text-4xl text-white"/>
       </div>
       <div className="mt-4">
        {
          contacts.map((contacts)=>(
           <ContactCard key={contacts.id} contacts={contacts}/>
          ))
        }
       </div>
    </div>
   <AddAndUpdateContact onClose={onClose} isOpen={isOpen}/>
    </>
  )
};

export default App;
