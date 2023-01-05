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
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        deleteBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter(book => book.id !== id);
        }
    }
})

export const { showBooks, addBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;