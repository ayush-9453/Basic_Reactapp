import React from 'react'
import {HiOutlineUserCircle} from "react-icons/hi"
import {IoMdTrash} from "react-icons/io";
import {RiEditCircleLine} from "react-icons/ri";

const ContactCard = (props) => {
  return (
    <div key={props.contacts.id} className="mt-4 p-2 flex justify-between items-center rounded-lg bg-yellow">
    <div className="flex gap-1">
    <HiOutlineUserCircle className="text-5xl text-orange"/>
    <div className="">
       <h2 className="font-medium">{props.contacts.name} </h2>
       <p className="text-sm">{props.contacts.email}</p>
       </div>
      </div>
       <div className="flex text-3xl">
       <RiEditCircleLine/>
         <IoMdTrash className="text-purple"/>
       </div>
  </div>
  )
}

export default ContactCard
