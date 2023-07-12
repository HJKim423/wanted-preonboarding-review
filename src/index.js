import React from 'react';
import ReactDOM from 'react-dom/client';
import { HttpClient } from './api/httpClient';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { TodoProvider } from './context/TodoContext';
import { AuthService } from './services/AuthService';
import { LocalTokenRepository } from './services/LocalToken';
import { TodoService } from './services/TodoService';

const root = ReactDOM.createRoot(document.getElementById('root'));

//bootstrap
//DI

const tokenRepository = new LocalTokenRepository();
const httpClient = new HttpClient(
  'https://www.pre-onboarding-selection-task.shop/',
  tokenRepository,
);
const authService = new AuthService(httpClient, tokenRepository);
const todoService = new TodoService(httpClient);

root.render(
  <AuthProvider authService={authService}>
    <TodoProvider todoService={todoService}>
      <App />
    </TodoProvider>
  </AuthProvider>,
);
