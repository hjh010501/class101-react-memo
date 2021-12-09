import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { MemoListSelector } from 'store/memo/selectors';

import MemoItem from '../Item';

const List = styled.div`
  width: 300px;
  height: calc(100vh - 60px);
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;
  @media (max-width: 687px) {
    margin-left: -200px;
    transition: 0.2s;
    &:hover {
      margin-left: 0;
    }
  }
`;

export default function MemoList() {
  const memoList = useSelector(MemoListSelector);
  return (
    <List className="List">
      {memoList.map(memo => (
        <MemoItem
          id={memo.id}
          created_at={memo.created_at}
          selected={memo.selected}
          content={memo.content}
          preview={memo.preview}
        />
      ))}
    </List>
  );
}
