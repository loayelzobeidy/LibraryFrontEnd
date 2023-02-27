export default function authHeader() {
    let session = JSON.parse(localStorage.getItem('session'));
    if (session && session.accessToken) {
      return { 
      'x-access-token': session.accessToken,
      'Accept': 'application/json',
      "Content-Type": "application/json" };
    } else {
      return {};
    }
  }
  