import React from 'react'
import axios from 'axios'

class ChangeImage extends React.Component {

    constructor(){
        super()
        this.state = {
            id: '',
            file: '',
            imagePath: ''
        }
    }

    setID = (e) => {
        const id = e.target.value
        this.setState({id})
    }

    setImage = (e) => {
        const file = e.target.files[0]
        const imagePath = URL.createObjectURL(file)
        this.setState(() => ({ file, imagePath }))
        console.log(file)
    }

    onSubmit = () => {
        const id = '051'

        if (this.state.file){
            const formData = new FormData()
            const file = this.state.file

            formData.append(
                'image',
                file,
                'pic'
            )

            axios.put(`http://143.244.174.52:4000/api/user/uploadProfileImage/${id}`, {
            'pictures': formData
            }).then(
                response => {
                    console.log(response)
                }
            )
        }
    }


    render () {
        return (
            <div>
                <form>
                    <label className = 'pic-label'> Upload Picture of Child
                        <input type = 'number' onChange = {this.setID} />
                        <input type = 'file' accept = 'image/png, image/jpeg' onChange = {this.setImage} />
                        <img src = {this.state.imagePath} alt = '' width = '150' />
                        <input type = 'button' value = 'upload' onClick = {this.onSubmit} />
                    </label>
                </form>
            </div>
        )
    }
}

export default ChangeImage
