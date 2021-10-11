import React from 'react';

import styled from 'styled-components/macro';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Box = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  padding: 0 10px;
`;

export default function MemoEditor() {
  const [value, setValue] = React.useState('');

  return (
    <Box>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        style={{ height: '100%' }}
        modules={{
          toolbar: {
            container: '#toolbar',
          },
          clipboard: {
            matchVisual: false,
          },
        }}
      />
    </Box>
  );
}
