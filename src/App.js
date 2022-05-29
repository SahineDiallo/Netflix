import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes, { RedirectBack } from "./utils/ProtectedRoutes";
import { useSelector } from "react-redux";
import { auth } from "./firebase/firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/slices/userSlice";
import { useEffect } from "react";
import { selectUsername } from "./store/slices/userSlice";

function App() {
  const username = useSelector(selectUsername);
  const user = auth.currentUser;
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        if (!authUser.displayName) {
          try {
            authUser.updateProfile({
              displayName: username?.username,
            });
          } catch (error) {
            return alert(error.message);
          }
        }
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            username: authUser.displayName,
          })
        );
      } else {
        dispatch(logout);
        console.log("there is not user at  all");
      }
    });
    return unsubscribe;
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<ProtectedRoutes user={user} />}>
          <Route path="/" element={<Header />} />
        </Route>
        <Route element={<RedirectBack />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
