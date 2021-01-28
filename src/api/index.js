import { SERVER_URL } from "../utils";

export const getCharacters = async (page, params) => {
  const searchParams = new URLSearchParams(params);
  const response = await fetch(`${SERVER_URL}/character/?${searchParams?.toString()}`);
  return response.json();
}

export const getCharacterById = async id => {
  const response = await fetch(`${SERVER_URL}/character/${id}`);
  return response.json();
}