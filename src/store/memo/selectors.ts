import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';

export const baseSelector = (state: RootState) => state.memo;

const MemoListSelector = createSelector(baseSelector, state =>
  [...state.memolist].sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  ),
);

const SelectedMemoListSelector = createSelector(baseSelector, state =>
  state.memolist.find(memo => memo.selected),
);

export { MemoListSelector, SelectedMemoListSelector };
