import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const Create = () => {

    const [data, setData] = useState({
        phone: "",
        name: "",
        email: "",
        course: "",
        Attedance:""
    })


    const handleChanges = (e) => {
        const { name, value } = e.target
        setData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:4000/StudentData", data)
         //   .then(res => {
///toast.success(" was added succesfully", {
          ///          position: toast.POSITION.TOP_RIGHT,
         //           autoClose: 3000,
         //       })
         ////   })

        //    .catch(err => {
         //       toast.error("there was an error when adding the blog", {
         ///           position: toast.POSITION.TOP_RIGHT,
   //                 autoClose: 3000,
///})
         //   })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone number" name='phone' onChange={handleChanges} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="@steve" name='name' onChange={handleChanges} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" onChange={handleChanges} name='email' placeholder="@example.com" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Course</Form.Label>
                    <Form.Control type="text" onChange={handleChanges} name='course' placeholder='Software engineer '></Form.Control>
                </Form.Group>
                <Form.Group>
                <Form.Label>Attedance</Form.Label>
                <Form.Control type='checkbox' onChange={handleChanges} name='attedance'></Form.Control>

                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <ToastContainer />
            </Form>

        </div>
    )
}
export default Create;