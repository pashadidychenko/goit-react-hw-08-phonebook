// import React, { Suspense, lazy } from "react";
// // import ErrorMessage from "../AlertPage/ErrorMessage";
// // import LogOut from "../AlertPage/LogOut";
// import { Route, Switch, Redirect } from "react-router-dom";
// import Layout from "../Layout";
// import routes from "../../routes";

// const StartPage = lazy(() => import("./StartPage"));
// // const UserPage = lazy(() => import("./UserPage"));
// const LoginPage = lazy(() => import("../LoginPage/LoginPage"));
// const RegistrationPage = lazy(() =>
//   import("../RegistrationPage/RegistrationPage")
// );
// const ContactList = lazy(() => import("../Contacts/ContactList"));

// function HomePage() {
//   const onIn = null;
//   return (
//     <Layout>
//       <Suspense fallback={<p>loading...</p>}>
//         <Switch>
//           <Route path={routes.home} exact component={StartPage} />
//           <Route path={routes.login} component={LoginPage} />
//           <Route path={routes.register} component={RegistrationPage} />
//           <Route path={routes.contacts} component={ContactList} />
//           <Redirect to={routes.home} />
//           <ContactList />
//         </Switch>
//       </Suspense>
//     </Layout>
//   );
// }

// export default HomePage;

//     <ErrorMessage message={"Same error"} />
// <LogOut />
