interface Card {
  ID: number;
  title: string;
  description: string;
  image: string;
}

interface FormData {
  first_name: string;
  last_Name: string;
  email: string;
  password: string;
}

interface Recipe {
  ID: number;
  title: string;
  description: string;
  instructions: string;
  ingredients: string;
  image: string;
  user_id: int;
}

interface Profile {
  Name: string;
  lastName: string;
  token: string;
  email: string;
  user: number;
}