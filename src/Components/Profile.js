import React, { Component } from 'react'
import React, {useState} from 'react'
import Courses from './courses/Courses'
import Navbar from './Navbar'

export class Profile extends Component {
    render() {
        const [image, setImage] = useState('')
        const [loading, setLoading] = useState(false)
        const uploadImage = async e => {
            const file = e.target.files
            const data = new FormData()
            data.append('file', files[0])
            data.append('upload_present', )
        }
        return (
            <div className = "profile_image">
             <input type ="file"
                name="file"
                placeholder ="upload"
                onChange = [uploadImage]
            />   
            </div>
        )
    }
}

export default Profile
