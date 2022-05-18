// import logo from './logo.svg'
// import './App.css'
// import { useState } from 'react'
//
// function App() {
//
//   state = {
//     title: '',
//     user: '',
//     image: null
//   };
//
//
//   const [image, setImage] = useState()
//   const [title, setTitle] = useState()
//   const [user, setUser] = useState()
//   const [status, setStatus] = useState('')
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     let formData = new FormData();
//     formData.append('image', image, this.state.image.name)
//     formData.append('title', title)
//     formData.append('user', user)
//     console.log(formData)
//     console.log(image)
//     console.log(title)
//     const response = await fetch('http://localhost:8000/api/posts/create/', {
//       method: 'POST',
//       body: formData,
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUyNzEyMDkzLCJpYXQiOjE2NTI3MTE3OTMsImp0aSI6IjUwMzYxODlhYWI3YjRiNWY4YmNmNWJlNWZhNjlhMzZiIiwidXNlcl9pZCI6MSwidXNlcm5hbWUiOiJpc2EifQ.rX1wzQazd7jmmi9DyDAyyAI9913Vjwu-X2ayTeDLmdE'
//       }
//     }).then(response => console.log(response))
//
//     if (response) setStatus(response.statusText)
//   }
//
//   const handleFileChange = (e) => {
//     setImage({
//       [e.target.id]: e.target.value
//     })
//   }
//
//   return (
//     <div className='App'>
//       <h1>Upload to server</h1>
//       {image && <img src={image} width='100' height='100' />}
//       <hr></hr>
//       <form onSubmit={handleSubmit}>
//         <input type='text' name='user' onChange={event => setUser(event.target.value)} />
//         <input type='text' name='title' onChange={event => setTitle(event.target.value)} />
//         <input type='file' name='file' onChange={handleFileChange} />
//         <button type='submit'>Submit</button>
//       </form>
//       {status && <h4>{status}</h4>}
//     </div>
//   )
// }
//
// export default App

////////////////////////////////////////////////////////////////////
// import React, { Component } from 'react';
// import axios from 'axios';
//
// class App extends Component {
//
//     state = {
//         title: '',
//         image: null
//     };
//
//     handleChange = (e) => {
//         this.setState({
//             [e.target.id]: e.target.value
//         })
//     };
//
//     handleImageChange = (e) => {
//         this.setState({
//             image: e.target.files[0]
//         })
//     };
//
//     handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(this.state);
//         let form_data = new FormData();
//         form_data.append('image', this.state.image, this.state.image.name);
//         form_data.append('title', this.state.title);
//         // form_data.append('content', this.state.user);
//         let url = 'http://localhost:8000/api/posts/create/';
//         axios.post(url, form_data, {
//             headers: {
//                 'content-type': 'multipart/form-data',
//                 'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUyNzYwNjQxLCJpYXQiOjE2NTI3NjAzNDEsImp0aSI6ImE0N2UyMjFkZjBjNzQwNzliN2U3MjkxYmIwNjE5OGVjIiwidXNlcl9pZCI6MSwidXNlcm5hbWUiOiJpc2EifQ.pT1XIFExg1v2gw36-wgOllvW-Z9g8O6I7LcrgZtPNLs'
//             }
//         })
//             .then(res => {
//                 console.log(res);
//             })
//             .catch(err => console.log(err))
//     };
//
//     render() {
//         return (
//             <div className="App">
//                 <form onSubmit={this.handleSubmit}>
//                     <p>
//                         <input type="text" placeholder='Title' id='title' value={this.state.title} onChange={this.handleChange} required/>
//                     </p>
//                     {/*<p>*/}
//                     {/*    <input type="text" placeholder='User' id='content' value={this.state.user} onChange={this.handleChange} required/>*/}
//
//                     {/*</p>*/}
//                     <p>
//                         <input type="file"
//                                id="image"
//                                accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/>
//                     </p>
//                     <input type="submit"/>
//                 </form>
//             </div>
//         );
//     }
// }
//
// export default App;


///////////////////////////////////////////////////////////////////



// import React, { Component } from "react";
// import axios from "axios";
//
// class App extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             image: null,
//             title: "",
//             user: 1
//         };
//     }
//
//     handleInputChange = async (event) => {
//         // event.preventDefault();
//         await this.setState({
//             [event.target.name]: event.target.files[0]
//             //image: event.target.files[0]
//             // image: event.target.files[0]
//         });
//     };
//
//     handleChange = async (event) => {
//         // event.preventDefault();
//         await this.setState({
//             [event.target.name]: event.target.value
//
//             //image: event.target.files[0]
//             // image: event.target.files[0]
//         });
//         console.log(this.state.title);
//     };
//
//     handleFormSubmit = (event) => {
//         event.preventDefault();
//
//         let data = new FormData(); // creates a new FormData object
//
//         data.append("image", this.state.image, this.state.image.name); // add your file to form data
//         data.append("title", this.state.title);
//         data.append("title", this.state.user);
//         console.log(this.state.image.name)
//
//         axios({
//             method: "POST",
//             url: "http://127.0.0.1:8000/api/posts/create/",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUyNzYwNjQxLCJpYXQiOjE2NTI3NjAzNDEsImp0aSI6ImE0N2UyMjFkZjBjNzQwNzliN2U3MjkxYmIwNjE5OGVjIiwidXNlcl9pZCI6MSwidXNlcm5hbWUiOiJpc2EifQ.pT1XIFExg1v2gw36-wgOllvW-Z9g8O6I7LcrgZtPNLs"
//             },
//             data
//         })
//             .then((res) => console.log(res))
//             .catch((err) => console.log(err));
//     };
//
//     render() {
//         return (
//             <div id="other" className="">
//                 <p className="mod" style={{ marginTop: "10px" }}>
//                     Uplaod
//                 </p>
//                 <hr></hr>
//
//                 <form onSubmit={this.handleFormSubmit}>
//                     <input type="text" name="title" onChange={this.handleChange} />
//                     <input type="file" name="image" onChange={this.handleInputChange} />
//                     <button>Submit</button>
//                 </form>
//             </div>
//         );
//     }
// }
//
// export default App;


///////////////////////////////////////////////////////


import React , {useState} from "react";
import axios from "axios";



function App () {

    const [title , setTitle] = useState("");
    const [cover , setCover] = useState();

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }


    const csrftoken = getCookie('csrftoken');
    console.log(csrftoken)

    const asd = () => {
        const uploadData = new FormData();
        uploadData.append('title', title);
        uploadData.append('cover', cover);

        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUyNzY3MDU0LCJpYXQiOjE2NTI3NjY3NTQsImp0aSI6IjE5YWI3OTcyNjFlYzQzMTNhMzBhY2FjYTZkNTRkMzIxIiwidXNlcl9pZCI6MSwidXNlcm5hbWUiOiJpc2EifQ.4NTALexFjBGeVAuc_qPYyW2xugOGZJRaFDlzj0lIsgY'
        let data = {
            title: title,
            cover: cover
        }

        axios.post("http://127.0.0.1:8000/api/posts/create/", uploadData, {headers: {
                'content-type': 'multipart/form-data',
                'X-CSRFToken': csrftoken
            }})
            .then(res => console.log(res))
            .catch(err => console.log(err));

    }

    const check = () => {
        console.log(cover)
    }
    return(
        <div>
        <label>
            Title
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </label>
        <br/>
        <label>
            Cover
            <input type="file" accept="image/png, image/jpeg" onChange={(e) => setCover(e.target.files[0])}/>
        </label>
        <br/>
        <button onClick={asd}>button</button>
        </div>
)

}

export default App;

///////////////////////////////////////////////////


// import React, { useState } from 'react';
// import axios from 'axios';
// import ImageUploader from 'react-images-upload';
// import {
//     CCol,
//     CFormGroup,
//     CInputFile,
//     CLabel,
// } from '@coreui/react'
//
// const App = () => {
//     const onDrop = (files) => {
//         if (files.length) {
//             (async () => {
//                 // FormData is needed for file handling
//                 const data = new FormData();
//                 data.append('title', 'qweqwe');
//                 data.append('image', files);
//                 console.log(files)
//
//                 // Sending image to server
//                 const res = await axios
//                     .post('http://127.0.0.1:8000/api/posts/', data)
//                     .catch((err) => err.response);
//             })();
//         }
//     };
//
//     return (
//         <div>
//             <hr />
//             <ImageUploader
//                 withIcon={true}
//                 buttonText="Choose image"
//                 name="imageInput"
//                 onChange={onDrop}
//                 maxFileSize={5242880}
//                 singleImage={true}
//             />
//             <div>
//                 <CFormGroup row>
//                     <CLabel col md="3" htmlFor="file-input">File input</CLabel>
//                     <CCol xs="12" md="9">
//                         <CInputFile id="file-input" name="file-input"/>
//                     </CCol>
//                 </CFormGroup>
//                 <CFormGroup row>
//                     <CCol md="3">
//                         <CLabel>Multiple File input</CLabel>
//                     </CCol>
//                     <CCol xs="12" md="9">
//                         <CInputFile
//                             id="file-multiple-input"
//                             name="file-multiple-input"
//                             multiple
//                             custom
//                         />
//                         <CLabel htmlFor="file-multiple-input" variant="custom-file">
//                             Choose Files...
//                         </CLabel>
//                     </CCol>
//                 </CFormGroup>
//                 <CFormGroup row>
//                     <CLabel col md={3}>Custom file input</CLabel>
//                     <CCol xs="12" md="9">
//                         <CInputFile custom id="custom-file-input"/>
//                         <CLabel htmlFor="custom-file-input" variant="custom-file">
//                             Choose file...
//                         </CLabel>
//                     </CCol>
//                 </CFormGroup>
//             </div>
//         </div>
//     );
// };
//
// export default App;