import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";

const Index = () => {
    return (
        <div>
            <h1>Home page</h1>
            <Link href='/blog'>
                <a>Blog</a>
            </Link>
        </div>
    )
}


export default Index