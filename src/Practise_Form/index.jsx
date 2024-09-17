import './index.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

function App() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            image: ""
        }
    });
    
    const [fileName, setFileName] = useState("No file chosen");

    const onSubmit = (data) => {
        console.log(data);
    };

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            let fullFileName = e.target.files[0].name;
            const maxLength = 10;
            const truncatedFileName = fullFileName.length > maxLength 
                ? `${fullFileName.slice(0,maxLength)}...`
                : fullFileName;
            setFileName(truncatedFileName);
        } else {
            setFileName("No file chosen");
        }
    };

    return (
        <div className='Page'>
            <form onSubmit={handleSubmit(onSubmit)} className='FormPage'>
                <div>
                    <label htmlFor="name">Name&nbsp;:&nbsp;</label>
                    <input 
                        id='name' 
                        type="text" 
                        {...register('name', { required: "Name is required" })} 
                    />
                    {errors.name && <span className="error-message">{errors.name.message}</span>}
                </div>
                
                <div>
                    <label htmlFor="email">Email&nbsp;:&nbsp;</label>
                    <input 
                        id='email' 
                        type="email" 
                        {...register('email', { required: "Email is required" })} 
                    />
                    {errors.email && <span className="error-message">{errors.email.message}</span>}
                </div>
                
                <div className='imageDiv'>
                    <label htmlFor="image">Image&nbsp;:&nbsp;</label>
                    <input 
                        id='image' 
                        type="file" 
                        accept='image/png, image/gif, image/jpeg' 
                        {...register('image', { required: "Image is required" })} 
                        hidden 
                        onChange={handleFileChange}
                    />
                    <button 
                        type="button" 
                        id="customBtn" 
                        onClick={() => document.getElementById('image').click()}
                    >
                        Choose File
                    </button>
                    <span id="fileName">{fileName}</span>
                    {errors.image && <span className="error-message">{errors.image.message}</span>}
                </div>

                <button className='SubmitBtn' type="submit">Add To API</button>
            </form>
        </div>
    );
}

export default App;