import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import SearchBar from './SearchBar';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('SearchBar', () => {
  const mockRouterPush = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({
      query: {},
      push: mockRouterPush,
    });
  });

  it('renders the search bar correctly', () => {
    render(<SearchBar />);

    expect(screen.getByAltText('logo de mercado libre')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Nunca dejes de buscar')).toBeInTheDocument();
    expect(screen.getByAltText('buscar')).toBeInTheDocument();
  });

  it('navigates to the search results page on form submission', () => {
    render(<SearchBar />);

    const searchInput = screen.getByPlaceholderText('Nunca dejes de buscar');
    const searchButton = screen.getByAltText('buscar');

    fireEvent.change(searchInput, { target: { value: 'laptop' } });
    fireEvent.click(searchButton);

    expect(mockRouterPush).toHaveBeenCalledWith({
      pathname: '/items',
      query: {
        search: 'laptop',
      },
    });
  });

  it('does not navigate to the search results page if the search query is empty', () => {
    render(<SearchBar />);

    const searchInput = screen.getByPlaceholderText('Nunca dejes de buscar');
    const searchButton = screen.getByAltText('buscar');

    fireEvent.change(searchInput, { target: { value: '' } });
    fireEvent.click(searchButton);

    expect(mockRouterPush).not.toHaveBeenCalled();
  });
});
