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
            <Link href="/projects">
                <a>Projects/</a>
            </Link>
            <Link href="/contact">
                <a>Contact/</a>
            </Link>
            <div>
                <hr />
                <h1>About me:</h1>
                <br />
                <p>
                    Over a course of a few months,
                    I've developed my computer skills
                    and have become quite the compter geek.
                </p>
                <p>
                    I recently graduated at Hyperion Development
                    as a Full Stack Web Developer.
                </p>
                <p>
                    I have chosen to do a career change to something
                    that really challenges me and offers a greater
                    oppurtunity to develope my skills.
                </p>
                <p>
                    I feel confident that I'll be a great asset to any company I join.
                </p>
                <p>
                    I meet all the professional prerequisites of being
                    a team player, go getter and punctual at all times.
                </p>
                <br />
                <h1>Educational history:</h1>
                <br />
                <h2>Hyperion Development-</h2>
                <p>Full Stack Web Development Course</p>
                <p>6 Month Online Course</p>
                <p>
                    I have worked extensively with languages
                    that include HTML, CSS & JavaScript
                    along with other frameworks
                    and libraries such as React, Next.js
                    Express & Node.js.
                </p>
                <p>
                    I've also worked with database technologies such as MongoDB.
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
