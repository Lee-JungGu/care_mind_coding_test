import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import styled from "styled-components";
import { logoutUser } from "../../../_actions/user_action";

function MyPage({ state, history }) {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    localStorage.removeItem("JWT_KEY");
    dispatch(logoutUser());
    history.push("/");
  };

  useEffect(() => {
    !localStorage.getItem("JWT_KEY") && history.push("/");
  });

  if (state.user.loginSuccess) {
    const {
      user: {
        loginSuccess: { userName, userImage },
      },
    } = state;

    return (
      <Wrapper>
        <Title>환영합니다 {userName}님.</Title>
        <Image src={userImage} alt="아바타이미지" />
        <Name>{userName}</Name>
        <LogoutBtn onClick={onClickHandler}>Logout</LogoutBtn>
      </Wrapper>
    );
  } else {
    localStorage.removeItem("JWT_KEY");
    return null;
  }
}

const mapStateToProps = (state) => {
  return { state };
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  color: #2e2e2e;
`;

const Image = styled.img`
  width: 30%;
`;

const Name = styled.h3`
  margin: 0;
  color: #2e2e2e;
`;

const LogoutBtn = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 12px;
`;

export default connect(mapStateToProps)(MyPage);
