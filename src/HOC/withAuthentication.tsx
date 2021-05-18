import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react";

const withAuthentication = (Component) => {
    return (props) => {
        const router = useRouter();
        const [token,setToken] = useState(null)
        const [isLoggedIn,setIsLoggedIn] = useState(false);
        useEffect(()=>{
            setToken(localStorage.getItem("token"))
            if(!isLoggedIn && token == null){
                router.push("/Login")
                localStorage.setItem("token",null);
            }
            if(token!=null){
                setIsLoggedIn(true);
            }
        },[isLoggedIn,token])
        return(
            <Component {...props} token={token} />
        )
    }
}

export default withAuthentication