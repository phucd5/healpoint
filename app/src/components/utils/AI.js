const { Configuration, OpenAIApi } = require("openai");

export const createGPTResponse = async (conversation, apiKey, newPrompt) => {
	const openAi = new OpenAIApi(
		new Configuration({
			apiKey: apiKey,
		})
	);

	conversation.push({ role: "user", content: newPrompt });

	const completion = await openAi.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: conversation,
	});

	const gptResponse = completion.data.choices[0].message.content;
	const updatedConversation = [
		...conversation,
		{ role: "assistant", content: gptResponse },
	];

	return { conversation: updatedConversation, response: gptResponse };
};
