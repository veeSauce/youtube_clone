'use client';

import Image from "next/image";
import Link from "next/link";

import styles from "./navbar.module.css"
import SignIn from "./sign-in";
import {onAuthStateChangedHelper} from "../firebase/firebase";
import {useState} from "react";


export default function Navbar(){
    const [user, setUser] = useState(null);

    return(
        <nav className={styles.nav}>
            <Link className={styles.logoContainer} href="/">
            <Image className={styles.logo} width={250} height={80} src="/youtube-logo.svg" alt="Youtube Logo"/>
            </Link>
            {
                // To Do Add an upload button that should only render if user is signed in
            }
            <SignIn />
        </nav>
    );
}