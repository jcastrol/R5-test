import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../../Books/presenter/pages/Home";
import BookStorePage from "../../Books/presenter/pages/BookStore";

type Props = {};

const RootRouter = (props: Props) => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bookstore/:bookId" element={<BookStorePage />} />
    </Routes>  
  </BrowserRouter>
  );
};

export default RootRouter;
