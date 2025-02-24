const clientId = "33418e7576124ae994f25c04079643cb"; 
const redirectUri = "http://localhost:5173/"; // Change this to your production URL when deploying
const scope = "playlist-modify-public";


let accessToken ="";

const Spotify = {
    getAccessToken() {
      if (accessToken) {
        return accessToken;
      }
  
      const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
      const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
  
      if (urlAccessToken && urlExpiresIn) {
        accessToken = urlAccessToken[1];
        const expiresIn = Number(urlExpiresIn[1]);
  
        window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
        window.history.pushState("Access Token", null, "/");
  
        return accessToken;
      } else {
        const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
  
        window.location = authUrl;
      }
    },
  
   
    async search(term) {
      const accessToken = this.getAccessToken();
      
      
      if (!accessToken) {
        console.error("No access token available.");
        return [];
      }
  
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(term)}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
  
        
        const jsonResponse = await response.json();
  
        
        if (!jsonResponse.tracks) {
          console.error("No tracks found in the response:", jsonResponse);
          return [];
        }
  
        
        return jsonResponse.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name, 
          album: track.album.name,
          uri: track.uri,
        }));
        
      } catch (error) {
        console.error("Error fetching data from Spotify:", error);
        return [];
      }
    }
  };
  
  export default Spotify;
  
