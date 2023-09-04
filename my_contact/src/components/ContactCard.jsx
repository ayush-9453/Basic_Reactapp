import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";
const ContactCard = ({ contacts }) => {
  const {isOpen, onClose , onOpen} =useDisclouse(); 
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted ")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        key={contacts.id}
        className="mt-4 p-2 flex justify-between items-center rounded-lg bg-yellow"
      >
        <div className="flex gap-1">
          <HiOutlineUserCircle className="text-5xl text-orange" />
          <div className="">
            <h2 className="font-medium">{contacts.name} </h2>
            <p className="text-sm">{contacts.email}</p>
          </div>
        </div>
        <div className="flex text-3xl">
          <RiEditCircleLine onClick={onOpen} className="cursor-pointer"/>
          <IoMdTrash
            onClick={() => deleteContact(contacts.id)}
            className="text-purple cursor-pointer"
          />
        </div>
      </div>
      <AddAndUpdateContact contacts={contacts} isUpdate={true} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ContactCard;
