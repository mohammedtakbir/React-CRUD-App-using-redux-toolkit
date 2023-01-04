import { createSlice } from "@reduxjs/toolkit"

const initialBooks = {
    books: [
        {
            id: 1,
            title: 'Jackfroot Queen',
            author: 'Pinaki Da'
        },
        {
            id: 2,
            title: 'History of Valshun',
            author: 'Pinaki Da'
        }
    ]
}

const booksSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
    }
})

export const { showBooks } = booksSlice.actions;
export default booksSlice.reducer;