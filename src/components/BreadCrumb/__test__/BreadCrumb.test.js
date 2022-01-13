import { render, screen, fireEvent } from '@testing-library/react';

import AuthProvider from '@providers/Auth';
import BreadCrumb from '@components/BreadCrumb';

const onSelectedChange = jest.fn();

describe('BreadCrumb...', () => {
  describe('when authenticated', () => {
    beforeEach(() => {
      render(
        <AuthProvider defaultAuthenticated={true}>
          <BreadCrumb onSelectedChange={onSelectedChange} />
        </AuthProvider>
      );
    });

    it('should render', () => {
      let element = screen.getByTestId('breadcrumb');
      expect(element).toBeInTheDocument();
    });

    it('should be visible', () => {
      let element = screen.getByTestId('breadcrumb');
      expect(element).toBeVisible();
    });

    it('When related element is clicked onSelectChange should return "related"', () => {
      let element = screen.getByText(/related/i);
      fireEvent.click(element);
      expect(onSelectedChange).toHaveBeenLastCalledWith('related');
    });
  });

  describe('when not authenticated', () => {
    beforeEach(() => {
      render(
        <AuthProvider defaultAuthenticated={false}>
          <BreadCrumb onSelectedChange={onSelectedChange} />
        </AuthProvider>
      );
    });

    it('When favorites element is clicked onSelectChange should return "favorites"', () => {
      expect(screen.queryByText(/favorites/i)).not.toBeInTheDocument();
    });
  });
});
