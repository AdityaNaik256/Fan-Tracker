import TeamCard from './TeamCard';
import { getTeamById } from '../data/teams';

export default function Dashboard({ profile, onEditProfile, onRemoveTeam }) {
  const teams = profile.favouriteTeams.map(getTeamById).filter(Boolean);

  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <div>
          <h1 className="dashboard__title">🏆 Fan Tracker</h1>
          <p className="dashboard__welcome">
            Welcome back, <strong>{profile.name}</strong>!
          </p>
        </div>
        <button
          type="button"
          className="btn btn--outline btn--sm"
          onClick={onEditProfile}
        >
          Edit Profile
        </button>
      </header>

      {teams.length === 0 ? (
        <div className="empty-state">
          <p className="empty-state__message">You have no favourite teams yet.</p>
          <button
            type="button"
            className="btn btn--primary"
            onClick={onEditProfile}
          >
            Add Teams
          </button>
        </div>
      ) : (
        <>
          <p className="dashboard__count">
            Following <strong>{teams.length}</strong> team{teams.length > 1 ? 's' : ''}
          </p>
          <div className="team-grid team-grid--cards">
            {teams.map((team) => (
              <TeamCard key={team.id} team={team} onRemove={onRemoveTeam} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
