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
  email: string;
  first_name: string;
  last_name: string;
  user_id: int;
}

interface Profile {
  first_name: string;
  last_name: string;
  token: string;
  email: string;
  user: number;
}