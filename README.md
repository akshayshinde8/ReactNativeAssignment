# 📱 TAPGO – React Native App

A modern **React Native** application built to demonstrate core concepts like authentication, API integration, navigation, and state management.  
This project is structured and styled with clean and modular code.

---

## 🚀 Features

- **Login Screen**
  - Email & Password inputs
  - Password masking
  - Login button with alert showing entered values

- **Posts List (API Integration)**
  - Fetches posts from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts)
  - Displays posts in a **FlatList** with title and body
  - Pull-to-refresh support
  - Scroll-to-top floating button
  - Footer with `"— End of List —"`
  - Empty state when no posts are available

- **Post Details**
  - Navigation to details screen
  - Displays full post content with modern UI

- **Counter App**
  - Simple counter using `useState`
  - Increment & Decrement buttons
  - Value never goes below zero

- **Navigation**
  - Implemented using **React Navigation**
  - Stack & Tab navigators for smooth screen transitions

---

## 📂 Project Structure

📦 src/  
├── 📂 navigators/ — App navigation setup  
│   ├── 📄 MyStack.jsx  
│   ├── 📄 MyTabs.jsx  
│   └── 📄 RootNavigator.jsx  
│  
├── 📂 screens/ — App screens  
│   ├── 📄 Counter.jsx  
│   ├── 📄 Details.jsx  
│   ├── 📄 Home.jsx  
│   └── 📄 Login.jsx  
│  
└── 📄 App.jsx — Entry component

---

## 🛠️ Tech Stack

- **React Native** – UI & mobile development
- **React Navigation** – Stack & Tabs navigation
- **Hooks** – `useState`, `useEffect`, `useRef`
- **Vector Icons** – For modern, user-friendly UI
- **Flexbox + StyleSheet** – Layout and styling

---

## ⚡ Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/tapgo.git
cd tapgo

2️⃣ Install Dependencies
npm install
# or
yarn install

3️⃣ Run the App

For iOS:

npx react-native run-ios

For Android:

npx react-native run-android

👨‍💻 Author

Akshay Shinde
📧 akshayshinde01232@gmail.com
💼 https://www.linkedin.com/in/akshayshinde2/
