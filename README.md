# Steinn labs Exercise

A **React-based** playground for experimenting with **Flexbox layouts**, styled using **Tailwind CSS**.

## 🚀 Features
- **Interactive Flexbox Playground** 📏
- **Real-time Preview** 🔄
- **Tailwind CSS for Styling** 🎨
- **React-powered UI** ⚛️
- **API Fetching Practice Done** 🌐
- **Built Reusable Components** 🛠️
  - `Button`
  - `Card`
  - `Modal`
  - `Typography`
  - `Loading page`
  - `Chip`
  - `Dropdown`
  - `Text field`


## 🚀 Running the App

To start the development server:
```bash
npm run dev
```

Then open **http://localhost:5173** in your browser.

## 🏗️ Project Structure
```
flex-playground/
│── src/
│   ├── components/
│   │   ├── FlexContainer.jsx
│   │   ├── Listing.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Dialog.jsx....
│   ├── App.jsx
│   ├── main.jsx
│── public/
│── index.html
│── tailwind.config.js
│── postcss.config.js
│── package.json
│── README.md
```
# Model UI
![image](https://github.com/user-attachments/assets/4421017b-dcbd-4c4c-b20d-5e5e40243ecc)

## 🎨 Using Tailwind CSS
Tailwind classes are used to design the Flexbox components. Example:
```jsx
<div className="flex justify-center items-center h-screen">
  <div className="flex gap-4 p-6 bg-gray-100">
    <div className="w-20 h-20 bg-blue-500 flex items-center justify-center">1</div>
    <div className="w-20 h-20 bg-green-500 flex items-center justify-center">2</div>
    <div className="w-20 h-20 bg-red-500 flex items-center justify-center">3</div>
  </div>
</div>
```

## 📜 License
This project is **open-source** and available under the **MIT License**.

---
Made with ❤️ using **React & Tailwind CSS**
