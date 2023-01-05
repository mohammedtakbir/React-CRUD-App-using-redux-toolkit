import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from './BooksSlice';

const BooksView = () => {
    const dispatch = useDispatch()
    const books = useSelector(state => state.booksReducer.books);

    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id));
    }

    return (
        <div>
            <h2>All Books</h2>

            <table>
                <thead>
                    <tr>
                        {/* <th>ID</th> */}
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books && books.map(book => {
                            const { id, author, title } = book;
                            return (
                                <tr key={id}>
                                    {/* <td>{id}</td> */}
                                    <td>{title}</td>
                                    <td>{author}</td>
                                    <td>
                                        <Link to='/edit-book' state={{ id, title, author }}>
                                            <button
                                                className='underline text-green-600 font-medium mr-5 active:text-blue-500'
                                            >
                                                Edit
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => handleDeleteBook(id)}
                                            className='underline text-red-500 font-medium active:text-blue-500'
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
            </table>

        </div>
    );
};

export default BooksView;