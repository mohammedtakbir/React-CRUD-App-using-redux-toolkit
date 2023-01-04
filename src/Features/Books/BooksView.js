import React from 'react';
import { useSelector } from 'react-redux';

const BooksView = () => {
    const books = useSelector(state => state.booksReducer.books);

    return (
        <div>
            <h2>All Books</h2>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
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
                                    <td>{id}</td>
                                    <td>{title}</td>
                                    <td>{author}</td>
                                    <td>
                                        <button className='underline text-green-600 font-medium mr-5 active:text-blue-500'>Edit</button>
                                        <button className='underline text-red-500 font-medium active:text-blue-500'>Delete</button>
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