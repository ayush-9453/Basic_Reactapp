import React from 'react'
import Modal from './Modal'
import { Form,Formik } from 'formik';

const AddAndUpdateContact = ({isOpen,onClose}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Formik>
        <Form>
            
        </Form>
      </Formik>
    </Modal>
  )
};

export default AddAndUpdateContact
