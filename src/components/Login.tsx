import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { firebaseAuth, usersRef } from "../utils/FirebaseConfig";
import { addDoc, getDocs, query, where } from "firebase/firestore";
import { useAppDispatch } from "../app/hooks";
import { setUser } from "../app/slices/AppSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const handleClick = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { email, uid },
    } = await signInWithPopup(firebaseAuth, provider);
    console.log({ email, uid });
    if (email) {
      const firebaseQuery = query(usersRef, where("uid", "==", uid));
      const fetchedUser = await getDocs(firebaseQuery);
      console.log({ fetchedUser });
      if (fetchedUser.docs.length == 0) {
        await addDoc(usersRef, { uid, email });
      }
      dispatch(setUser({ email }));
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full text-white">
      <div className="flex items-center p-4 transition-all duration-300 border-2 border-white cursor-pointer gap-x-2 hover:border-4 hover:rounded-2xl ">
        <FcGoogle className="text-2xl" />
        <span
          onClick={handleClick}
          className="font-semibold tracking-wider uppercase "
        >
          Login with google
        </span>
      </div>
    </div>
  );
};

export default Login;
