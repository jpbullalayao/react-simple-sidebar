# react-simple-sidebar

react-simple-sidebar provides a simple but customizable Sidebar component that enables you to quickly implement a sidebar for your page navigation so that you can focus on building the rest of your React application

## Usage

```jsx
import { Sidebar } from "react-simple-sidebar";

export const Page = () => {
  return (
    <>
      <Sidebar>
        <ul>
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Blog</a></li>
        <ul>
      </Sidebar>
    </>
  );
}
```

### API

| Prop | Type | Description | Default
| --- | --- | --- | ---
| MenuIcon | `ReactNode` | Clickable icon to open the sidebar | `<Menu />`
| onOpen | `() => void` | Callback function to be called when opening the sidebar | 
| onClose | `() => void` | Callback function to be called when closing the sidebar | 
| className | `string` | Additional className to apply to Sidebar content container |
| children | `ReactNode` | Children component to render inside Sidebar | 

## Dependencies

react-simple-sidebar is a simple implementation of the shadcn Sheet component, and thus is built with TailwindCSS. Customization and usage 