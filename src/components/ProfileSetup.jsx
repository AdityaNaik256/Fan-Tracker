import { useState } from 'react';
import { ALL_TEAMS, SPORTS_CATEGORIES } from '../data/teams';

export default function ProfileSetup({ onSave, initialProfile }) {
  const [name, setName] = useState(initialProfile?.name || '');
  const [selectedTeams, setSelectedTeams] = useState(initialProfile?.favouriteTeams || []);
  const [activeSport, setActiveSport] = useState(SPORTS_CATEGORIES[0]);
  const [error, setError] = useState('');

  const filteredTeams = ALL_TEAMS.filter((t) => t.sport === activeSport);

  function toggleTeam(teamId) {
    setSelectedTeams((prev) =>
      prev.includes(teamId) ? prev.filter((id) => id !== teamId) : [...prev, teamId]
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (selectedTeams.length === 0) {
      setError('Please select at least one favourite team.');
      return;
    }
    setError('');
    onSave({ name: name.trim(), favouriteTeams: selectedTeams });
  }

  return (
    <div className="profile-setup">
      <div className="profile-setup__header">
        <h1 className="profile-setup__title">🏆 Fan Tracker</h1>
        <p className="profile-setup__subtitle">Create your profile and follow your favourite teams</p>
      </div>

      <form className="profile-setup__form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="fan-name" className="form-label">Your Name</label>
          <input
            id="fan-name"
            type="text"
            className="form-input"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={50}
          />
        </div>

        <div className="form-group">
          <p className="form-label">Select Your Favourite Teams</p>
          <div className="sport-tabs" role="tablist" aria-label="Sport categories">
            {SPORTS_CATEGORIES.map((sport) => (
              <button
                key={sport}
                type="button"
                role="tab"
                aria-selected={activeSport === sport}
                className={`sport-tab${activeSport === sport ? ' sport-tab--active' : ''}`}
                onClick={() => setActiveSport(sport)}
              >
                {sport}
              </button>
            ))}
          </div>

          <div className="team-grid">
            {filteredTeams.map((team) => {
              const isSelected = selectedTeams.includes(team.id);
              return (
                <button
                  key={team.id}
                  type="button"
                  className={`team-card team-card--selectable${isSelected ? ' team-card--selected' : ''}`}
                  onClick={() => toggleTeam(team.id)}
                  aria-pressed={isSelected}
                  style={{ '--team-color': team.color }}
                >
                  <span className="team-card__logo">{team.logo}</span>
                  <span className="team-card__name">{team.name}</span>
                  <span className="team-card__league">{team.league}</span>
                  {isSelected && <span className="team-card__check">✓</span>}
                </button>
              );
            })}
          </div>

          {selectedTeams.length > 0 && (
            <p className="selected-count">
              {selectedTeams.length} team{selectedTeams.length > 1 ? 's' : ''} selected
            </p>
          )}
        </div>

        {error && <p className="form-error" role="alert">{error}</p>}

        <button type="submit" className="btn btn--primary btn--full">
          Create Profile
        </button>
      </form>
    </div>
  );
}
