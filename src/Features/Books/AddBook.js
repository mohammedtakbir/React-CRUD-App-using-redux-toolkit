import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './BooksSlice';

const AddBook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const numberOfBooks = useSelector(state => state.booksReducer.books.length)
    const handleAddBook = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const author = form.author.value;
        const book = { id: numberOfBooks + 1, title, author }
        dispatch(addBook(book));
        navigate('/books-view', { replace: true });
        form.reset();
    }

    return (
        <div>
            <h2>Add Book</h2>
            <form onSubmit={handleAddBook}>
                <div className='mb-4 mt-3'>
                    <label
                        className='block text-sm font-medium mb-1'>Title</label>
                    <input
                        className='px-2 p-2 rounded-md text-sm'
                        type="text"
                        name="title"
                        placeholder='Title'
                        required
                    />
                </div>
                <div className='mb-2'>
                    <label
                        className='block text-sm font-medium mb-1'>Author</label>
                    <input
                        className='px-2 p-2 rounded-md text-sm'
                        type="text"
                        name="author"
                        placeholder='Author'
                        required
                    />
                </div>
                <div className='mt-5'>
                    <button type='submit' className='bg-gray-400 hover:bg-gray-700 duration-200 hover:text-white py-3 px-4 rounded-md w-full text-sm font-medium'>
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBook;