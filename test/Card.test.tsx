import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Card from '../src/components/Card'

const product = {
  id: '1',
  product_name: 'Procesador IntelÂ® Core',
  product_price: '199,99 €',
  product_img: '/processor.jpg',
  product_link: 'procesador-intel-core',
  product_old_price: '229,99 €',
}

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})

describe('Card', () => {
  it('renders normalized product information', () => {
    render(<Card data={product} />)

    expect(screen.getByRole('img', { name: 'Procesador Intel® Core' })).toBeInTheDocument()
    expect(screen.getByText('199,99 €')).toBeInTheDocument()
    expect(screen.getByText('229,99 €')).toBeInTheDocument()
  })

  it('opens the product URL when clicked', () => {
    const openWindow = vi.spyOn(window, 'open').mockImplementation(() => null)
    render(<Card data={product} />)

    fireEvent.click(screen.getByRole('img', { name: 'Procesador Intel® Core' }))

    expect(openWindow).toHaveBeenCalledWith(
      'https://www.pccomponentes.com/procesador-intel-core',
      '_blank',
    )
  })
})