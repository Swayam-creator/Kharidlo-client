import { useState } from "react";
import {motion} from 'motion/react'
const Signup=()=>{
   const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
   })
   const handleSubmit=(e)=>{
     e.preventDefault();
     console.log("Form Data successfully",formData);
   }
   const handleChange=(e)=>{
    setChange((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
    }))
   }
    return (
        <>
    <div class="relative min-h-screen">
  <div class="absolute inset-0 bg-gradient-to-br from-zinc-900  to-zinc-800">

    <div className=" relative z-10 flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
         <motion.div
         className=" mt-8 sm:mx-auto sm:w-full sm:max-w-md"
         initial={ { opacity:0,y:-30} }
         animate={ { opacity:1 ,y:2} }
         transition={ { duration:0.8, delay:0.2} }
         >
         <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold font-headline 
tracking-tighter text-center" >Create your account</h1>
         </motion.div>
         <form className="" >
         
         </form>
        </div>
    </div>
    </div>

    </>
    )
}
export default Signup;