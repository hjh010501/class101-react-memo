import React from 'react';

import styled from 'styled-components/macro';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Block from 'app/components/Block';

const Box = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  padding: 0 10px;
  & * {
    font-family: 'Noto Sans KR' !important;
    letter-spacing: -0.2px;
  }
  & .ql-container.ql-snow {
    border: none !important;
  }
`;

const MemoDate = styled.div`
  font-size: 0.85rem;
  letter-spacing: -0.3px;
  color: #8b8b8b;
  text-align: center;
`;

export default function MemoEditor() {
  const [value, setValue] = React.useState('');

  return (
    <Box>
      <Block marginTop="5px" />
      <MemoDate>{new Date().toLocaleString()}</MemoDate>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        style={{ height: '100%', border: 'none' }}
        modules={{
          toolbar: {
            container: '#toolbar',
          },
        }}
        formats={['bold', 'size', 'header', 'image', 'list', 'link']}
      />
    </Box>
  );
}
