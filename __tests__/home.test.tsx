import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
describe('Home', () => {
    it('should have a link to Next.js Docs', () => {
        render(<Home />) // A - ARRANGE

        const link = screen.getByRole('link', { name: /docs/i }) // A - ACT

        expect(link).toBeInTheDocument() // A - ASSERT
        expect(link).toHaveAttribute('href', expect.stringContaining('docs')) // Ensure href contains 'docs'
    })

    it('should contain a link to Vercel Docs', () => {
        render(<Home />) // A - ARRANGE

        const link = screen.getByRole('link', {
            name: /Vercel/i
        }) // A - ACT

        expect(link).toBeInTheDocument() // A - ASSERT
        expect(link).toHaveAttribute('href', expect.stringContaining('vercel')) // Ensure href contains 'docs'
    })

    it('should have a heading', () => {
        render(<Home />) // A - ARRANGE

        const myElem = screen.getByRole('link', {
            name: "Learn"
        }) // A - ACT

        expect(myElem).toBeInTheDocument() // A - ASSERT
    })
})

