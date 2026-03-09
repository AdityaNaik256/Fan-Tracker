import { describe, it, expect } from 'vitest';
import { ALL_TEAMS, SPORTS_CATEGORIES, getTeamById, getTeamsBySport } from '../data/teams';

describe('teams data', () => {
  it('exports an array of teams', () => {
    expect(Array.isArray(ALL_TEAMS)).toBe(true);
    expect(ALL_TEAMS.length).toBeGreaterThan(0);
  });

  it('every team has required fields', () => {
    ALL_TEAMS.forEach((team) => {
      expect(team).toHaveProperty('id');
      expect(team).toHaveProperty('name');
      expect(team).toHaveProperty('sport');
      expect(team).toHaveProperty('league');
      expect(team).toHaveProperty('results');
      expect(team).toHaveProperty('upcomingEvents');
      expect(team.results).toHaveLength(5);
    });
  });

  it('every result has required fields', () => {
    ALL_TEAMS.forEach((team) => {
      team.results.forEach((r) => {
        expect(r).toHaveProperty('date');
        expect(r).toHaveProperty('opponent');
        expect(r).toHaveProperty('score');
        expect(['W', 'L', 'D']).toContain(r.outcome);
        expect(r).toHaveProperty('competition');
      });
    });
  });

  it('getTeamById returns the correct team', () => {
    const team = getTeamById('lakers');
    expect(team).not.toBeNull();
    expect(team.name).toBe('Los Angeles Lakers');
  });

  it('getTeamById returns null for unknown id', () => {
    expect(getTeamById('unknown-team')).toBeNull();
  });

  it('getTeamsBySport returns only teams of that sport', () => {
    const soccer = getTeamsBySport('Soccer');
    expect(soccer.length).toBeGreaterThan(0);
    soccer.forEach((t) => expect(t.sport).toBe('Soccer'));
  });

  it('exports SPORTS_CATEGORIES array', () => {
    expect(Array.isArray(SPORTS_CATEGORIES)).toBe(true);
    expect(SPORTS_CATEGORIES.length).toBeGreaterThan(0);
  });

  it('all team sports belong to a known category', () => {
    ALL_TEAMS.forEach((team) => {
      expect(SPORTS_CATEGORIES).toContain(team.sport);
    });
  });
});
