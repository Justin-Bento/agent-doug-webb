# AgentDoug Webb

This repository contains the code for a real-estate website I built for a client who wanted to create a central hub for his real estate business. The website serves as a resource for his clients to learn about the real estate transaction process, explore properties he's selling, and read client testimonials that establish his credibility and trustworthiness. 

## Features

- **Real Estate Transaction Process**: A step-by-step guide for clients to understand how the buying/selling process works.
  - Included Deciding To Buy
  - Included Deciding To Sell
  - Transffered More Stuff 
  - Included Additional Information - for any future documents. 
- **Property Listings**: A dynamic section showcasing properties for sale with relevant details and images. 
- **Client Testimonials**: Highlighting positive feedback from previous clients to demonstrate credibility.
- **Responsive Design**: Mobile-friendly design to ensure accessibility on all devices.
- **Contact Form**: An easy way for potential clients to reach out and inquire about properties or services.
- Light / Dark Mode with 

## Technologies  

- HTML
- CSS, 
- JavaScript,
- typescript
- prettier
- eslint
- React.js / Next.js
  - radix-ui/react-labelt 
  - formspree/react
  - shadcn/ui
  - react-icons
  - next/sanity
- TailwindCSS
- Google Analytics
- Sanity CMS

## Run Locally  
  
Clone the project  
  
```bash  
git clone git@github.com:Justin-Bento/agent-doug-webb.git
```  
  
Go to the project directory  
  
```bash  
cd /path/to/project/agent-doug-webb  
```  
  
Install dependencies  
  
```bash  
npm install  
```  
  
Start the server  
  
```bash  
npm run dev  
```

## Environment Variables  
  
To run this project, you will need to add the following environment variables to your .env.local file

- ``NEXT_PUBLIC_PROJECT_ID`` - find inside sanity/manage.
- ``NEXT_PUBLIC_DATASET`` - should be the default or your custom dataset.
