import React from 'react';
import { Header } from '../header';
import { Footer } from '../footer';
import TodoContainer from '../container';

export const TodoApp = () => (
  <div className="page-wrap">
    <Header />
    <TodoContainer />
    <Footer />
  </div>
);
