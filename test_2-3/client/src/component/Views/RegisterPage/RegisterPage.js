import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";

export default function LoginPage(props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const body = {
      _id: Date.now(),
      email,
      password,
      name,
      image: "./images/avatar.png",
    };

    if (password === confirmPassword) {
      dispatch(registerUser(body)).then((reponse) => {
        if (!reponse.payload.registerSuccess) {
          console.log(reponse);
          return alert(reponse.payload.message);
        }
        props.history.push("/");
      });
    }
  };

  useEffect(() => {
    localStorage.getItem("JWT_KEY") && props.history.push("/mypage");
  });

  return (
    <Wrapper>
      <Form onSubmit={onSubmitHandler}>
        <Input
          type="email"
          value={email}
          onChange={onEmailHandler}
          placeholder="Email"
        />
        <Input
          type="name"
          value={name}
          onChange={onNameHandler}
          placeholder="Name"
        />
        <Input
          type="password"
          value={password}
          onChange={onPasswordHandler}
          placeholder="Password"
        />
        <Input
          type="password"
          value={confirmPassword}
          onChange={onConfirmPasswordHandler}
          placeholder="Confirm Password"
        />
        <Button>Sign up</Button>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 8px;
  box-sizing: border-box;
  outline: none;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  background-color: #ddd;
  margin-top: 12px;
  cursor: pointer;
`;
