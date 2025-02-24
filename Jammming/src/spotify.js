const clientId = "33418e7576124ae994f25c04079643cb"; 
const redirectUri = "http://localhost:5173/"; // Change this to your production URL when deploying
const scope = "playlist-modify-public playlist-modify-private"; 

let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken; // Return the existing token if available
    }

    // Check if the access token is in the URL
    const urlTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const urlExpiresMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (urlTokenMatch && urlExpiresMatch) {
      accessToken = urlTokenMatch[1];
      const expiresIn = Number(urlExpiresMatch[1]);

      // Automatically clear the token after it expires
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      
      // Remove access token from URL (so it doesn't cause issues later)
      window.history.pushState("Access Token", null, "/");
      
      return accessToken;
    } else {
        const authUrl = `https://accounts.spotify.com/authorize?
            client_id=${clientId}
            &response_type=token
            &scope=${encodeURIComponent(scope)}
            &redirect_uri=${encodeURIComponent(redirectUri)}`;
        window.location = authUrl;
    }

    // If no token, redirect user to Spotify authorization page
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${encodeURIComponent(redirectUri)}`;
    
    window.location = authUrl;
  }
};

export default Spotify;
