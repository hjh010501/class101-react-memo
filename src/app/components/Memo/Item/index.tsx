import styled from 'styled-components/macro';

const Box = styled.div<{ selected?: boolean }>`
  width: 100%;
  height: fit-content;
  padding: 8px 15px 8px 15px;
  border-radius: 5px;
  border-bottom: ${props => (props.selected ? 'none' : '1px solid #e9e9e9;')};
  margin: 5px 0;
  user-select: none;
  cursor: pointer;
  background-color: ${props => (props.selected ? '#ffe48b' : '#fff')};
`;

const MemoTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: #2c2c2c;
`;

const MemoContent = styled.div`
  font-size: 0.85rem;
  color: #8b8b8b;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export default function MemoItem({ selected }: { selected?: boolean }) {
  return (
    <Box selected={selected}>
      <MemoTitle>안녕하세요</MemoTitle>
      <MemoContent>어제</MemoContent>
      <MemoContent>안녕하세요? 잘 지내시나요 :) 어쩌구저쩌구 </MemoContent>
    </Box>
  );
}
