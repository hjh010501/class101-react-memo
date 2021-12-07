import { nanoid, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { MemoState } from './types';
import { saveMemoData, loadMemoData } from '../localStorage';

export const initialState: MemoState = {
  memolist: loadMemoData(),
};

const slice = createSlice({
  name: 'memo',
  initialState,
  reducers: {
    addMemo: {
      reducer: (state, action: PayloadAction<MemoItem>) => {
        state.memolist.push(action.payload);
        for (const memo of state.memolist) {
          if (memo.id === action.payload.id) continue;
          if (memo.selected) memo.selected = false;
        }
        saveMemoData(state.memolist);
      },
      prepare: (content: string, preview: string) => {
        const id = nanoid();
        return {
          payload: {
            id,
            content,
            preview: preview,
            selected: true,
            created_at: new Date().toString(),
          },
        };
      },
    },
    selectMemo(state, action: PayloadAction<{ id: string }>) {
      const { id } = action.payload;
      for (const memo of state.memolist) {
        if (memo.id === id) continue;
        if (memo.selected) memo.selected = false;
      }
      const memo = state.memolist.find(memo => memo.id === id);
      if (memo) {
        memo.selected = true;
      }
      saveMemoData(state.memolist);
    },
    saveMemo(
      state,
      action: PayloadAction<{ content: string; preview: string }>,
    ) {
      const { content, preview } = action.payload;
      const memo = state.memolist.find(memo => memo.selected);
      if (memo) {
        memo.content = content;
        memo.preview = preview;
        memo.created_at = new Date().toString();
      }
      saveMemoData(state.memolist);
    },
    deleteMemo(state, action: PayloadAction) {
      const filteredMemos = state.memolist.filter(memo => !memo.selected);
      state.memolist = filteredMemos;
      const sortedMemos = [...state.memolist].sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      );
      if (sortedMemos.length > 0) {
        const memo = state.memolist.find(memo => memo.id === sortedMemos[0].id);
        if (memo) {
          memo.selected = true;
        }
      }
      saveMemoData(state.memolist);
    },
  },
});

export const { actions: MemoActions } = slice;

export const useMemoSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { MemoActions: slice.actions };
};
