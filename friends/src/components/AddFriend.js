import React, { useState } from 'react';
import axios from 'axios';
import { axiosWithAuth } from './../utils/axiosWithAuth';


const initialFormValues = {
    name: "",
    age: "",
    email: ""
  }

const AddFriend = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues);

    const onChange = evt => {
        const { name, value } = evt.target;
        setFormValues({ ...formValues, [name]: value});
    }

    const onSubmit = evt => {
        evt.preventDefault();
        const newMember = {
            name: formValues.name.trim(),
            age: formValues.age.trim(),
            email: formValues.email.trim()
        }
        console.log(newMember);

        axiosWithAuth()
            .post('/api/friends', newMember)
            .then((res)=>{
                console.log("HIHIHI: ", res);
                props.history.push('/protected');
            })
            .catch((err)=>{
                console.log(err);
            })

        // axios
        //     .post("http://localhost:5000/api/friends", this.state.credentials)
        //     .then((res) => {
        //         console.log(res);
        //         // localStorage.setItem("token", res.data.payload);
        //         // console.log(this.props);
                // this.props.history.push('/protected');
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <label>Name
                    <input
                        type="text"
                        name="name"
                        value={formValues.name}
                        onChange={onChange}
                        placeholder="name"
                        maxLength="30"
                    />
                </label>
                <label>Age
                    <input
                        type="text"
                        name="age"
                        value={formValues.age}
                        onChange={onChange}
                        placeholder="age"
                        maxLength="30"
                    />
                </label>
                <label>Email
                    <input
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={onChange}
                        placeholder="email"
                        maxLength="30"
                    />
                </label>
                <div className='submit'>
                    <button>submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddFriend;