# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# FakeStore React CRUD App

This project is a React application demonstrating a basic CRUD (Create, Read, Update, Delete) interface for a fake online store, using [FakeStoreAPI](https://fakestoreapi.com/) as a mock backend. The app is styled with React Bootstrap and is fully responsive.

## Features

- **Home Page**: Introduction and navigation to the product catalog.
- **Product Listing**: Fetches and displays a grid of products from FakeStoreAPI.
- **Product Details**: View detailed info, edit, or delete a product.
- **Add Product**: Form to add a new product (POST request).
- **Edit Product**: Update an existing product (PUT request).
- **Delete Product**: Remove a product (DELETE request, with confirmation).
- **Navigation Bar**: Persistent, responsive navigation.
- **Error Handling**: Displays loading indicators and clear error messages for API issues.
- **Responsive Design**: Works well on desktop and mobile.

## ⚠️ Important Notice About FakeStoreAPI

> **Note:** This app uses [FakeStoreAPI](https://fakestoreapi.com/) for demonstration and testing purposes.  
> **Any changes you make (Add, Edit, Delete) will appear successful, but the data will reset on page refresh or future visits.**  
> This is expected behavior for this mock API.

## Folder Structure

```
src/
├── components/
│   ├── AddProduct.jsx
│   ├── EditProduct.jsx
│   ├── FakeStoreApiNotice.jsx
│   ├── HomePage.jsx
│   ├── NavBar.jsx
│   ├── ProductDetails.jsx
│   ├── ProductListing.jsx
├── App.jsx
├── index.jsx
├── app.css
├── index.css
```

## Documentation Used

- [React Bootstrap Documentation](https://react-bootstrap.netlify.app/docs/getting-started/introduction/)
- [FakeStoreAPI Documentation](https://fakestoreapi.com/docs#tag/Products-FakeStoreAPI)
- Video walkthroughs by Jeremy Alkire and Steven Ceglarek

## Learnings

- **Version Control:** I used Git and GitHub extensively for version control throughout this project. This allowed me to revert to previous versions when I encountered issues I couldn’t easily fix. I learned the importance of writing clear and descriptive commit messages, and I plan to improve the clarity of my commits in future projects.

- **Command Line Skills:** I practiced Bash commands, such as `touch src/components/{home,navbar,project}.jsx && code src/components` etc, to efficiently create multiple files and organize my folder structure.

- **React Bootstrap:** I applied my knowledge of React Bootstrap to style the project and its components, resulting in a responsive and visually appealing user interface.

- **React Development:** I deepened my understanding of React concepts, including component structure, state management, hooks, and routing.

- **AI Assistance:** I utilized GitHub Copilot’s autocomplete and chat features for debugging and recommendations, which helped streamline development and solve coding challenges more efficiently.
