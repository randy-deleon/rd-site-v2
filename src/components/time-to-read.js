import React from 'react';
import styled from 'styled-components';

const TimeToRead = styled.small`
    color: #555;
    display:grid;
    grid-template-rows: 1fr;
    grid-template-columns: 20px 1fr;
    align-items:center;
    & svg {
      margin-right:5px;
    }
`;

export default ({children}) => {
  return (
    <TimeToRead>
        <svg aria-labelledby="bookicon" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><title id="bookicon"></title><path fill="#555" d="M14 2v13H3.5a1.5 1.5 0 1 1 0-3H13V0H3C1.9 0 1 .9 1 2v12c0 1.1.9 2 2 2h12V2h-1z"/><path fill="#555" d="M3.501 13H3.5a.5.5 0 0 0 0 1H12.999v-1H3.501z"/></svg>
        <span>{children} min read</span>
    </TimeToRead>
  );
}

