import React from 'react';
import { Header } from '../header';
import { Footer } from '../footer';
import TodoContainer from '../container';
import './index.scss';

export const TodoApp = () => (
  <div className="page-wrap" id="page-wrap">
    <Header />
    <TodoContainer />
    <Footer author="by Andrei Gerasimchuk" company="EPAM" />
  </div>
);
