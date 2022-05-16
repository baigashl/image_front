import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [image, setImage] = useState({ preview: '', data: '' })
  const [title, setTitle] = useState()
  const [user, setUser] = useState()
  const [status, setStatus] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('image', image)
    formData.append('title', title)
    formData.append('user', user)
    console.log(formData)
    console.log(JSON.stringify(image.data))
    console.log(JSON.stringify(title))
    const response = await fetch('http://localhost:8000/api/posts/create/', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUyNzEyMDkzLCJpYXQiOjE2NTI3MTE3OTMsImp0aSI6IjUwMzYxODlhYWI3YjRiNWY4YmNmNWJlNWZhNjlhMzZiIiwidXNlcl9pZCI6MSwidXNlcm5hbWUiOiJpc2EifQ.rX1wzQazd7jmmi9DyDAyyAI9913Vjwu-X2ayTeDLmdE'
      }
    }).then(response => console.log(response))

    if (response) setStatus(response.statusText)
  }

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }

  return (
    <div className='App'>
      <h1>Upload to server</h1>
      {image.preview && <img src={image.preview} width='100' height='100' />}
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <input type='text' name='user' onChange={event => setUser(event.target.value)} />
        <input type='text' name='title' onChange={event => setTitle(event.target.value)} />
        <input type='file' name='file' onChange={handleFileChange} />
        <button type='submit'>Submit</button>
      </form>
      {status && <h4>{status}</h4>}
    </div>
  )
}

export default App
