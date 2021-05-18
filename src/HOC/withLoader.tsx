import { CircularProgress } from "@material-ui/core"
import { useState } from "react"

export type withLoaderProps = {
    loading?:boolean,
    setLoading?:Function,
}
const withLoader = (Component)=>{
    return (props:withLoaderProps)=>{
        const [loading,setLoading] = useState(false)
        return (
            <div style={{display:'flex',flex:1}}>
                {loading && (
                    <div style={{position:'fixed',width:'100%',height:'100vh',backgroundColor:'rgba(0,0,0,0.5)',zIndex:500000,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <CircularProgress></CircularProgress>
                    </div>
                )}
                <Component {...props} loading={loading} setLoading={setLoading}/>
            </div>
            )
    }
}
export default withLoader