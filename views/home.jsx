const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                <img src="/images/chia-yogurt.jpg" alt="Chia Fruit Shake" />
                <div>
                    Photo by <a href="https://unsplash.com/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brenda Godinez</a> on <a href="https://unsplash.com/">Unsplash</a>
                </div>
                </div>
                <div className="home-btn">
                <a href="/places">
                    <button type="button" class="btn btn-primary">Places</button>
                </a>
                </div>
            </main>
        </Def>
    )
}

module.exports = home
