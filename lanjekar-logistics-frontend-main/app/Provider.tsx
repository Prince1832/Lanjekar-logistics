"use client";
import React, { ReactNode } from 'react'
import { GoogleReCaptchaProvider  } from "react-google-recaptcha-v3";
interface ProviderProps {
    children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
 
    return (
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
             
        scriptProps={{
            async:false,
            defer:false,
            appendTo:"head",
            nonce:undefined
        }}>
            {children}
        </GoogleReCaptchaProvider>    

    )
}

export default Provider