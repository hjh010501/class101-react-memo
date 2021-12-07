export const saveMemoData = (memoData: MemoItem[]) => {
  localStorage.setItem('memoData', JSON.stringify(memoData));
};

export const loadMemoData = (): MemoItem[] => {
  const memoData = localStorage.getItem('memoData');
  if (memoData) {
    return JSON.parse(memoData);
  } else {
    return [];
  }
};
