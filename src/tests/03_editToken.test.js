import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { EditToken } from '../pages/EditToken';
import { Provider } from 'react-redux';
import { store } from '../redux/store'
import { AddToken } from '../pages/AddToken';

describe('3 - EditToken.js testing...', () => {

  test('3.1 - Verify button "Home" on screen', () => {
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <EditToken />
        </BrowserRouter>
      </Provider>
    )
    const btnHome = screen.getByRole('button', { name: /home/i })
    expect(btnHome).toBeDefined()
  })

  test('3.2 - Verify button "Save" on screen', () => {
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <EditToken />
        </BrowserRouter>
      </Provider>
    )
    const btnSave = screen.getByRole('button', { name: /save/i })
    expect(btnSave).toBeDefined()
  })

  test('3.3 - Verify button "Remove" on screen', () => {
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <EditToken />
        </BrowserRouter>
      </Provider>
    )
    const btnSave = screen.getByRole('button', { name: /remove/i })
    expect(btnSave).toBeDefined()
  })

  test('3.4 - Verify token input', () => {
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <EditToken />
        </BrowserRouter>
      </Provider>
    )
    const tokenInput = screen.getByTestId('token')
    expect(tokenInput).toBeDefined()
  })

  test('3.5 - Verify number of text "token" on screen', () => {
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

  test('3.6 - Verify text on screeen ""balance', () => {
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
