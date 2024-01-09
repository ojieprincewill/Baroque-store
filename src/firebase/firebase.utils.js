import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  addDoc,
  collection,
} from "firebase/firestore";
import { setCartItems, resetCart } from "../features/cart/cartSlice";
import {
  setWishItems,
  resetWishList,
} from "../features/wishlist/wishListSlice";
import {
  setCurrentUser,
  updateShippingAddress,
} from "../features/user/userSlice";

const firebaseConfig = {
  apiKey: "AIzaSyDj_DFHHnUjaEXykFvRQjYX2HA8w737s88",
  authDomain: "baroque-db.firebaseapp.com",
  projectId: "baroque-db",
  storageBucket: "baroque-db.appspot.com",
  messagingSenderId: "645542931352",
  appId: "1:645542931352:web:d95f1551b55d70fb17d9ed",
  measurementId: "G-NYMLJG47F5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const firestore = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, `users/${userAuth.uid}`);

  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    const docData = {
      displayName,
      email,
      createdAt,
      cart: [],
      wishList: [],
      ...additionalData,
    };

    try {
      await setDoc(userRef, docData);
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const listenToAuthChanges = (dispatch) => {
  return onAuthStateChanged(auth, async (userAuth) => {
    console.log("user auth", userAuth);
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      const snapShot = await getDoc(userRef);
      const cartItems = snapShot.data()?.cart || [];
      const wishListItems = snapShot.data()?.wishList || [];
      const address = snapShot.data()?.shippingAddress || {};

      dispatch(setCartItems(cartItems));
      dispatch(setWishItems(wishListItems));
      dispatch(updateShippingAddress(address));
    } else {
      dispatch(resetCart());
      dispatch(resetWishList());
    }

    dispatch(setCurrentUser(userAuth));
  });
};

export const placeOrder = async (orderDetails) => {
  try {
    const { userId, products, total } = orderDetails;

    const orderRef = await addDoc(collection(firestore, "orders"), {
      userId,
      orderNumber: `${userId}-${Date.now()}`,
      orderDate: new Date().toISOString(),
      products,
      total,
      status: "Pending",
    });

    return orderRef.id;
  } catch (error) {
    console.error("Error placing order:", error.message);
    throw error;
  }
};
