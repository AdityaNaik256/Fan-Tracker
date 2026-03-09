import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from '../components/Dashboard';

const profile = {
  name: 'Alice',
  favouriteTeams: ['lakers', 'celtics'],
};

describe('Dashboard', () => {
  it('renders welcome message with user name', () => {
    render(<Dashboard profile={profile} onEditProfile={vi.fn()} onRemoveTeam={vi.fn()} />);
    expect(screen.getByText(/welcome back/i)).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
  });

  it('renders a card for each favourite team', () => {
    render(<Dashboard profile={profile} onEditProfile={vi.fn()} onRemoveTeam={vi.fn()} />);
    expect(screen.getByText('Los Angeles Lakers')).toBeInTheDocument();
    expect(screen.getByText('Boston Celtics')).toBeInTheDocument();
  });

  it('shows following count', () => {
    render(<Dashboard profile={profile} onEditProfile={vi.fn()} onRemoveTeam={vi.fn()} />);
    expect(screen.getByText(/following/i)).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('shows empty state when no favourite teams', () => {
    render(
      <Dashboard
        profile={{ name: 'Bob', favouriteTeams: [] }}
        onEditProfile={vi.fn()}
        onRemoveTeam={vi.fn()}
      />
    );
    expect(screen.getByText(/no favourite teams/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add teams/i })).toBeInTheDocument();
  });

  it('calls onEditProfile when Edit Profile button is clicked', () => {
    const onEditProfile = vi.fn();
    render(<Dashboard profile={profile} onEditProfile={onEditProfile} onRemoveTeam={vi.fn()} />);
    fireEvent.click(screen.getByRole('button', { name: /edit profile/i }));
    expect(onEditProfile).toHaveBeenCalledOnce();
  });
});
