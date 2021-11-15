import React from 'react'
// import ImageUploading from "react-images-uploading";
// import axios from 'axios';


// import React from 'react';
// import { PaystackButton } from 'react-paystack';

// const config = {
//   reference: (new Date()).getTime().toString(),
//   email: "user@example.com",
//   amount: 20000,
//   publicKey: 'pk_test_5e3696a3645df2464029ea462a20dd5a2e7a2a22',
// };

// const UploadImage = () => {
//   // you can call this function anything
//   const handlePaystackSuccessAction = (reference) => {
//     // Implementation for whatever you want to do with reference and after success call.
//     console.log(reference);
//   };

//   // you can call this function anything
//   const handlePaystackCloseAction = () => {
//     // implementation for  whatever you want to do when the Paystack dialog closed.
//     console.log('closed')
//   }

//   const componentProps = {
//       ...config,
//       text: 'Paystack',
//       onSuccess: (reference) => handlePaystackSuccessAction(reference),
//       onClose: handlePaystackCloseAction,
//   };

//   return (
//     <div>
//       <PaystackButton {...componentProps} />
//     </div>
//   );
// }

// export default UploadImage;

// class UploadImage extends React.Component {
//   // http://143.244.174.52:4000/api/user/deleteSingleUserData/id request: delete
//   // http://143.244.174.52:4000/api/user/uploadCampaignPic/id request: ?
//   // http://143.244.174.52:4000/api/user/saveLogData/005

//   constructor(){
//     super()
//     this.state = {
//       pic: null
//     }
//   }

//   setPic = (e) => {
//     const pic = e.target.files[0]
//     this.setState({ pic })
//   }

//   onSubmit = () => {
//     const formData = new FormData()
//     console.log(this.state.pic)
//     formData.append(
//       'image',
//       this.state.pic,
//       '002'
//     )

//     // 'http://143.244.174.52:4000/api/user/uploadCampaignPic/002'
//     axios.put('https://www.kiddiescrown.com/api/user/uploadCampaignPic/002', formData).then(
//       response => console.log(response)
//     )
//   }

  
//   render(){
//     return (
//       <div>
//         <input type = 'file' onChange = {this.setPic} />
//         <input type = 'submit' onClick = {this.onSubmit} value = 'submit'/>
//         <h1> Just See! </h1>
//       </div>
//     )
//   }
// }

// export default UploadImage;


class UploadImage extends React.Component {

  constructor(){
    super()
    this.state = {
      file: null,
      imagePath: '',
      name: ''
    }
  }

  setName = (e) => {
    const name = e.target.value
    this.setState({ name })
  }
  
  setImage = (e) => {
    const file = e.target.files[0]
    const imagePath = URL.createObjectURL(file)
    this.setState(() => ({ file, imagePath }))
  }

  removeImage = () => {
    this.setState(() => ({ imagePath: '', files: !this.state.files }))
  }

  onSubmit = (e) => {
    e.preventDefault()
    const file = this.state.file
    console.log(file)

    const formData = new FormData()
    formData.append(
      'imageFile',
      file,
      'user'
    )

    // axios.post('http://www.kiddiescrown.com/api/user/saveUserData', formData).then(
    //     (response => console.log(response.data))
    // )
  }

  
  render(){
    return (
      <form onSubmit = {this.onSubmit}>
        <label> Name <input type = 'text' value = {this.state.name} onChange = {this.setName} /> </label> <br/>
        <input type = 'file' accept = 'image/png, image/jpeg' onChange = {this.setImage} /> <br/>
        <img src = {this.state.imagePath} alt = '' width = '150' />
        { this.state.imagePath && <div><input type = 'button' value = 'remove' onClick = {this.removeImage} /> <input type = 'submit' value = 'submit' /> </div> }
      </form>
    )
  }
}

export default UploadImage
