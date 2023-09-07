# Next.js Intro.

🌟|What is the difference between Framework vs Library?|

-   The biggest difference between FrameWork and Library for developer is that FrameWork uses developer's code when the developer puts thing in the right place, whereas Libraries are the code that Developers are using.

-   In a FrameWork like Next.js, FrameWork has certain rules to follow. : Developers should follow the rules- they are the guests.

-   In React.js which is a library, you can call the code whenever you want wherever you want.

🌟|Name of your file matters whereas the name of the component doesn't|

🌟|Client Side Rendering vs Server Side Rendering|

-   React.js is client rendering application which means that your browser will get the JavaScript and the client side's JavaScript will have build all the UI that users will see. In React.JS app, when the Browser gets the HTML, they will get an HTML(DOM) with an empty div. The UI will be built only when the JS code comes in.

-   Next.js, even if the user disabled the JavaScript, user will see the HTML. Your page will be pre-render by Next.js. So in Next.js app, when the user visits the page, they will see the HTML that is pre-rendered with initial state of the component on Next.js and then if any interaction happens, then the React component hooks in.

🌟|We shouldn't use anchor tag in Next.js as it may slow down the page load.|

-   instead, we use Link from 'next/link' But Link is only for the href so Link cannot have any style nor className

🌟|modules.css|

-   Next.js allows us to use module file and developers can use it simply.

🌟|styled.jsx|

-   Another way we can do the styling is to have style tag and give it a 'jsx' prop to it so we can add the styling inside the individual component.
```
ex>
 <style jsx>{`
    nav{
        background: lightblue;
    }
 `}</style>

 when you want to give a global style, then you can do this.

 <style jsx global>{`
 a{
        text-decoration:none;
     }  
`}</style>
```

🌟|_app.js| Custom App Component

-  style tag and global prop can apply global style but only the page-wide. If wanting to apply global style application wide, then we can create 'app component': _app.js

-  and your App component should look like this:
```
export default function App({ Component, pageProps }) {
    return <div></div>;
}
```

🌟|Layout.js| layout component

-   in most cases, we use layout.js and let it wrap over the app so anything inside has a certain layout without having your custom app component heavy.

```
export default function Layout({children}) {
    return (
        <>
        <Navbar/>
        <div>{children}</div>
        </>
    )
}
```

🌟|Head.js| 

-   Next.js comes with some tiny packages that allow us to implement common features. In React.js we would have to download something like React-helmet to manage the Head of our application, however, Next.js has everything inside its umbrella so we can use for free.

🌟|redirection & rewrites| in next.config file

-   by using rewrites in config file, we can hide some private/crucial data inside the application.

🌟|getServerSideProps()|

-   the code inside this function only happens in the backend(Server) It allows us to have server side rendering ONLY.