export interface BlogAnimeId {
  title: string;
  synopsis: string;
  type: string;
  episodes: number;
  score: number;
  year: number;
  images: {
    jpg: {
      image_url: string;
    };
  };
}