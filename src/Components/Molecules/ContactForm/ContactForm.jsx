import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const { language } = useSelector(state => state.data);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const form = useRef();
    const onSubmit = (data) => {
        console.log(form)
        console.log(data)
        emailjs.sendForm('service_6bz5kfr', 'template_8ynbgr7', form.current, '79V9-wJaNtKDjICTa')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        language === "en" ?
            <form ref={form} onSubmit={handleSubmit(onSubmit)} className = "grid grid-cols-1 grid-rows-6 gap-3 h-title w-about" >
                <div className='flex gap-3 row-span-1 row-start-1 '>
                    <div className="flex flex-col gap-1 h-full w-1/2">
                        <input type="text" id="name" {...register("name", { required: true })} placeholder='Name' className='h-full p-2' />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className="flex flex-col gap-1 h-full w-1/2">
                        <input type="text" id="email" {...register("email", { required: true })} placeholder='Email' className='h-full p-2'/>
                        {errors.email && <span>This field is required</span>}
                    </div>
                </div>
                <div className="flex flex-col gap-1 row-span-1 row-start-2">
                        <input type="text" id="subject" {...register("subject", { required: true })} placeholder='Subject' className='h-full p-2' />
                        {errors.email && <span>This field is required</span>}
                </div>
                <div className="flex flex-col gap-1 row-span-3 row-start-3">
                    <textarea id="message" {...register("message", { required: true })} placeholder='Message' className='h-full p-2' />
                    {errors.message && <span>This field is required</span>}
                </div>
                <div className='flex w-full justify-end items-end h-full'>
                    <button type="submit" className='h-full w-1/3 hover:text-white hover:bg-sky-400 focus:outline-none border border-sky-400 rounded-none text-sky-500'>Send</button>
                </div>
            </form>
        :
            <form onSubmit={handleSubmit(onSubmit)} className = "grid grid-cols-1 grid-rows-6 gap-3 h-title w-about" >
                <div className='flex gap-3 row-span-1 row-start-1 '>
                    <div className="flex flex-col gap-1 h-full w-1/2">
                        <input type="text" id="name" {...register("name", { required: true })} placeholder='Nombre' className='h-full p-2' />
                        {errors.name && <span>Este campo es requerido</span>}
                    </div>
                    <div className="flex flex-col gap-1 h-full w-1/2">
                        <input type="text" id="email" {...register("email", { required: true })} placeholder='Email' className='h-full p-2'/>
                        {errors.email && <span>Este campo es requerido</span>}
                    </div>
                </div>
                <div className="flex flex-col gap-1 row-span-1 row-start-2">
                        <input type="text" id="subject" {...register("subject", { required: true })} placeholder='Tema' className='h-full p-2' />
                        {errors.subject && <span>Este campo es requerido</span>}
                </div>
                <div className="flex flex-col gap-1 row-span-3 row-start-3">
                    <textarea id="message" {...register("message", { required: true })} placeholder='Mensaje' className='h-full p-2'/>
                    {errors.message && <span>Este campo es requerido</span>}
                </div>
                <div className='flex w-full justify-end items-end h-full'>
                    <button type="submit" className='h-full w-1/3 hover:text-white hover:bg-sky-400 focus:outline-none border border-sky-400 rounded-none text-sky-500'>Enviar</button>
                </div>
            </form>
    );
    
}

export default ContactForm;