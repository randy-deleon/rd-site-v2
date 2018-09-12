import React from 'react';
import styled from 'styled-components';

const PulishedDate = styled.small`
    color: #e54b4b;
    font-weight: bolder;
    letter-spacing: 1px;
    text-transform: uppercase;
    display:grid;
    grid-template-rows: 1fr;
    grid-template-columns: 20px 1fr;
    align-items: center;
    & svg {
      margin-right:5px;
    }
`;

export default ({children}) => {
  return (
    <PulishedDate>
        <svg aria-labelledby="calendaricon" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><title id="calendaricon"></title><path fill="#555" d="M5 6h2v2H5zm3 0h2v2H8zm3 0h2v2h-2zm-9 6h2v2H2zm3 0h2v2H5zm3 0h2v2H8zM5 9h2v2H5zm3 0h2v2H8zm3 0h2v2h-2zM2 9h2v2H2zm11-9v1h-2V0H4v1H2V0H0v16h15V0h-2zm1 15H1V4h13v11z"/></svg>
        <span>{children}</span>
    </PulishedDate>
  );
}

