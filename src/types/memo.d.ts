interface MemoItemContent {
  content: string;
  preview: string;
}

interface MemoItem extends MemoItemContent {
  id: string;
  created_at: string;
  selected: boolean;
}
