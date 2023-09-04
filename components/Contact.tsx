import React from 'react'
import { PhoneIcon,MapPinIcon,EnvelopeIcon } from '@heroicons/react/24/outline';
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };
function Contact() {
    const { register, handleSubmit,} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href =`mailto:sh950904@gmail.com?subject=${formData.subject}
        &body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    };

  return (
    <div className='h-screen flex flex-col items-center relative md:text-left 
    md:flex-row first-letter:max-w-7xl px-10 justify-evenly mx-auto'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>
            contact
        </h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                Feel free to contact me!
            </h4>
            <div className='space-y-3'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className= 'text-yellow-500 h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>949-678-4181</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className= 'text-yellow-500 h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>Irvine, CA 92612</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className= 'text-yellow-500 h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>sh950904@gmail.com</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')}placeholder='Name' className= 'contactInput' type="text" />
                    <input {...register('email')}placeholder='Email' className= 'contactInput'type="email" />
                </div>

                <input {...register('subject')}placeholder='Subject' className= 'contactInput'type="text" />
                <textarea {...register('message')}placeholder='Message' className= 'contactInput'></textarea>
                <button type='submit' className='bg-yellow-500 py-5 px-10 rounded-md text-black font-bold text-lg'>submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact