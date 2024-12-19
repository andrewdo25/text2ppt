PREDICT_TITLE = """I hope you help me generate 3 attention-grabbing PPT titles based on the topic ```{query}```."""

PREDICT_TITLE_V2 = """I hope you act as a ```{role}``` and generate {topic_num} attention-grabbing ```{form}``` PPT titles based on the theme ```{title}```. \  
Here are some requirements for the response:  
1. [The response should be a list of {topic_num} items separated by "\\n" (e.g., Banana\\nWeather\\nDescription)]  
"""

PREDICT_OUTLINE = """The title I have chosen is the ```{query}```th title. I hope you use markdown format to generate an outline with only titles, and please follow these requirements:
1. If creating a title, add a hash (#) before the word or phrase. The number of hashes represents the heading level.
2. Do not use unordered or ordered lists; the structure of the outline must be represented entirely using hashes (#).
3. The first level (#) represents the outline's title, the second level (##) represents chapter titles, and the third level (###) represents key points of the chapters.
4. The first chapter should be an introduction to ```{query}```, and the last chapter should be a conclusion.
5. Don not need the ```markdown``` code block.
"""

PREDICT_OUTLINE_V2 = """I hope you use markdown format to generate an outline based on ```{title}``` with only titles, and please follow these requirements:
1. If creating a title, add a hash (#) before the word or phrase. The number of hashes represents the heading level.
2. Do not use unordered or ordered lists; the structure of the outline must be represented entirely using hashes (#).
3. The first level (#) represents the outline's title, the second level (##) represents chapter titles, and the third level (###) represents key points of the chapters.
4. For the outline, follow this requirement: ```{title_requirement}```.
5. The first chapter should be an introduction to ```{title}```, and the last chapter should be a conclusion.
6. Don not need the ```markdown``` code block.
"""

PREDICT_BODY = """Please fill in the markdown text based on the outline. I hope you return it in markdown format as well, and please follow these requirements:
1. Do not lose the original outline markdown information.
2. You need to expand on each title by adding one or more paragraphs, and each paragraph must be enclosed in <p></p> tags.
3. For the body text, follow this requirement: {requirement}.
4. You need to place the generated paragraphs in the correct positions.
5. Don not need the ```markdown``` code block.
"""

PREDICT_BODY_FIXED_OUTLINE = """I have made the following modifications to the outline, and here is the updated outline:  
```{fix_outline}```  
Please generate the body text for the PPT based on the outline. I hope you return it in markdown format as well, and please follow these requirements:  
1. Do not lose the original outline markdown information and formatting.  
2. You need to add one or more paragraphs based on each title's information and context, placing them on the next line after the title. Each paragraph must be enclosed in <p></p> tags.  
3. For the body text, follow this requirement: {requirement}.  
4. You need to place the generated paragraphs in the correct positions.
5. Don not need the ```markdown``` code block.
"""
