import os
from dotenv import load_dotenv
from poml.integration.langchain import LangchainPomlTemplate
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.output_parsers import StrOutputParser

load_dotenv()
model = "gemini-2.5-flash-lite"
google_api_key = os.getenv("GOOGLE_API_KEY")
llm = ChatGoogleGenerativeAI(model=model, google_api_key=google_api_key)

def chatbot(user_input, file_path=""):
    prompt = LangchainPomlTemplate.from_file("prompt.poml")
    chain = prompt | llm | StrOutputParser()
    return chain.invoke({"question": user_input, "file_path":file_path})

if __name__ == "__main__":
    while True:
        user_input = input("You: ")
        if user_input.lower() in ["exit", "quit"]:
            print("Goodbye")
            break
        reponse = chatbot(user_input)
        print("Caramel AI: ", reponse)

