import React from "react";
import Modal from "./Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import {db} from "../config/firebase";
import {toast } from "react-toastify";
import *as Yup from "yup";

const contactSchemeaValidation =Yup.object().shape({
  name:Yup.string().required("Name is Required! "),
  email:Yup.string().email("Invaild email").required("Email is Required")
  

})
const AddAndUpdateContact = ({ isOpen, onClose,isUpdate, contacts }) => {

  const addContact = async (contacts)=>{
    try {
      const contactRef =collection(db, "contacts");
      await addDoc(contactRef,contacts);
      onClose();
      toast.success("Contact Added Succesfully");
    } catch (error) {
      console.log(error)
    }
  }
  
  const UpdateContact = async (contacts,id)=>{
    try {
      const contactRef =doc(db, "contacts",id);
      await updateDoc(contactRef,contacts);
      onClose();
      toast.success("Contact Updated Succesfully");
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Formik
        validationSchema={contactSchemeaValidation}
        initialValues={
          isUpdate ?
            {
              name: contacts.name,
              email: contacts.email,
             }
            : {
              name: "",
              email: "",
            }
      }
        onSubmit={(values) => {
          console.log(values);
           isUpdate? UpdateContact(values,contacts.id): addContact(values)  
        }}
      >
        <Form className="flex flex-col gap-4 ">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="bold">Name*</label>
            <Field name="name" className="border h-10  " />
             <div className="text-s text-red-500">
                <ErrorMessage name="name"/>
             </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email*</label>
            <Field name="email" className="border h-10" />
            <div className="text-s text-red-500">
                <ErrorMessage name="email"/>
             </div>
          </div>
          <button className="self-end border rounded-sm bg-orange px-3 py-1.5">
           {isUpdate ? "update":"add"} contacts
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default AddAndUpdateContact;
