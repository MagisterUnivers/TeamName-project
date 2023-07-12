import React , {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from "react-router-dom";
import { verifyThunk } from 'redux/Auth/authOperations';

const VerificationPage = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch()

    useEffect(() => {
        const verificationToken = searchParams.get("verificationToken");
        dispatch(verifyThunk(verificationToken))
    })
   
  return (

    <div>VerificationPage</div>
  )
}

export default VerificationPage