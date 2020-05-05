import React, { useState } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import './css/profile.css';

function Bio() {
    const [value, setValue] = useState("")
    
    const handleOnChage = (e, editor) => {
        const data = editor.getData()
        setValue(data)
    }
    return (
        <div className="container">
            <div className="text_type">Set your Person Bio</div>
            <CKEditor
                editor = {ClassicEditor}
                onChange = {handleOnChage}
            />
        </div>
    )
}

export default Bio