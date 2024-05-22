function App() {
  const CLIENT_ID = "234fc8e9a43d42b18848a7740d57a6ae"
  const REDIRECT_URI = "http://localhost:5173"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  return (
    <>
      <div>
        My SpotiPie
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}> Login to Spotify</a>
      </div>
    </>
  );
}

export default App;
