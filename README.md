
# Promptopia

Promptopia is a modern web application built with Next.js, leveraging Tailwind CSS for styling and a robust backend for managing prompts and responses. This project provides an intuitive and user-friendly interface for creating, managing, and sharing creative prompts.

## Features

- **Dynamic Prompt Management**: Create, edit, and delete prompts with ease.
- **User Authentication**: Secure login system to manage user data and preferences.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.
- **Tailwind CSS Integration**: Beautiful and customizable UI components.
- **Next.js Framework**: Server-side rendering and optimized performance.

## Technologies Used

- **Frontend**:
  - Next.js
  - React.js
  - Tailwind CSS
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
- **Other Tools**:
  - PostCSS
  - ESLint
  - Prettier
  - dotenv for environment variables

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/)

## Getting Started

Follow these steps to set up the project locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo/promptopia.git
   cd promptopia
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Variables**  
   Create a `.env` file in the root directory and add the following:
   ```env
   MONGO_URI=your_mongo_db_connection_string
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Scripts

Here are some useful scripts available in the project:

- **Start Development Server**: `npm run dev`
- **Build for Production**: `npm run build`
- **Start Production Server**: `npm start`
- **Lint Code**: `npm run lint`

## Project Structure

```
/
|-- app/               # Application pages and logic
|-- components/        # Reusable UI components
|-- models/            # Database models
|-- public/            # Static assets
|-- styles/            # Tailwind and custom styles
|-- utils/             # Utility functions
|-- server.js          # Backend server setup
|-- next.config.js     # Next.js configuration
|-- package.json       # Project metadata and dependencies
```

## Deployment

1. **Build the Project**:
   ```bash
   npm run build
   ```

2. **Start the Server**:
   ```bash
   npm start
   ```

3. **Deploy to a Hosting Platform**:
   - Vercel
   - Netlify
   - AWS EC2/Elastic Beanstalk

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push to your fork and create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.



---

Enjoy Promptopia and let your creativity flow!
