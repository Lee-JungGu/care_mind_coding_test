import React from "react";
import ChangeFontSizeButtons from "../ChangeFontSizeButtons/ChangeFontSizeButtons";
import styled from "styled-components";

export default function Content() {
  return (
    <Wrapper>
      <ChangeFontSizeButtons />
      <ContentText>
        <Title>Care Mind Coding Test</Title>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
        <Text>
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </Text>
      </ContentText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #555555;
`;

const ContentText = styled.div`
  padding: 16px;
  color: white;
`;

const Title = styled.h2`
  margin: 0;
`;

const Text = styled.p``;
