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
            <Link href="/contact">
                <a>Contact/</a>
            </Link>
            <div>
                <hr />
                <h1>Projects:</h1>
                <h2>Projects deployed to Github:</h2>
                <br />
                <p>
                    Online store that makes and delivers homemade vegetarian meals.
                    <br />
                    <a href='https://github.com/MartinGitti/OnlineStore.git' target='_blank'>Online Store</a>
                </p>
                <br />
                <p>
                    jQuery project that I completed with Hyperion development.
                    <br />
                    <a href='https://github.com/MartinGitti/first-jquery-project.git' target='_black'>jQuery</a>
                </p>
                <hr />
                <h2>Projects deployed to Heroku:</h2>
                <br />
                <p>
                    Minesweeper Game created with React.
                    <br />
                    <a href='https://secret-spire-76707.herokuapp.com/' target='_blank'>Minesweeper Game</a>
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
