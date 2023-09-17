const OpenAI = require("openai");

export const createGPTResponse = async (conversation, newPrompt) => {
	const openai = new OpenAI({
		apiKey: process.env.REACT_APP_OPENAI_API_KEY,
		dangerouslyAllowBrowser: true,
	});

	conversation.push({ role: "user", content: newPrompt });

	const completion = await openai.chat.completions.create({
		model: "gpt-3.5-turbo",
		messages: conversation,
	});

	const gptResponse = completion.choices[0].message.content;
	const updatedConversation = [
		...conversation,
		{ role: "assistant", content: gptResponse },
	];

	return { conversation: updatedConversation, response: gptResponse };
};
