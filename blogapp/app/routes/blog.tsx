import styles from 'highlight.js/styles/night-owl.css';
import { Outlet } from "@remix-run/react";

export const links = () => {
    return [
        {
                rel:'stylesheet',
                href: styles,
        },
    ];
};

export default function Blog(){
    return (
        <div className='flex flex-row justify-center items-center'>
            <div className='prose-sm lg:prose-xl pl-5 py-10 justify-center '>
                <Outlet />
            </div>
        </div>
    );
}