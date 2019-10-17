import React from "react";
import Styled from "styled-components";

const Member = Styled.div
`
    border: 1px solid grey;
    border-radius: 10%;
    background: lightblue;
    width: 20%;
    margin: 10px;
`

const FormList = Styled.div
`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`


const Forms = props => {
    console.log("This is from forms", props);
    return (
        <FormList>
            {props.membersList.map((member, index) => {
                return (
                    <Member key={index}>
                        <h2>{member.name}</h2>
                        <h3>{member.role}</h3>
                        <h3>{member.email}</h3>
                    </Member>
                );
            })}
        </FormList>
    );
};

export default Forms;