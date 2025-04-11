const { ChatGroq } = require("@langchain/groq");
const { HumanMessage}  = require("@langchain/core/messages");
const { GROQ_API_KEY } = process.env;
const helper = {};

helper.Get = async (query) => {
  try {
    if (!GROQ_API_KEY) {
      console.error("Error: Missing GROQ API key. Please set GROQ_API_KEY in your .env file.");
      throw new error("Error: Missing GROQ API key. Please set GROQ_API_KEY in your .env file.");
    }
    // Initialize the ChatGroq model
    const model = new ChatGroq({
      apiKey: process.env.GROQ_API_KEY, // Default value.
      model: "llama-3.3-70b-versatile",
    });
    // Send a query to the model
    const message = new HumanMessage(query); //"What is the capital of country India?"
    const response = await model.invoke([message]);
    // console.log(response); // Expected output: "New Delhi"
    let responseData = { data: response.content};
    return responseData;
  } catch (error) {
    console.error(`Data fetched failed, query: ${query}, error: ${error}`);
    let responseData = errorHandling(error);
    throw responseData;
  }
}

const errorHandling = (error) =>{
  const errorMessages = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    408: "Request Timeout",
    409: "Conflict",
    422: "Unprocessable Entity",
    429: "Too Many Requests",
    500: "Internal Server Error",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
  };
  let status = error?.response?.status || error?.status || 500;
  let message = errorMessages[status] || error.response?.data?.message || error.response?.data?.error_description || error.message;
  let stack = error.stack;
  var responseData = { status : status, message : message, stack: stack};
  return responseData;
}

module.exports = helper;