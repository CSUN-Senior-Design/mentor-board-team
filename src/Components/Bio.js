import React, { useState } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'


function Bio() {
    const [value, setValue] = useState("")
    
    const handleOnChage = (e, editor) => {
        const data = editor.getData()
        setValue(data)
    }
    return (
        <div className="container">
            <h3>bio</h3>
            <CKEditor
                editor = {ClassicEditor}
                onChange = {handleOnChage}
            />
        </div>
    )
}

export default Bio