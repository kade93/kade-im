### kade.im Hosting
> kade.im is a portfolio website built using React-Notion-X and Next.js to showcase personal content and projects.

* Hosted on an AWS EC2 instance with a fully automated CI/CD pipeline managed through GitHub Actions.

### Features
1. Blog: Redirects to my Notion-based blog.
2. Project: Showcases my project portfolio (powered by Notion).
3. Chat: A conversational bot utilizing LLM APIs with Retrieval-Augmented Generation (RAG) to answer questions based on my documents.
4. Quest: A request form where you can submit tasks or ideas, which will be saved to my Google Spreadsheet.

* The Google App Script used for handling form submissions might occasionally experience delays and may require further optimization.
* LLM Chat service is unstable (free api from Gemini API)