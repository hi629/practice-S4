//action creator
export function selectBook(book){
  // selectBookはaction cretor、actionを返す必要がある
  // 以下はaction
  return {
    // typeは大文字
    type: 'BOOK_SELECTED',
    payload: book
  };
}
