import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";

import "./App.css";

import Home from "./pages/home-page/home.component";
import Shop from "./pages/shop-page/shop.component";
import AboutPage from "./pages/about-page/about-page.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
import CheckOutPage from "./pages/checkout-page/checkout-page.component";

import { listenToAuthChanges } from "./firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import BlogPage from "./pages/blog-page/blog-page.component";
import ContactPage from "./pages/contact-page/contact-page.component";
import BlogDetailsPage from "./pages/blog-page/blog-details-page.component";
import WithSpinner from "./components/with-spinner/with-spinner.component";
import PaymentSuccess from "./pages/success-page/payment-success.component";
function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const unsubscribe = listenToAuthChanges(dispatch);

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  const HomePageWithSpinner = WithSpinner(Home);
  const ShopPageWithSpinner = WithSpinner(Shop);
  const AboutPageWithSpinner = WithSpinner(AboutPage);
  const SignInAndSignUpPageWithSpinner = WithSpinner(SignInAndSignUp);
  const CheckOutPageWithSpinner = WithSpinner(CheckOutPage);
  const BlogPageWithSpinner = WithSpinner(BlogPage);
  const BlogDetailsPageWithSpinner = WithSpinner(BlogDetailsPage);
  const ContactPageWithSpinner = WithSpinner(ContactPage);

  return (
    <>
      <Routes>
        <Route index element={<HomePageWithSpinner />} />
        <Route path="/" element={<HomePageWithSpinner />} />
        <Route path="/shop" element={<ShopPageWithSpinner />} />
        <Route path="/about" element={<AboutPageWithSpinner />} />
        <Route
          path="/signin"
          element={
            currentUser ? (
              <Navigate to="/" />
            ) : (
              <SignInAndSignUpPageWithSpinner />
            )
          }
        />
        <Route path="/checkout" element={<CheckOutPageWithSpinner />} />
        <Route path="/blog" element={<BlogPageWithSpinner />} />
        <Route path="/blog/:blogId" element={<BlogDetailsPageWithSpinner />} />
        <Route path="/contact" element={<ContactPageWithSpinner />} />
        <Route path="/success" element={<PaymentSuccess />} />
      </Routes>
    </>
  );
}

export default App;
