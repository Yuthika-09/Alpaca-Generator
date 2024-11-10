import React from 'react'
import { describe, test, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Alpaca from './Alpaca'

vi.mock("../public/assests/alpaca/*", () => ({
  default: "mockImagePath"
}))

vi.mock("../public/assests/alpaca/nose.png", () => ({
  default: "mockNose"
}))

describe('Alpaca Generator', () => {
  test('renders the component', () => {
    render(<Alpaca />)
    expect(screen.getByAltText('Default Accessory')).toBeInTheDocument()
  })
})