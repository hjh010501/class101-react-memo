import * as React from 'react';
import styled from 'styled-components';

import { ReactComponent as SearchIcon } from './assets/search_black_24dp.svg';

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: '1.1em';
  border-radius: 10px;
  border: 1px solid #e9e9e9;
  padding: 5px 7px;
  & svg {
    fill: #646464;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;

  &::placeholder {
    user-select: none;
  }
`;

export default function SearchInput() {
  const [content, setContent] = React.useState<string>('');

  return (
    <Box>
      <SearchIcon />
      <Input
        type="text"
        value={content}
        placeholder="검색"
        onChange={e => setContent(e.target.value)}
        onKeyPress={e => {
          if (content === '') return;
          if (e.key !== 'Enter' && e.key !== 'NumpadEnter') return;
        }}
      />
    </Box>
  );
}
