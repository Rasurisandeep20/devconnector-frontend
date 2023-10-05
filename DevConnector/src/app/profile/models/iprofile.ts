export interface IProfile {
    professionalStatus: string;
    company: string;
    location: string;
    websiteUrl: string;
    skills: string[];
    githubUserName: string;
    socialNetwork: {
      twitterUrl: string;
      facebookUrl: string;
      youtubeUrl: string;
      linkedinUrl: string;
      instagramUrl: string;
    };
    bio: string;
    userId: number;
  }
