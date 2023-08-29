const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Rest-Rant</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="../style.css"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link text-decoration-none" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-decoration-none" href="/places">Places</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-decoration-none" href="/places/new">Add Place</a>
                            </li>
                        </ul>
                    </div>
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

module.exports = Def;
