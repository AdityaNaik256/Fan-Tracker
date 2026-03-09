import { useState } from 'react';

const OUTCOME_LABEL = { W: 'Win', L: 'Loss', D: 'Draw' };
const OUTCOME_CLASS = { W: 'result--win', L: 'result--loss', D: 'result--draw' };

export default function TeamCard({ team, onRemove }) {
  const [showResults, setShowResults] = useState(false);

  const recentRecord = team.results.reduce(
    (acc, r) => {
      acc[r.outcome] = (acc[r.outcome] || 0) + 1;
      return acc;
    },
    {}
  );

  return (
    <article
      className="team-panel"
      style={{ '--team-color': team.color }}
      aria-label={`${team.name} overview`}
    >
      <div className="team-panel__header">
        <div className="team-panel__identity">
          <span className="team-panel__logo">{team.logo}</span>
          <div>
            <h2 className="team-panel__name">{team.name}</h2>
            <p className="team-panel__meta">
              {team.sport} · {team.league}
            </p>
          </div>
        </div>
        <button
          type="button"
          className="btn btn--ghost btn--sm"
          onClick={() => onRemove(team.id)}
          aria-label={`Remove ${team.name} from favourites`}
        >
          ✕
        </button>
      </div>

      <div className="team-panel__record">
        <span className="record-badge record-badge--win">{recentRecord.W || 0}W</span>
        <span className="record-badge record-badge--draw">{recentRecord.D || 0}D</span>
        <span className="record-badge record-badge--loss">{recentRecord.L || 0}L</span>
        <span className="record-label">last 5</span>
      </div>

      {team.upcomingEvents.length > 0 && (
        <div className="team-panel__upcoming">
          <h3 className="team-panel__section-title">Next Match</h3>
          <p className="upcoming-match">
            <span className="upcoming-match__date">
              {new Date(team.upcomingEvents[0].date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
              })}
            </span>
            <span>vs {team.upcomingEvents[0].opponent}</span>
            <span className="upcoming-match__competition">{team.upcomingEvents[0].competition}</span>
          </p>
        </div>
      )}

      <button
        type="button"
        className="btn btn--outline btn--full"
        onClick={() => setShowResults((prev) => !prev)}
        aria-expanded={showResults}
        aria-controls={`results-${team.id}`}
      >
        {showResults ? 'Hide Results' : 'Show Last 5 Results'}
      </button>

      {showResults && (
        <div id={`results-${team.id}`} className="team-panel__results">
          <h3 className="team-panel__section-title">Last 5 Results</h3>
          <ul className="results-list">
            {team.results.map((result, idx) => (
              <li key={idx} className={`result-item ${OUTCOME_CLASS[result.outcome]}`}>
                <span
                  className="result-outcome"
                  aria-label={OUTCOME_LABEL[result.outcome]}
                >
                  {result.outcome}
                </span>
                <span className="result-opponent">vs {result.opponent}</span>
                <span className="result-score">{result.score}</span>
                <span className="result-competition">{result.competition}</span>
                <span className="result-date">
                  {new Date(result.date).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                  })}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
