const React = require('react');
const Def = require('../default');

function show(data) {
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-md-6">
                        <img src={data.place.pic} alt={data.place.name} className="img-fluid" />
                        <h3>Located in {data.place.city}, {data.place.state}</h3>
                    </div>
                    <div className="col-md-6">
                        <h1>{data.place.name}</h1>
                        <h2>Rating</h2>
                        <p>Not Rated</p>
                        <h2>Description</h2>
                        <p>{data.place.description}</p>
                        <h4>Serving {data.place.cuisines}</h4>
                        <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">Edit</a>     
                        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                        <button type="submit" className="btn btn-danger">Delete</button>
                        </form> 

                    </div>
                </div>
                <hr />
                <h2>Comments</h2>
                <p>No comments yet!</p>
            </main>
        </Def>
    );
}

module.exports = show;


