export const URL = "https://www.example.com/";

export default async function fetchSomething(path: string) {
  const response = await fetch(URL + path);
  const data = await response.json();
  return data;
}
