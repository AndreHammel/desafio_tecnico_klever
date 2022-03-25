import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App'
import { Provider } from 'react-redux';
import { store } from '../redux/store'

describe('1 - App.js testing...', () => {
  test('1.1 - Verify header image on screen', () => {
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )
    const headerImage = screen.getByRole('img')
    expect(headerImage).toBeDefined()
  })

  test('1.2 - Verify button "Add Token" on scree', () => {
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )
    const btnAddToken = screen.getByRole('button', { name: /add token/i })
    expect(btnAddToken).toBeDefined()
  })

  test('1.3 - Verify text "Wish Wallet" on screen', () => {
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )
    const textWishWallet = screen.getByText(/wish wallet/i)
    expect(textWishWallet).toBeDefined()
  })

  test('1.4 - Verify "token" text on screen', () => {
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )
    const textTokens = screen.getByText(/tokens/i)
    expect(textTokens).toBeDefined()
  })

  test('1.5 - Verify "balance" text on screen', () => {
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )
    const textBalance = screen.getByText(/balance/i)
    expect(textBalance).toBeDefined()
  })

  test('1.6 - Verify table element rendered ', () => {
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )
    const table = screen.getByRole('table')
    expect(table).toBeDefined()
  })

  test('1.7 - Verify logo image rendered on screen', () => {
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )
    const table = screen.getAllByRole('img')
    // console.log(table)
    expect(table).toBeDefined()
  })

  test('1.8 - Verify table row rendered', () => {
    render(
      <Provider store={ store }>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )
    const tr = screen.getByRole('row')
    expect(tr).toBeDefined()
  })
})