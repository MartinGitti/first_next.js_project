/*
Note: 
It is important to type 'npm run dev' in the terminal
of the poject directory in order for these pages to render.

All Styling added below in styling tag <style jsx>:
*/
import Link from 'next/link'; // Import react routing component.

export default () => {
    return (
        <div>
            <Link href="/about">
                <a>About/</a>
            </Link>
            <Link href='/projects'>
                <a>Projects/</a>
            </Link>
            <Link href="/contact">
                <a>Contact/</a>
            </Link>
            <div>
                <hr />
                <br />
                <h1>Hello, My Name is Martin Reed.</h1>
                <h2>Welcome to my first page putting the 'next.js' React Framework to use.</h2>
                <img src='/static/Image.jpg' alt='profile image' />
            </div>
            <style jsx>
                {`
                    a{
                        color:skyblue;
                        font-size:30px;
                        margin-left: 20px;
                    }
                    img{
                        border: 4px dotted black;
                        border-radius:50%;
                        height:500px;
                        margin-top:100px;
                        width:400px;
                    }
                `}
            </style>
            <style global jsx>
                {`
                body{
                    background-image:url('/static/nextJs.jpg');
                    background-repeat: no-repeat;
                    text-align: center;
                }
                `}
            </style>
        </div>
    )
}

