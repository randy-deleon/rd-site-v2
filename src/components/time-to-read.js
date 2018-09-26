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
        <svg aria-labelledby="readicon" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><title id="readicon"></title>
           <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1.6A6.4 6.4 0 1 0 8 1.6a6.4 6.4 0 0 0 0 12.8zm-.8-6.072V3.2h1.6v4.472l3.16 3.16-1.128 1.128L7.2 8.328z" fill="#555"/>

        </svg>
        <span>{children} min read</span>
    </TimeToRead>
  );
}

