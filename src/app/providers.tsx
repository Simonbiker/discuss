'use client'

import { NextUIProvider } from "@nextui-org/react"
// import React from "react"

interface ProvidersProps {
    children: React.ReactNode
}

export function Providers({children}: ProvidersProps) {
    return(
        <NextUIProvider>{children}</NextUIProvider>
    )
}