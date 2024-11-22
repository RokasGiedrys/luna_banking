<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BankSync Project</title>
</head>
<body>
  <h1>BankSync: Bank Account Integration & Management App</h1>
  <p>
    This project is a comprehensive bank account management application that I built while learning 
    <strong>Plaid</strong>, <strong>Appwrite</strong>, and <strong>Dwolla</strong>. 
    I followed the implementation from 
    <a href="https://github.com/adrianhajdin/banking">this repository</a> 
    step-by-step to build and understand the functionality.
  </p>

  <h2>🚀 Tech Stack</h2>
  <p>The application is built using the following technologies:</p>
  <ul>
    <li><strong>Next.js</strong>: For server-side rendering and fast, modern web development.</li>
    <li><strong>TypeScript</strong>: To ensure type safety and maintain clean, scalable code.</li>
    <li><strong>Appwrite</strong>: For secure backend services, including authentication and database management.</li>
    <li><strong>Plaid</strong>: To integrate and manage multiple bank accounts seamlessly.</li>
    <li><strong>Dwolla</strong>: For transferring funds between accounts.</li>
    <li><strong>React Hook Form</strong> & <strong>Zod</strong>: For intuitive and validated form handling.</li>
    <li><strong>TailwindCSS</strong>: For crafting a responsive and visually appealing UI.</li>
    <li><strong>Chart.js</strong>: For displaying financial data through interactive charts.</li>
    <li><strong>ShadCN</strong>: For extending the design system with reusable components.</li>
  </ul>

  <h2>🔋 Features</h2>
  <p>This project includes a robust set of features to enhance user experience:</p>
  <ul>
    <li><strong>👉 Authentication:</strong> An ultra-secure SSR-based authentication system with strong validations and authorization to keep user data safe.</li>
    <li><strong>👉 Connect Banks:</strong> Integrates with <strong>Plaid</strong> to link multiple bank accounts efficiently.</li>
    <li><strong>👉 Home Page:</strong> Displays an overview of the user's financial data:
      <ul>
        <li><strong>Total Balance:</strong> Aggregated from all connected banks.</li>
        <li><strong>Recent Transactions:</strong> Displays the latest transaction data.</li>
        <li><strong>Spending Insights:</strong> Categorized spending visualizations.</li>
      </ul>
    </li>
    <li><strong>👉 My Banks:</strong> Lists all connected bank accounts, including:
      <ul>
        <li><strong>Account Details:</strong> Such as bank names and account types.</li>
        <li><strong>Respective Balances:</strong> Up-to-date account balances.</li>
      </ul>
    </li>
    <li><strong>👉 Transaction History:</strong> Provides a detailed transaction history with:
      <ul>
        <li><strong>Pagination:</strong> For seamless navigation.</li>
        <li><strong>Filtering Options:</strong> To sort transactions based on various criteria.</li>
      </ul>
    </li>
    <li><strong>👉 Real-time Updates:</strong> Instantly reflects changes across all relevant pages when a new bank account is connected or transactions are updated.</li>
    <li><strong>👉 Funds Transfer:</strong> Enables secure fund transfers using <strong>Dwolla</strong>:
      <ul>
        <li><strong>Recipient Details:</strong> User inputs the required fields, including recipient bank ID.</li>
        <li><strong>Verification:</strong> Ensures the authenticity of the transfer.</li>
      </ul>
    </li>
    <li><strong>👉 Responsiveness:</strong> Delivers a consistent user experience across devices:
      <ul>
        <li>Fully optimized for desktop, tablet, and mobile screens.</li>
      </ul>
    </li>
  </ul>

  <h2>🛠️ Installation</h2>
  <p>Follow these steps to set up the project on your local machine:</p>
  <ol>
    <li>Clone the repository:
      <pre><code>git clone https://github.com/RokasGiedrys/luna_banking.git
cd luna_banking</code></pre>
    </li>
    <li>Install dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>Set up environment variables:
      <ul>
        <li>Create a <code>.env.local</code> file in the root directory.</li>
        <li>Add the required variables for <strong>Plaid</strong>, <strong>Appwrite</strong>, and <strong>Dwolla</strong>.</li>
      </ul>
    </li>
    <li>Start the development server:
      <pre><code>npm run dev</code></pre>
    </li>
    <li>Open the app in your browser:
      <pre><code>http://localhost:3000</code></pre>
    </li>
  </ol>

  <h2>📖 What I Learned</h2>
  <p>Through this project, I gained hands-on experience with:</p>
  <ul>
    <li>Integrating <strong>Plaid</strong> for bank account linking and transaction management.</li>
    <li>Using <strong>Appwrite</strong> to handle authentication and secure backend operations.</li>
    <li>Managing financial transfers with <strong>Dwolla</strong>.</li>
    <li>Building responsive UI with <strong>TailwindCSS</strong> and <strong>ShadCN</strong> components.</li>
    <li>Validating forms and handling user input with <strong>React Hook Form</strong> and <strong>Zod</strong>.</li>
    <li>Creating dynamic, real-time updates for a seamless user experience.</li>
  </ul>
  <p>
    This was an incredible opportunity to bring together multiple tools and frameworks into a cohesive and functional application.
  </p>

  <h2>📌 Acknowledgments</h2>
  <p>
    A huge thanks to the Andrians's repository for the guidance and inspiration for this project. 
    This step-by-step implementation taught me the power of combining different tools and frameworks to solve real-world problems.
  </p>
</body>
</html>
