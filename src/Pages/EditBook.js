import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from '../Features/Books/BooksSlice';

const EditBook = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();
    const { title, author, id } = location?.state;

    const handleUpdateBook = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const author = form.author.value;
        const book = { id, title, author };
        dispatch(updateBook(book));
        form.reset();
        navigate('/books-view', { replace: true })
    }

    return (
        <div>
            <h2>Edit Book</h2>
            <form onSubmit={handleUpdateBook}>
                <div className='mb-4 mt-3'>
                    <label
                        className='block text-sm font-medium mb-1'>Title</label>
                    <input
                        className='px-2 p-2 rounded-md text-sm'
                        type="text"
                        name="title"
                        placeholder='Title'
                        required
                        defaultValue={title}
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
                        defaultValue={author}
                    />
                </div>
                <div className='mt-5'>
                    <button type='submit' className='bg-gray-400 hover:bg-gray-700 duration-200 hover:text-white py-3 px-4 rounded-md w-full text-sm font-medium'>
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditBook;