const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div className="errorImg">
                    <img src="/images/dog.jpg" alt="Picture of dog on a computer"/> 
                </div>
                <div>
                Photo by <a href="https://unsplash.com/@cookiethepom">Cookie the Pom</a> on <a href="https://unsplash.com/">Unsplash</a>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404