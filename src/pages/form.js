
import progress4 from '../image/Progress container (2).png';
import progressFull from '../image/Progress container (1).png'

import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";



// CLOUDINARY_URL=cloudinary://<794595123918745>:<-5xrRbgCCPrpUaaCfGqpGKKFlL4>@ddghxno0y

const validation = yup.object().shape({
    fullname: yup.string().required('fullname is required'),
    email: yup.string().email("invalid email").required('email is required'),
    avatar: yup.string().url('upload avalid image url').required('avatar is required'),
    textarea: yup.string().required('it is required')
});

const TicketForm = () => {
    const navigate = useNavigate()

    const [imageUrl, setImageUrl] = useState('');
    const [imgPreview, setImgPreview] = useState(null);
    const [dragging, setdragging] = useState(false)


    const {
        register,
        handleSubmit, 
        setValue,
        formState: {errors}
    }= useForm({
        resolver:yupResolver(validation),
        defaultValues: JSON.parse(localStorage.getItem("formData")) || {}
    })

    useEffect(() => {
        if(imageUrl){
            setValue('avatar', imageUrl)
        }
    }, [imageUrl, setValue])


    async function uploadImage(event) {
        event.preventDefault();
        const file = event.target.files[0];
        if(!file) return;


        const formData = new FormData();
        formData.append('file', file)
        formData.append('upload_preset', 'TICKETS-IMAGES')

        try{
            const response = await fetch('https://api.cloudinary.com/v1_1/ddghxno0y/image/upload',{
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            setImageUrl(data.secure_url);

            setImgPreview(URL.createObjectURL(file))
            event.target.reset()

        }catch(error){
            console.error('image upload failed')
        }
    };

    function handleDragOver(event){
        event.preventDefaul();
        setdragging(true)
    }


    function handleDragLeave(event){
        event.preventDefaul();
        setdragging(false)
    }

    function handleDrop(event){
        event.preventDefaul();
        setdragging(false)
    }

    


    function handleFormSubmit(formData, event){
        localStorage.setItem('formData', JSON.stringify(formData));
        navigate('/ticket');
        
        event.target.reset();
        console.log("Submitting Form Data:", formData);
    }



    return ( 
        <main>
            <div className="formContainer">
                <div className="ticketSelection">
                    <div className="selectionDetails">
                        <h1>Attendee Details</h1>
                        <p>Step 2/3</p> 
                    </div>
                       
                    <div className="Lines">
                        <img src={progressFull} alt="progress" className='progressBar4'/>
                    </div>
                </div>

                <div className="FormContainer"> 
                    <div className="imgContainer">
                        <form onSubmit={handleSubmit(handleFormSubmit)}>
                            <div className="imageDiv">
                                <label className="uploadLabel">Upload profile picture</label>
                                <div 
                                    className={`"upload" ${dragging ? 'dragging' : ''}`}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    onClick={() => document.getElementById('fileInput').click()}>
                                
                                   <input type="file" id='fileInput' accept='image' onChange={uploadImage} className='imgInput' style={{display:'none'}}/>
                                   {!imgPreview && <div className='imgInput'>
                                        <span className='download'><i class="bi bi-cloud-download"></i></span> 
                                        <p>{dragging ? "Drop the file here..." : "Drag & drop or click to upload"}</p> 
                                   </div>}
                            
                                   {imgPreview && <img src={imgPreview} alt="Preview" className="imgInput"/>}
                                   {errors.avatar && <p>{errors.avatar.message}</p>}
                                </div>
                                {/* <i class="bi bi-cloud-download"></i> */}
                            </div>

                           <img src={progress4} alt='progress' className='progressBar' />

                            <label>Enter your name</label>
                            <input type="text"  {...register('fullname')} required className='inputName'/>
                            {errors.fullname && <p>{errors.fullname.message}</p> }
                            <label><i class="bi bi-envelope"></i> Enter your Email</label>
                            <input type="email" placeholder='ayoadegbola@gmail.com' {...register('email')} className='inputName'/>
                            <label>About the project</label>
                            <textarea maxLength='30' type='text' placeholder='textarea' {...register('textarea')}/> 

                            <div className="formButtons">
                               <Link to="/"> <button type="submit">Back</button></Link>
                               <button type="submit" className="submit">Get my free ticket</button> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default TicketForm;