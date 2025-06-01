// import React,{lazy,Suspense} from "react";
// import ReactDOM from "react-dom/client";
// import Header from "./components/Header";
// import Body from "./components/Body";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/about";
// import Contact from "./components/Contact";
// import Error from "./components/error";
// import ResMenu from "./components/ResMenu";
// // import Grocery from "./components/Grocery"
// import { Provider } from "react-redux";
// import Appstore from "./utils/appstore";
// import Cart from "./components/Cart";
// import SignIn from "./components/Login";


// const Grocery= lazy(()=> import("./components/Grocery"))

// const Applayout = () => {
//   return (
//     <Provider store={Appstore}>
//     <div className="app">
//       <Header />
//       <Outlet />
//     </div>
//     </Provider>
//   );
// };

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Applayout />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: "/",
//         element: <Body />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//         {
//         path: "/grocery",
//         element: <Suspense fallback={<h1>LOading....</h1>}><Grocery /></Suspense>,
//       },
//       {
//         path: "restaurants/:resId",
//         element: <ResMenu />,
//       },
//       {
//         path:"/cart",
//         element:<Cart/>
//       },
//       {
//         path: "/login",
//         element: <SignIn />,
//       },
//     ],
//      errorElement: <Error />,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(<Applayout/>)
// root.render(
//   <Provider store={Appstore}>
//     <RouterProvider router={appRouter} />
//   </Provider>
// );


import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/Contact";
import Error from "./components/error";
import ResMenu from "./components/ResMenu";
import { Provider } from "react-redux";
import Appstore from "./utils/appstore";
import Cart from "./components/Cart";
import SignIn from "./components/Login";

const Grocery = lazy(() => import("./components/Grocery"));

// App layout without Provider
const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

// Define routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "restaurants/:resId",
        element: <ResMenu />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "login",
        element: <SignIn />,
      },
    ],
  },
]);

// ✅ Wrap the RouterProvider in Provider at the top level
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Appstore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
