import axios from "axios";

export const searchFood = async (query, page = 0, maxResults = 10) => {
  try {
    const response = await axios.post("http://localhost:5000/api/search", {
      query,
      page,
      maxResults,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching food data:", error.message);
    throw new Error("Failed to fetch food data");
  }
};
