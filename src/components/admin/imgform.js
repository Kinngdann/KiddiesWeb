import React from 'react';
import axios from 'axios';

export default function ImageForm(){
    
    const [id, setID] = React.useState('');
    const [img, setImg] = React.useState('');

    async function submitForm(e) {
        e.preventDefault();
        if (id && setImg){
            const formData = new FormData()
            formData.append(
                'user', JSON.stringify({
                    id
                })
            )

            formData.append(
                'picture', 
                img,
                'picture'
            )
            
            try {
                const response = await axios.post(
                    'https://kiddiescrown.com/api/user/image-upload',
                    formData
                );
                console.log(response);
                // setStatus(response.request.status);
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input 
                    type='text' 
                    onChange={(e)=>setID(e.target.value)}
                />
                <input 
                    type='file' 
                    onChange={(e)=>setImg(e.target.files[0])}
                />
                <button onClick={submitForm}>SUBMIT</button>
            </form>
        </div>
    );
};
