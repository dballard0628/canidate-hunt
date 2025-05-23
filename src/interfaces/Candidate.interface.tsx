export interface Candidate {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  name?: string;
  location?: string;
  email?: string;
  company?: string;
  bio?: string; // Add bio property
} // Create an interface for the Candidate objects returned by the API
