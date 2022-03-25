import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App'
import { Provider } from 'react-redux';
import { store } from '../redux/store'
import { AddToken } from '../pages/AddToken';

describe('2 - AddToken.js testing...', () => {

  test('2.1 - Verify button "Home" on screen', () => {
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <AddToken />
        </BrowserRouter>
      </Provider>
    )
    const btnHome = screen.getByRole('button', { name: /home/i })
    expect(btnHome).toBeDefined()
  })

  test('2.2 - Verify button "Save" on screen', () => {
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <AddToken />
        </BrowserRouter>
      </Provider>
    )
    const btnSave = screen.getByRole('button', { name: /save/i })
    expect(btnSave).toBeDefined()
  })

  test('2.3 - Verify token input', () => {
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <AddToken />
        </BrowserRouter>
      </Provider>
    )
    const tokenInput = screen.getByTestId('token')
    expect(tokenInput).toBeDefined()
  })

  test('2.4 - Verify number of text "token" on screen', () => {
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <AddToken />
        </BrowserRouter>
      </Provider>
    )
    const tokensText = screen.getAllByText(/token/i)
    expect(tokensText).toHaveLength(2)
  })

  test('2.5 - Verify text on screeen ""balance', () => {
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <AddToken />
        </BrowserRouter>
      </Provider>
    )
    const balanceText = screen.getByText(/balance/i)
    expect(balanceText).toBeDefined()
  })
})


// https://stackoverflow.com/questions/32911630/how-do-i-deal-with-localstorage-in-jest-tests