import React from 'react'
import { 
    Container, LeftWrapper, Label, Heading, Paragraph,InputFieldWrapper,InputField,Buttons } from '../Components.style'
import Users from "../RightContainer/index"
import { RiSearchLine } from 'react-icons/ri'
import { FaUsers, FaMale, FaFemale } from "react-icons/fa";






export default function LeftContainer() {
  const {fetchUsers}=Users
    return (
      <Container>
        <LeftWrapper>
          <Label size="1.5rem" color="#fff">
            <Heading color="#fff">Hello,</Heading>
            Emerald
          </Label>
          <Paragraph color="#fff" >
            Welcome to your dashboard, kindly sort through the user base
          </Paragraph>
          <InputFieldWrapper primary>
            <RiSearchLine />
            <InputField placeholder="Find a user" primary />
          </InputFieldWrapper>
          <Label size=".9rem" space="3rem" color="#fff" opacity="0.7">
            Show Users
          </Label>
          <Container display="flex" width="10rem" height="10rem">
            <Container width="7rem" height="4rem">
              <Buttons
                size="5rem"
                color="#F935A9"
                font="2.5rem"
                className="users-button"
                onClick={fetchUsers}
              >
                <FaUsers />
              </Buttons>
              <Paragraph color="#fff" weight="400" pad=".5rem" >
                All Users
              </Paragraph>
            </Container>
            <Container width="7rem" height="4rem">
              <Buttons
                size="5rem"
                color="#30BBB5"
                font="2.5rem"
                className="users-button"
              >
                <FaMale />
              </Buttons>
              <Paragraph color="#fff" weight="400" pad=".4rem">
                Male Users
              </Paragraph>
            </Container>
            <Container width="7rem" height="4rem">
              <Buttons
                size="5rem"
                color="#7946C1"
                font="2.5rem"
                className="users-button"
              >
                <FaMale />
              </Buttons>
              <Paragraph color="#fff" weight="400">
                Female Users
              </Paragraph>
            </Container>
          </Container>
        </LeftWrapper>
      </Container>
    );
}
