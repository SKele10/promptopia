import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    // Connect to the database
    await connectToDB();

    // Extract the searchText parameter from the URL params
    const searchText = params.searchText;

    // Fetch prompts and populate the 'creator' field
    const prompts = await Prompt.find({}).populate("creator");

    // Define a filter to search for prompts based on Prompt.prompt, Prompt.tag, or Prompt.creator.username
    const filteredPrompts = prompts.filter((prompt) => {
      return (
        prompt.tag.includes(searchText) ||
        prompt.creator.username.includes(searchText)
      );
    });

    // Return the filtered prompts as a JSON response
    return new Response(JSON.stringify(filteredPrompts), { status: 200 });
  } catch (error) {
    console.error("Error:", error); // Log the error for debugging purposes

    // Return an error response
    return new Response("Failed to fetch prompts", { status: 500 });
  }
};
