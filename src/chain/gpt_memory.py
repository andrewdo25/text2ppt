from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
from langchain.chains import LLMChain
from langchain.memory import ConversationBufferMemory
from langchain.prompts import PromptTemplate
from langchain.chat_models import (
    ChatOpenAI,
)  # Updated to use `ChatOpenAI` for OpenAI models
from langchain_community.chat_message_histories import RedisChatMessageHistory


gpt_template = """
You are a chatbot having a conversation with a human.
{chat_history}
Human: {human_input}
Chatbot:
"""


class GptChain:
    template: str = gpt_template
    openai_api_key: str = None
    session_id: str = None
    redis_url: str = None
    chain: LLMChain = None  # Updated to match the `chain` naming convention
    message_history: RedisChatMessageHistory = None

    def __init__(self, openai_api_key, session_id, redis_url, openai_base_url):
        self.openai_api_key = openai_api_key
        self.session_id = session_id
        self.redis_url = redis_url
        self.openai_base_url = openai_base_url
        self.create_chain()  # Updated method name to `create_chain`

    def create_chain(self):
        # Set up Redis-based message history
        message_history = RedisChatMessageHistory(
            url=self.redis_url, ttl=600, session_id=self.session_id
        )
        self.message_history = message_history

        # Create memory for chat history
        memory = ConversationBufferMemory(
            memory_key="chat_history", chat_memory=message_history
        )

        # Define the prompt template
        prompt = PromptTemplate(
            input_variables=["chat_history", "human_input"], template=self.template
        )

        # Create the LLM instance
        llm = ChatOpenAI(
            model="gpt-4",  # Updated to use the `model` parameter
            openai_api_key=self.openai_api_key,
            streaming=True,
            callbacks=[StreamingStdOutCallbackHandler()],
        )

        # Build the chain
        self.chain = LLMChain(
            llm=llm,
            prompt=prompt,
            verbose=True,
            memory=memory,
        )

    def predict(self, question: str) -> str:
        """Use the chain to predict the chatbot's response."""
        return self.chain.run(human_input=question)

    def clear_redis(self):
        """Clear the Redis message history."""
        self.message_history.clear()
