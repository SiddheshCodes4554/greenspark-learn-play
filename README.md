GreenSpark – AI-Powered Virtual Energy Lab for Kids

GreenSpark is an interactive, web-based educational platform designed for children aged 7–14 to learn about renewable energy and sustainability through gamified simulations, storytelling, and an AI companion named Sparky. The platform is 100% software-based, accessible globally, and supports multiple languages to promote inclusive learning. With vibrant visuals, engaging animations, and a focus on clean energy concepts (solar, wind, hydro), GreenSpark aims to inspire curiosity and environmental stewardship in young learners.

Table of Contents





Project Overview



Features



Technical Architecture



Installation



Usage



Multi-Language Support



Contributing



License



Contact

Project Overview

GreenSpark is a playful, AI-driven virtual lab that teaches kids about renewable energy through hands-on simulations, missions, and quizzes. Guided by Sparky, an AI chatbot, children explore concepts like solar panels, wind turbines, and energy storage in a safe, gamified environment. The platform aligns with Sustainable Development Goals (SDGs) such as Clean Energy, Climate Action, and Quality Education, making it ideal for classrooms, remote learning, or home use.

Key Objectives





Educational: Teach renewable energy concepts in an age-appropriate, engaging way.



Interactive: Provide drag-and-drop simulations and gamified missions.



Accessible: Support multiple languages and responsive design for all devices.



Scalable: No hardware dependency, hosted on cloud platforms for global reach.

Features





Landing Page: Welcoming interface with animated hero section, call-to-action buttons, and a rotating carousel of renewable energy themes.



Sparky AI Chat Companion:





Voice and text-based interaction using the Gemini API and Web Speech API.



Answers questions like “How does a windmill make power?” with age-appropriate responses and emojis.



Renewable Energy Lab: Drag-and-drop canvas for building and testing energy systems (solar, wind, hydro) with real-time feedback and animations.



AI Lesson Flow: Interactive storytelling lessons with progress tracking and embedded quizzes.



Mission & Challenge Hub: Gamified missions (e.g., “Power an eco-village”) with XP points and badges.



Eco Dashboard: Visualizes progress with metrics like “Trees Saved” and an animated pie chart of energy usage.



Mini Quiz Page: Image-based multiple-choice quizzes with immediate feedback and rewards.



User Profile & Settings: Customizable avatars, badge gallery, and settings for sound, theme, and language.



Responsive Design: Mobile-first, optimized for desktop, tablet, and mobile devices.

Technical Architecture

GreenSpark is built with a modern, scalable tech stack to ensure performance, accessibility, and maintainability.

Client Layer





Devices: Desktop (1440px), Tablet (768px), Mobile (414px)



Access: Browser-based via HTTPS

Frontend Layer





Framework: React.js with Tailwind CSS and DaisyUI/ShadCN for styling



Simulations: HTML5 Canvas or Three.js for drag-and-drop energy lab



Animations: Framer Motion or Lottie for microinteractions



Chat UI: Styled-components for SparkyBotWidget



Multi-Language: i18next for dynamic translations, RTL support for languages like Arabic

Backend Layer





Server: Node.js with Express for API endpoints (/missions, /progress, /chat)



Real-Time Sync: WebSocket for live updates



AI Integration: Gemini API for natural language processing and personalized responses



Session Management: Optional JWT for future authentication

Database Layer





Platform: Firebase for real-time data storage



Collections:





Users: Avatars, XP, settings



Missions: Cards, XP values, status



Badges: Earned badges, metadata



Progress: Stats, activity feed



Lessons: Stories, quizzes

AI Services Layer





NLP Engine: Gemini API for question answering and adaptive responses



Multilingual Support: Handles languages like English, Spanish, Arabic, Chinese, Hindi

Speech Services Layer





Speech-to-Text: Web Speech API for multilingual input



Text-to-Speech: ResponsiveVoice.js or Google TTS for language-specific output

Hosting Layer





Platform: Vercel or Netlify for static hosting and serverless functions



CDN: Fast asset delivery



Real-Time Updates: Serverless functions for dynamic content

Installation

To set up GreenSpark locally for development:

Prerequisites





Node.js (v16 or higher)



npm or yarn



Firebase account for database setup



Gemini API key for AI integration



Vercel/Netlify account for deployment (optional)

Steps





Clone the Repository:

git clone https://github.com/your-repo/greenspark.git
cd greenspark



Install Dependencies:

npm install



Set Up Environment Variables: Create a .env file in the root directory:

REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_GEMINI_API_KEY=your_gemini_api_key
REACT_APP_VERCEL_TOKEN=your_vercel_token (optional)



Run the Development Server:

npm start

The app will be available at http://localhost:3000.



