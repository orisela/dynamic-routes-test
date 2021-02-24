const API_BASE_URL = 'http://localhost:3001/api';

const apiUrl = (service: string) => `${API_BASE_URL}/${service}`;

export { apiUrl };
