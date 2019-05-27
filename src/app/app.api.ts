export const API_URL = 
    (
        location.hostname === "localhost" || 
        location.hostname === "127.0.0.1" || 
        location.hostname === ""
    ) ?
    "http://localhost:3000" :
    "https://cpfagora-api.herokuapp.com";