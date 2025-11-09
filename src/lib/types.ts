export type Event = {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  city: string;
  price: number | 'Gratis';
  description: string;
  organizer: string;
  images: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
};
