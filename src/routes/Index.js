import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBook from '../Features/Books/AddBook';
import BooksView from '../Features/Books/BooksView';
import Error from '../Pages/Error';
import Footer from '../Pages/Footer';
import Home from '../Pages/Home';
import Navbar from '../Pages/Navbar';

const Index = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/add-book' element={<AddBook />} />
                    <Route path='/books-view' element={<BooksView />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
};

export default Index;