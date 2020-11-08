import React from 'react'
import 'MainComponent.css';
import tw from "twin.macro";
import img from "./images/logo-full.png";
import styled from "styled-components";
import { Link } from 'react-router-dom';
const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

            /**/

function MainComponent({user}) {
    console.log(user);
    return (
        <div className="MainComponent__body">
            <div className="MainComponent__Header"><img className="logos" src ={img} /> </div>
            <img className="avatar" src ={user.photoURL} />
            <Heading> Welcome, {user.displayName} !</Heading>
            <div className="cards">
              <div className="c">
              <Heading> Ask a question?</Heading>
              </div>
              <div className="c">
              <Heading> <Link to="/pages/SearchNotes">Search for Notes </Link></Heading>
              </div>
            </div> 
            <div className="cards">
                <div className="c">
                <Heading> Upload your Notes</Heading>
                </div>
                <div className="c">
                <Heading> Answer Questions</Heading>
                </div>
            </div>
        </div>
    )
}

export default MainComponent
