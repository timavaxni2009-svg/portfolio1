import { Container } from "@/components/container";
import React from "react";

interface HeaderProps {
    className?: string;
    children: React.ReactNode
}

export function Header({className, children}: HeaderProps){
    return(
        <header className={"py-5  w-full bg-[#222222] border-b" + className}>
            <Container className="">
                {children}
            </Container>
        </header>
    );
}