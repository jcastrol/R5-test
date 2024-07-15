import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../../Books/presenter/pages/Home";
import BookStorePage from "../../Books/presenter/pages/BookStore";
import BookDetailPage from "../../Books/presenter/pages/BookDetail";

type Props = {};

const RootRouter = (props: Props) => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bookstore" element={<BookStorePage />} />
      <Route path="/bookstore/:id" element={<BookDetailPage />} />
    </Routes>  
  </BrowserRouter>
  );
};

export default RootRouter;
