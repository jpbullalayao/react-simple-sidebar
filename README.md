# react-simple-sidebar

react-simple-sidebar provides a simple but customizable Sidebar component that enables you to quickly implement a sidebar so that you can focus on building the rest of your React application.

## Usage

This project aims to be minimalistic in its API implementation & as-unopinionated-as-possible with styles so that you can customize the sidebar to meet your needs.

By default, the `<Sidebar>` component already renders a clickable menu icon to toggle the sidebar, and manages the visibility state. Thus, `children` is the primary prop that will need to be configured to render what content you would like inside the sidebar. However, the current API allows you to provide custom functionality & styles. The API is outlined below.

```jsx
import { Sidebar } from "react-simple-sidebar";

export const Page = () => {
  return (
    <>
      <Sidebar>
        <div>Main</div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>

        <hr />

        <ul>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">Sign Up</a></li>
        </ul>
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

react-simple-sidebar is a simple implementation of the shadcn [Sheet](https://ui.shadcn.com/docs/components/sheet) component, and thus is built with [TailwindCSS](https://tailwindcss.com/). Customization and usage of the sidebar assumes that your application is also built with Tailwind.

## Need Help?

Please submit any issues to the project [here](https://github.com/jpbullalayao/react-simple-sidebar/issues), and/or tweet me [@professorragna](https://twitter.com/professorragna).
