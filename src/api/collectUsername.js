// Utility to collect and store username after login or signup
export function collectUsername(username) {
  if (username) {
    localStorage.setItem('fixitnaija_username', username);
  }
}
