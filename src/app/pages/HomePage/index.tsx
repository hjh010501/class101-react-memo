import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';

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
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
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
