export const SPORTS_CATEGORIES = ['Soccer', 'Basketball', 'American Football', 'Baseball', 'Ice Hockey'];

export const ALL_TEAMS = [
  // Soccer
  {
    id: 'man-city',
    name: 'Manchester City',
    sport: 'Soccer',
    league: 'Premier League',
    logo: '🔵',
    color: '#6CABDD',
    results: [
      { date: '2026-03-05', opponent: 'Arsenal', score: '3-1', outcome: 'W', competition: 'Premier League' },
      { date: '2026-03-01', opponent: 'Real Madrid', score: '1-2', outcome: 'L', competition: 'Champions League' },
      { date: '2026-02-25', opponent: 'Chelsea', score: '2-2', outcome: 'D', competition: 'Premier League' },
      { date: '2026-02-20', opponent: 'Tottenham', score: '4-0', outcome: 'W', competition: 'Premier League' },
      { date: '2026-02-15', opponent: 'Liverpool', score: '1-0', outcome: 'W', competition: 'FA Cup' },
    ],
    upcomingEvents: [
      { date: '2026-03-12', opponent: 'Everton', competition: 'Premier League' },
      { date: '2026-03-18', opponent: 'Bayern Munich', competition: 'Champions League' },
    ],
  },
  {
    id: 'real-madrid',
    name: 'Real Madrid',
    sport: 'Soccer',
    league: 'La Liga',
    logo: '⚪',
    color: '#FEBE10',
    results: [
      { date: '2026-03-06', opponent: 'Barcelona', score: '2-0', outcome: 'W', competition: 'La Liga' },
      { date: '2026-03-01', opponent: 'Man City', score: '2-1', outcome: 'W', competition: 'Champions League' },
      { date: '2026-02-26', opponent: 'Atletico Madrid', score: '1-1', outcome: 'D', competition: 'La Liga' },
      { date: '2026-02-22', opponent: 'Sevilla', score: '3-2', outcome: 'W', competition: 'La Liga' },
      { date: '2026-02-16', opponent: 'Valencia', score: '0-1', outcome: 'L', competition: 'La Liga' },
    ],
    upcomingEvents: [
      { date: '2026-03-12', opponent: 'Villarreal', competition: 'La Liga' },
      { date: '2026-03-18', opponent: 'Man City', competition: 'Champions League' },
    ],
  },
  {
    id: 'liverpool',
    name: 'Liverpool',
    sport: 'Soccer',
    league: 'Premier League',
    logo: '🔴',
    color: '#C8102E',
    results: [
      { date: '2026-03-07', opponent: 'Wolves', score: '4-1', outcome: 'W', competition: 'Premier League' },
      { date: '2026-03-02', opponent: 'Inter Milan', score: '2-0', outcome: 'W', competition: 'Champions League' },
      { date: '2026-02-27', opponent: 'Man Utd', score: '3-1', outcome: 'W', competition: 'Premier League' },
      { date: '2026-02-22', opponent: 'Chelsea', score: '1-2', outcome: 'L', competition: 'Premier League' },
      { date: '2026-02-15', opponent: 'Man City', score: '0-1', outcome: 'L', competition: 'FA Cup' },
    ],
    upcomingEvents: [
      { date: '2026-03-13', opponent: 'Aston Villa', competition: 'Premier League' },
      { date: '2026-03-19', opponent: 'Inter Milan', competition: 'Champions League' },
    ],
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    sport: 'Soccer',
    league: 'La Liga',
    logo: '🔵🔴',
    color: '#A50044',
    results: [
      { date: '2026-03-06', opponent: 'Real Madrid', score: '0-2', outcome: 'L', competition: 'La Liga' },
      { date: '2026-03-01', opponent: 'Napoli', score: '3-1', outcome: 'W', competition: 'Champions League' },
      { date: '2026-02-26', opponent: 'Getafe', score: '2-0', outcome: 'W', competition: 'La Liga' },
      { date: '2026-02-21', opponent: 'Osasuna', score: '4-0', outcome: 'W', competition: 'La Liga' },
      { date: '2026-02-17', opponent: 'Athletic Bilbao', score: '1-1', outcome: 'D', competition: 'La Liga' },
    ],
    upcomingEvents: [
      { date: '2026-03-14', opponent: 'Rayo Vallecano', competition: 'La Liga' },
    ],
  },
  // Basketball
  {
    id: 'lakers',
    name: 'Los Angeles Lakers',
    sport: 'Basketball',
    league: 'NBA',
    logo: '🟡',
    color: '#552583',
    results: [
      { date: '2026-03-07', opponent: 'Golden State Warriors', score: '112-105', outcome: 'W', competition: 'NBA' },
      { date: '2026-03-05', opponent: 'Boston Celtics', score: '98-110', outcome: 'L', competition: 'NBA' },
      { date: '2026-03-03', opponent: 'Miami Heat', score: '121-108', outcome: 'W', competition: 'NBA' },
      { date: '2026-03-01', opponent: 'Denver Nuggets', score: '104-107', outcome: 'L', competition: 'NBA' },
      { date: '2026-02-28', opponent: 'Dallas Mavericks', score: '118-101', outcome: 'W', competition: 'NBA' },
    ],
    upcomingEvents: [
      { date: '2026-03-10', opponent: 'Phoenix Suns', competition: 'NBA' },
      { date: '2026-03-13', opponent: 'Chicago Bulls', competition: 'NBA' },
    ],
  },
  {
    id: 'celtics',
    name: 'Boston Celtics',
    sport: 'Basketball',
    league: 'NBA',
    logo: '🟢',
    color: '#007A33',
    results: [
      { date: '2026-03-07', opponent: 'New York Knicks', score: '115-104', outcome: 'W', competition: 'NBA' },
      { date: '2026-03-05', opponent: 'LA Lakers', score: '110-98', outcome: 'W', competition: 'NBA' },
      { date: '2026-03-02', opponent: 'Milwaukee Bucks', score: '102-99', outcome: 'W', competition: 'NBA' },
      { date: '2026-02-28', opponent: 'Philadelphia 76ers', score: '88-95', outcome: 'L', competition: 'NBA' },
      { date: '2026-02-26', opponent: 'Toronto Raptors', score: '120-110', outcome: 'W', competition: 'NBA' },
    ],
    upcomingEvents: [
      { date: '2026-03-11', opponent: 'Brooklyn Nets', competition: 'NBA' },
    ],
  },
  {
    id: 'warriors',
    name: 'Golden State Warriors',
    sport: 'Basketball',
    league: 'NBA',
    logo: '🔵🟡',
    color: '#1D428A',
    results: [
      { date: '2026-03-07', opponent: 'LA Lakers', score: '105-112', outcome: 'L', competition: 'NBA' },
      { date: '2026-03-04', opponent: 'Sacramento Kings', score: '118-109', outcome: 'W', competition: 'NBA' },
      { date: '2026-03-02', opponent: 'Portland Trail Blazers', score: '131-120', outcome: 'W', competition: 'NBA' },
      { date: '2026-02-28', opponent: 'Memphis Grizzlies', score: '108-95', outcome: 'W', competition: 'NBA' },
      { date: '2026-02-26', opponent: 'San Antonio Spurs', score: '97-101', outcome: 'L', competition: 'NBA' },
    ],
    upcomingEvents: [
      { date: '2026-03-11', opponent: 'Houston Rockets', competition: 'NBA' },
      { date: '2026-03-14', opponent: 'Denver Nuggets', competition: 'NBA' },
    ],
  },
  // American Football
  {
    id: 'chiefs',
    name: 'Kansas City Chiefs',
    sport: 'American Football',
    league: 'NFL',
    logo: '🏈',
    color: '#E31837',
    results: [
      { date: '2026-02-08', opponent: 'San Francisco 49ers', score: '38-35', outcome: 'W', competition: 'Super Bowl LX' },
      { date: '2026-01-25', opponent: 'Buffalo Bills', score: '32-29', outcome: 'W', competition: 'AFC Championship' },
      { date: '2026-01-18', opponent: 'Houston Texans', score: '27-20', outcome: 'W', competition: 'AFC Divisional' },
      { date: '2026-01-11', opponent: 'LA Chargers', score: '24-17', outcome: 'W', competition: 'AFC Wild Card' },
      { date: '2026-01-04', opponent: 'Las Vegas Raiders', score: '21-14', outcome: 'W', competition: 'NFL Regular Season' },
    ],
    upcomingEvents: [
      { date: '2026-09-10', opponent: 'TBD', competition: 'NFL Season Opener' },
    ],
  },
  {
    id: '49ers',
    name: 'San Francisco 49ers',
    sport: 'American Football',
    league: 'NFL',
    logo: '🏈',
    color: '#AA0000',
    results: [
      { date: '2026-02-08', opponent: 'Kansas City Chiefs', score: '35-38', outcome: 'L', competition: 'Super Bowl LX' },
      { date: '2026-01-25', opponent: 'Philadelphia Eagles', score: '21-17', outcome: 'W', competition: 'NFC Championship' },
      { date: '2026-01-18', opponent: 'Green Bay Packers', score: '28-20', outcome: 'W', competition: 'NFC Divisional' },
      { date: '2026-01-11', opponent: 'Dallas Cowboys', score: '35-7', outcome: 'W', competition: 'NFC Wild Card' },
      { date: '2026-01-04', opponent: 'LA Rams', score: '24-21', outcome: 'W', competition: 'NFL Regular Season' },
    ],
    upcomingEvents: [
      { date: '2026-09-10', opponent: 'TBD', competition: 'NFL Season Opener' },
    ],
  },
  // Baseball
  {
    id: 'yankees',
    name: 'New York Yankees',
    sport: 'Baseball',
    league: 'MLB',
    logo: '⚾',
    color: '#003087',
    results: [
      { date: '2026-03-06', opponent: 'Boston Red Sox', score: '5-2', outcome: 'W', competition: 'MLB Spring Training' },
      { date: '2026-03-04', opponent: 'Tampa Bay Rays', score: '3-4', outcome: 'L', competition: 'MLB Spring Training' },
      { date: '2026-03-02', opponent: 'Baltimore Orioles', score: '7-1', outcome: 'W', competition: 'MLB Spring Training' },
      { date: '2026-02-28', opponent: 'Toronto Blue Jays', score: '2-2', outcome: 'D', competition: 'MLB Spring Training' },
      { date: '2026-02-26', opponent: 'Minnesota Twins', score: '4-0', outcome: 'W', competition: 'MLB Spring Training' },
    ],
    upcomingEvents: [
      { date: '2026-03-12', opponent: 'Houston Astros', competition: 'MLB Spring Training' },
    ],
  },
  // Ice Hockey
  {
    id: 'bruins',
    name: 'Boston Bruins',
    sport: 'Ice Hockey',
    league: 'NHL',
    logo: '🏒',
    color: '#FFB81C',
    results: [
      { date: '2026-03-07', opponent: 'Montreal Canadiens', score: '4-2', outcome: 'W', competition: 'NHL' },
      { date: '2026-03-05', opponent: 'Toronto Maple Leafs', score: '1-3', outcome: 'L', competition: 'NHL' },
      { date: '2026-03-02', opponent: 'Tampa Bay Lightning', score: '3-2', outcome: 'W', competition: 'NHL' },
      { date: '2026-02-28', opponent: 'NY Rangers', score: '2-2', outcome: 'D', competition: 'NHL' },
      { date: '2026-02-26', opponent: 'Ottawa Senators', score: '5-1', outcome: 'W', competition: 'NHL' },
    ],
    upcomingEvents: [
      { date: '2026-03-11', opponent: 'Pittsburgh Penguins', competition: 'NHL' },
      { date: '2026-03-14', opponent: 'Buffalo Sabres', competition: 'NHL' },
    ],
  },
  {
    id: 'maple-leafs',
    name: 'Toronto Maple Leafs',
    sport: 'Ice Hockey',
    league: 'NHL',
    logo: '🍁',
    color: '#003E7E',
    results: [
      { date: '2026-03-07', opponent: 'Ottawa Senators', score: '3-1', outcome: 'W', competition: 'NHL' },
      { date: '2026-03-05', opponent: 'Boston Bruins', score: '3-1', outcome: 'W', competition: 'NHL' },
      { date: '2026-03-03', opponent: 'Montreal Canadiens', score: '2-4', outcome: 'L', competition: 'NHL' },
      { date: '2026-02-28', opponent: 'Florida Panthers', score: '5-3', outcome: 'W', competition: 'NHL' },
      { date: '2026-02-26', opponent: 'Detroit Red Wings', score: '2-2', outcome: 'D', competition: 'NHL' },
    ],
    upcomingEvents: [
      { date: '2026-03-12', opponent: 'NY Islanders', competition: 'NHL' },
    ],
  },
];

export function getTeamById(id) {
  return ALL_TEAMS.find((t) => t.id === id) || null;
}

export function getTeamsBySport(sport) {
  return ALL_TEAMS.filter((t) => t.sport === sport);
}
