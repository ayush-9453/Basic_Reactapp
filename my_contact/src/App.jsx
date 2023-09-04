import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import {BsSearch} from "react-icons/bs";
import {AiFillPlusCircle} from "react-icons/ai"
import {collection, getDoc, getDocs, onSnapshot} from "firebase/firestore"
import {db} from "./config/firebase";
import ContactCard from "./components/ContactCard";
import NotFound from "./components/NotFound"
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [contacts, setContacts]=useState([]);
  const {isOpen, onClose , onOpen} =useDisclouse(); 

  useEffect(()=>{
    const getContacts= async() =>{
      try {
        const contactsRef = collection(db,"contacts");
        
        onSnapshot(contactsRef, (snapshot)=>{
          const contactLists = snapshot.docs.map((doc)=>
          {
            return{
              id:doc.id,
              ...doc.data()
            } 
          });
          setContacts(contactLists);  
          return contactLists
        })
      } catch (error) {
        console.log(error)
      }
    };
    getContacts();
  },[]);

   const filterContacts =(e) =>{
       const value = e.target.value;
       const contactsRef = collection(db,"contacts");

       onSnapshot(contactsRef, (snapshot)=>{
        const contactLists = snapshot.docs.map((doc)=>
        {
          return{
            id:doc.id,
            ...doc.data()
          } 
        });
        setContacts(contactLists);  
        const filteredContacts = contactLists.filter(contact =>
          contact.name.toLowerCase().includes(value.toLowerCase()))
            setContacts(filteredContacts);
          return filteredContacts;
      })
   }
  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
       <Navbar/>
       < div className="flex gap-2">
       <div className="relative flex flex-grow items-center">
         <input onChange={filterContacts} type="text" className="bg-transparent border text-white pl-9 border-white rounded-md h-10 flex-grow" />
         <BsSearch className="text-white ml-1 mr-1 absolute text-3xl"/>
       </div>
       <AiFillPlusCircle onClick={onOpen} className="flex justify-center items-center text-4xl text-white"/>
       </div>
       <div className="mt-4">
        {contacts.length <= 0 ? <NotFound/> :
          contacts.map((contacts)=>(
           <ContactCard key={contacts.id} contacts={contacts}/>
          ))
        }
       </div>
    </div>
   <AddAndUpdateContact onClose={onClose} isOpen={isOpen}/>
    <ToastContainer position="bottom-center"/>
    </>
  )
};

export default App;
