import { useState } from 'react';
import ProfileSetup from './components/ProfileSetup';
import Dashboard from './components/Dashboard';
import './App.css';

const STORAGE_KEY = 'fan-tracker-profile';

function loadProfile() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveProfile(profile) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
}

export default function App() {
  const [profile, setProfile] = useState(loadProfile);
  const [isEditing, setIsEditing] = useState(false);

  function handleSaveProfile(newProfile) {
    saveProfile(newProfile);
    setProfile(newProfile);
    setIsEditing(false);
  }

  function handleRemoveTeam(teamId) {
    const updated = {
      ...profile,
      favouriteTeams: profile.favouriteTeams.filter((id) => id !== teamId),
    };
    saveProfile(updated);
    setProfile(updated);
  }

  if (!profile || isEditing) {
    return (
      <ProfileSetup
        initialProfile={isEditing ? profile : null}
        onSave={handleSaveProfile}
      />
    );
  }

  return (
    <Dashboard
      profile={profile}
      onEditProfile={() => setIsEditing(true)}
      onRemoveTeam={handleRemoveTeam}
    />
  );
}
