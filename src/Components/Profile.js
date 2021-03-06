//import React, { Component } from 'react'
import React, {useState} from 'react'
import './css/profile.css';
// export class Profile extends React.Component {
    function Profile() {
        const [image, setImage] = useState('')
        const [loading, setLoading] = useState(false)
        
        const uploadImage = async e => {
            const files = e.target.files
            const data = new FormData()
            data.append('file', files[0])
            data.append('upload_preset', 'profileimg')
            setLoading(true)
            const res = await fetch(
                'https://api.cloudinary.com/v1_1/dldvtrpuf/image/upload',
                {
                    method:'POST',
                    body: data
                }
            )
            const file = await res.json()

            setImage(file.secure_url)
            setLoading(false)
        }
            return (
                <div className = "profile_image">
                    <div className = "text_type">Set your profile image</div>
                    <input type ="file"
                        name="file"
                        placeholder ="Upload and image"
                        onChange = {uploadImage}
                    />
                    {loading ? (
                        <h3>loading....</h3>
                    ) : (
                        <img src ={image} style = {{width: '300px'}} />
                    )}
                </div>
                
            )
    }
// }

export default Profile
