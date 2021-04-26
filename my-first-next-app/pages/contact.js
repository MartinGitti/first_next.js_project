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
            <Link href="/index">
                <a>Home/</a>
            </Link>
            <Link href="/about">
                <a>About/</a>
            </Link>
            <Link href="/projects">
                <a>Projects/</a>
            </Link>
            <div>
                <hr />
                <h1>Contact Details:</h1>
                <h2>LinkedIn Profile</h2>
                <br />
                <p>
                    A link to my LinkedIn profile:
                    <br />
                    <br />
                    <a href='https:www.linkedin.com/in/martinreedsafari' target='_blank'>LinkedIn</a>
                </p>
                <br />
                <h2>Email:</h2>
                <p>
                    martinreedsafari@gmail.com
                </p>
                <br />
                <h2>Contact number:</h2>
                <br />
                <p>
                    061 442 0968
                </p>
            </div>
            <style global jsx>
                {`
                body{
                    background:#333;
                }
                a{
                    color:white;
                    font-size: 30px;
                    margin-left: 20px;
                }
               h1, h2, p{
                   color:skyblue;
                   text-align: center;
               }
               h1{
                   font-size:40px;
               }
               h2{
                   font-size:30px;
               }
               p{
                   font-size:20px;
               }
                `}
            </style>
        </div>

    )
}
