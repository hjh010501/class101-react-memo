import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import MemoToolBar from 'app/components/Memo/Toolbar';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div>
        <MemoToolBar />
      </div>
    </>
  );
}
