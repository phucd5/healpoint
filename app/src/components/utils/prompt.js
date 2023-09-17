export const question_prompt = `Pretend to be a doctor. I'm going to give you body parts that hurt and provide me with EXACTLY 3 follow up questions  that you will ask in the form with answers in multiple choice format with exactly 4 choices A, B, C, D. Follow the JSON format below. Put the JSON in string and do not say anything else. Don't put it in code box.
	{
	  "questions": [
		{
		  "questionText": "",
		  "choices": [
			"A",
			"B.",
			"C."
		  ]
		},
	  ]
	}`;

export const diagonsis_prompt = `Based on these answers, give me 1-3 diagnosis (always giveme at least one) on what could be the problem and any remedy. 
Format it in a JSON like below.  Put the JSON in string and do not say anything else. Don't put it in code box.
	{
  "answer": [
    {
      "diagonsis": "",
      "remedy": ""
      ]
    },
  ]
}`;

export const language_prompt = `Translate "Diagonsis" and "Remedy" into the followign language I give into the JSON string. Don't say anything else after that. Don't put JSON in code block. Capitalize the first letter of the translated word.
{"diagnosis": 
 "remedy:"}`;
