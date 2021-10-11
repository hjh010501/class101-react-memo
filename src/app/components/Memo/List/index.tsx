import styled from 'styled-components/macro';
import MemoItem from '../Item';

const List = styled.div`
  width: 300px;
  height: calc(100vh - 60px);
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;
`;

export default function MemoList() {
  return (
    <List>
      <MemoItem selected />
      <MemoItem />
      <MemoItem />
    </List>
  );
}
