import { render } from '@testing-library/react';
import Breadcrumb from './Breadcrumb';

describe('Breadcrumb', () => {
  it('renders the breadcrumb component with correct items', () => {
    const items = ['Home', 'Category', 'Subcategory'];
    const { getByLabelText, queryAllByText } = render(<Breadcrumb items={items} />);

    const breadcrumbContainer = getByLabelText('breadcrumb');
    const breadcrumbItems = queryAllByText(content => items.includes(content));

    expect(breadcrumbContainer).toBeInTheDocument();
    expect(breadcrumbItems.length).toBe(items.length);

    items.forEach((item, index) => {
      expect(breadcrumbItems[index]).toHaveTextContent(item);
    });
  });
});
