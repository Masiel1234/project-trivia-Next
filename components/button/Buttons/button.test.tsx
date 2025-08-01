
import { render, screen } from '@testing-library/react';
import Button from '../Buttons/Button';
import { vi } from 'vitest';

vi.mock('../ReturnButton', () => ({
  default: () => <div data-testid="return-button">Return</div>,
}));

vi.mock('./ProfileButton', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="profile-button">{children}</div>
  ),
}));

vi.mock('../ButtonCurrency', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="currency-button">{children}</div>
  ),
}));

vi.mock('./LinkButton', () => ({
  default: ({ name }: { name: string }) => (
    <div data-testid="link-button">{name}</div>
  ),
}));

describe('Button component', () => {
  it('renderiza ReturnButton cuando variant es "return"', () => {
    render(<Button variant="return" />);
    expect(screen.getByTestId('return-button')).toBeInTheDocument();
  });

  it('renderiza ProfileButton cuando variant es "profile"', () => {
    render(<Button variant="profile" to="/perfil">Perfil</Button>);
    expect(screen.getByTestId('profile-button')).toBeInTheDocument();
    expect(screen.getByText('Perfil')).toBeInTheDocument();
  });

  it('renderiza ButtonCurrency cuando variant es "currency"', () => {
    render(<Button variant="currency">Moneda</Button>);
    expect(screen.getByTestId('currency-button')).toBeInTheDocument();
    expect(screen.getByText('Moneda')).toBeInTheDocument();
  });
});
