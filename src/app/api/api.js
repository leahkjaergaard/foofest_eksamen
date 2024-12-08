const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export const fetchAPI = async (endpoint, options = {}) => {
  const url = `${baseURL}${endpoint}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

export async function getAllBands() {
  try {
    const data = await fetchAPI("/bands");
    return data;
  } catch (error) {
    console.error("Fejl ved hentning af bands:", error);
    return [];
  }
}
