import React from 'react';
import ReactDOM from 'react-dom';
import { createUser, createSession, deleteSession } from './util/api_util';

document.addEventListener( 'DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.deleteSession = deleteSession;
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
