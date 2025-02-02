export type Job = {
  id: number;
  title: string;
  company: string;
  location: {
    address: string;
    city: string;
    postalCode: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
};
