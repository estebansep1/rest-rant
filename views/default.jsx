const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="../style.css"/>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
            <footer className="stickyFooter">
                <p>Social Links</p>
                <ul>
                    <li><a href="https://www.linkedin.com/in/esteban-sepulveda-a06789161/" >LinkedIn</a></li>
                    <li><a href="https://github.com/estebansep1">Github</a></li>
                </ul>
            </footer>
        </html>
    )
}

module.exports = Def