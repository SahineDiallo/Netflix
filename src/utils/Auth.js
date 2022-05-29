import { auth } from "../firebase/firebase";

export const SignUp = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

export const SignIn = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};
