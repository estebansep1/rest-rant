const React = require('react');
const Def = require('../default');

function show (data) {
    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    )
    if (data.place.comments.length) {
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! 🤬' : 'Rave! 😁'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
    }
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
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <p>{data.place.description}</p>
                        <h4>Serving {data.place.cuisines}</h4>
                        <div className="btn-container">
                        <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">Edit</a>     
                        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                        <button type="submit" className="btn btn-danger">Delete</button>
                        </form> 
                        </div>
                    </div>
                </div>
                <hr />
                <h2 className="comment-title">Comments</h2>
                {comments}
                <h2 className="comment-section">Got a comment or concern? Let us know!</h2>
                <div className="form-container">
                <form method="POST" action={`/places/${data.place.id}/comment`}>
                    <div className="form-group">
                        <label for="author">Author</label>
                        <input type="text" className="form-control" id="author" name="author" required />
                    </div>
                    <div className="form-group">
                        <label for="starRating">Content</label>
                        <textarea className="form-control" id="content" name="content" rows="4" required></textarea>
                    </div>
                    <div className="form-group">
                    <label htmlFor="customRange1" className="form-label">Star Rating</label>
                    <input type="range" className="form-range" id="customRange1" name="stars" step="0.5" min="1" max="5" required />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="fomr-check-input" id="rant" name="rant" />
                        <label className="form-check-label" for="rant">Rant?</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                </div>
            </main>
        </Def>
    );
}

module.exports = show;


