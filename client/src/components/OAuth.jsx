import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";
import { app } from "../firebase";
import {useDispatch} from "react-redux";
import {signInSuccess} from "../redux/user/userSlice"

const OAuth = () => {
    const dispatch=useDispatch();
    const handleGoogleClick=async()=>{
        try {
            const provider=new GoogleAuthProvider();
            const auth=getAuth(app);
            const result=await signInWithPopup(auth,provider);
            const res=await fetch("/api/auth/google",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    name:result.user.displayName,
                    email:result.user.email,
                    photo:result.user.photoURL,
                })
            })
            const data=await res.json();
            dispatch(signInSuccess(data));
        } catch (error) {
            console.log("Couldn't login with google",error)
        }
    }

  return (
    <button type="button" className="bg-red-700 rounded-lg text-white p-3 uppercase" onClick={handleGoogleClick}>
      Continue with google
    </button>
  );
};

export default OAuth;
