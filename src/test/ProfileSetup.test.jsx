import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ProfileSetup from '../components/ProfileSetup';

describe('ProfileSetup', () => {
  it('renders name input and sport tabs', () => {
    render(<ProfileSetup onSave={vi.fn()} />);
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /soccer/i })).toBeInTheDocument();
  });

  it('shows error when submitting without a name', () => {
    render(<ProfileSetup onSave={vi.fn()} />);
    fireEvent.click(screen.getByRole('button', { name: /create profile/i }));
    expect(screen.getByRole('alert')).toHaveTextContent(/enter your name/i);
  });

  it('shows error when submitting without selecting a team', () => {
    render(<ProfileSetup onSave={vi.fn()} />);
    fireEvent.change(screen.getByLabelText(/your name/i), { target: { value: 'Alice' } });
    fireEvent.click(screen.getByRole('button', { name: /create profile/i }));
    expect(screen.getByRole('alert')).toHaveTextContent(/select at least one/i);
  });

  it('calls onSave with profile data when form is valid', () => {
    const onSave = vi.fn();
    render(<ProfileSetup onSave={onSave} />);

    fireEvent.change(screen.getByLabelText(/your name/i), { target: { value: 'Alice' } });

    // Select the first team in the current sport tab
    const teamButtons = screen.getAllByRole('button', { pressed: false });
    const teamButton = teamButtons.find((b) => b.classList.contains('team-card'));
    fireEvent.click(teamButton);

    fireEvent.click(screen.getByRole('button', { name: /create profile/i }));

    expect(onSave).toHaveBeenCalledOnce();
    const [profile] = onSave.mock.calls[0];
    expect(profile.name).toBe('Alice');
    expect(profile.favouriteTeams.length).toBeGreaterThan(0);
  });

  it('pre-fills name and teams when editing an existing profile', () => {
    const initialProfile = { name: 'Bob', favouriteTeams: ['lakers'] };
    render(<ProfileSetup onSave={vi.fn()} initialProfile={initialProfile} />);
    expect(screen.getByDisplayValue('Bob')).toBeInTheDocument();
    expect(screen.getByText(/1 team selected/i)).toBeInTheDocument();
  });

  it('switches sport tabs correctly', () => {
    render(<ProfileSetup onSave={vi.fn()} />);
    fireEvent.click(screen.getByRole('tab', { name: /basketball/i }));
    expect(screen.getByRole('tab', { name: /basketball/i })).toHaveAttribute('aria-selected', 'true');
    // Lakers should now appear
    expect(screen.getByText('Los Angeles Lakers')).toBeInTheDocument();
  });
});
