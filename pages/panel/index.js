import UserContext from "@/context/userContext";
import { useContext, useEffect } from 'react';
import axios from "axios";
import { OnRun } from "@/api/api";
const Panel = () =>{
    const { value, setValue } = useContext(UserContext);

    const idVerify = () =>{
        axios.post(OnRun+'/authentication/checkcookies',{_id:value})
        .then(response=>{
            console.log(response.data)
        })
        .catch(erorr=>{
            console.log(erorr)
        })

    }

    useEffect(idVerify,[])

    return(
        <p>dd</p>
    )
}


export default Panel