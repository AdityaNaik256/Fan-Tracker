import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TeamCard from '../components/TeamCard';
import { getTeamById } from '../data/teams';

const mockTeam = getTeamById('lakers');

describe('TeamCard', () => {
  it('renders team name and league', () => {
    render(<TeamCard team={mockTeam} onRemove={vi.fn()} />);
    expect(screen.getByText('Los Angeles Lakers')).toBeInTheDocument();
    expect(screen.getByText(/Basketball · NBA/i)).toBeInTheDocument();
  });

  it('shows W/D/L record badges', () => {
    render(<TeamCard team={mockTeam} onRemove={vi.fn()} />);
    const wins = mockTeam.results.filter((r) => r.outcome === 'W').length;
    const losses = mockTeam.results.filter((r) => r.outcome === 'L').length;
    expect(screen.getByText(`${wins}W`)).toBeInTheDocument();
    expect(screen.getByText(`${losses}L`)).toBeInTheDocument();
  });

  it('does not show results list initially', () => {
    render(<TeamCard team={mockTeam} onRemove={vi.fn()} />);
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('shows results list when "Show Last 5 Results" button is clicked', () => {
    render(<TeamCard team={mockTeam} onRemove={vi.fn()} />);
    fireEvent.click(screen.getByRole('button', { name: /show last 5 results/i }));
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(5);
  });

  it('hides results list when button is clicked again', () => {
    render(<TeamCard team={mockTeam} onRemove={vi.fn()} />);
    fireEvent.click(screen.getByRole('button', { name: /show last 5 results/i }));
    fireEvent.click(screen.getByRole('button', { name: /hide results/i }));
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('calls onRemove with team id when remove button is clicked', () => {
    const onRemove = vi.fn();
    render(<TeamCard team={mockTeam} onRemove={onRemove} />);
    fireEvent.click(screen.getByRole('button', { name: /remove los angeles lakers/i }));
    expect(onRemove).toHaveBeenCalledWith(mockTeam.id);
  });
});
