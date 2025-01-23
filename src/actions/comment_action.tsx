
import axios from "axios";

const BE_API_URL = process.env.NEXT_PUBLIC_BE_API_URL as string;

export async function getComment() {
  try {
    const response = await axios.get(`${BE_API_URL}comments`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const commentResponse = response.data;
    return commentResponse
  } catch (error) {
    console.error("Fetching comments failed:", error);
    throw new Error("Failed to fetch comments");
  }
}

export async function sendComment(boardId: string, text: string) {
  try {
    const response = await axios.post(`${BE_API_URL}comments`, {
      text: text,
      createdBy: "user"
    }, {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        boardId: boardId
      }
    })

    if (response.status !== 200) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const commentResponse = response.data;
    return commentResponse
  } catch (error) {
    console.error("Fetching comments failed:", error);
    throw new Error("Failed to fetch comments");
  }
}