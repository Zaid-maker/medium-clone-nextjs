import { createContext, useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { db, auth, provider } from "../firebase";
import { collection, getDoc, setDoc, doc } from "firebase/firestore";

export const MediumContext = createContext();

export const MediumProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  const saveUser = async (user) => {
    await setDoc(doc(db, "users", user.email), {
      email: user.email,
      name: user.displayName,
      imageUrl: user.photoURL,
      followerCount: 0,
    });
  };

  const handleUserAuth = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;

        setUser(user);
        saveUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <MediumContext.Provider
      value={{ user, allPosts, allUsers, handleUserAuth }}
    >
      {children}
    </MediumContext.Provider>
  );
};
