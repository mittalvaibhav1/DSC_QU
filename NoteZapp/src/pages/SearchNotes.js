import React from 'react'
import tw from "twin.macro";
import styled from "styled-components";
import "./SearchNotes.css"

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;
function SearchNotes() {
    return (
        <div className= "heading">
           <Heading>See What's being Shared in your University!</Heading> 
           <h1> In this section the users will get the option to search for notes uploaded by others!
               Couldn't finish it due to time constraints!
           </h1>
        </div>
    )
}

export default SearchNotes
