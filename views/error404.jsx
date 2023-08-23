const React = require('react')
const Def = require('./places/default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div className="errorImg">
                    <img src="/images/restaurant.jpg" alt="Picture of restaurant"/> 
                </div>
                <div>
                Photo by <a href="https://unsplash.com/@chrisliverani">Brenda Godinez</a> on <a href="https://unsplash.com/">Unsplash</a>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404