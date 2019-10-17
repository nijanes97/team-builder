import React, { useState } from "react";
import Styled from "styled-components";

const FormDiv = Styled.div
`
    display: flex;
    justify-content: center;
    width: 500px;
    margin: 0 auto;
    form{
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        div{
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            input{
                width: 500px;
                height: 20px;
                font-size: 15px;
            }
        }
        button{
            margin: 10px;
            width: 30%;
            background-color: transparent;
            color: #000000 !important;
        }
    }
`
const Form = props => {

    const [form, setForm] = useState({
        name:"",
        email:"",
        role:""
    });
    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value });
        console.log(event.target.value);
    };
    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(form);
        setForm({ name:"", email:"", role:""});
    };
    return(
        <FormDiv>
            <form onSubmit={submitForm}>
                <div>
                    <label htmlFor="title">Name:</label>
                    <input name="name" id="name" type="text" placeholder="name..." onChange={changeHandler} value={form.name} />
                </div>
                <div>
                    <label htmlFor="title">Email:</label>
                    <input name="email" id="email" type="text" placeholder="email..." onChange={changeHandler} value={form.email} />
                </div>
                <div>
                    <label htmlFor="title">Role:</label>
                    <input name="role" id="role" type="text" placeholder="role..." onChange={changeHandler} value={form.role} />
                </div>
                <button type="submit">Add Memeber</button>
            </form>
        </FormDiv>
    );
};

export default Form;