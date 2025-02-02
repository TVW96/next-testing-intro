import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

it('should have a link to Next.js Docs', () => {
    render(<Home />) // A - ARRANGE

    const link = screen.getByRole('link', { name: /docs/i }) // A - ACT

    expect(link).toBeInTheDocument() // A - ASSERT
    expect(link).toHaveAttribute('href', expect.stringContaining('docs')) // Ensure href contains 'docs'
})
