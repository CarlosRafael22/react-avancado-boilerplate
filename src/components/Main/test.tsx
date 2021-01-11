import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render a heading', () => {
    const { container } = render(<Main />)
    expect(
      screen.getByRole('heading', { name: /testing main/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
