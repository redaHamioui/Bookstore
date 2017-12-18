export interface Book {
  _id?: {
    $oid: string;
  };
  isbn10?: string;
  title: string;
  author: string;
  price: number;
  pages?: number;
  rating?: number;
  votes?: number;
  image?: string;
  description?: string;
}

