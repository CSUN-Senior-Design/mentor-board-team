//import React, { Component } from 'react'
import React, {useState} from 'react'

export class Profile extends Component {
    render() {
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

            setImage(file.secure.url)
            setLoading(false)
        }
        return (
            <div className = "profile_image">
            <h1>profile image</h1>
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
}

export default Profile
