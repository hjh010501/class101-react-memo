import styled from 'styled-components/macro';

import MemoToolBar from 'app/components/Memo/Toolbar';
import MemoList from 'app/components/Memo/List';
import MemoEditor from 'app/components/Memo/Editor';

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export function HomePage() {
  return (
    <>
      <div>
        <MemoToolBar />
        <FlexRow>
          <MemoList />
          <MemoEditor />
        </FlexRow>
      </div>
    </>
  );
}
