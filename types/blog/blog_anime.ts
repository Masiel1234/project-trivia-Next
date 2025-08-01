export interface Anime {
  mal_id: number;
  title: string;
  synopsis: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  type: string;
  episodes: number;
  score: number;
}


