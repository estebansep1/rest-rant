const React = require('react');
const Def = require('../default.jsx');

function edit_form(data) {
    console.log('Data in edit_form:', data)
    console.log('Data index:', data.index)
    return (
        <Def>
            <link rel="stylesheet" href="/style.css" />
            <main>
                <h1>Edit Place</h1>
                <form method="POST" action={`/places/${data.place._id}?_method=PUT`} className="row g-3">
                    <div className="row">
                        <div className="form-group col-sm-4">
                            <label htmlFor="founded">Founded</label>
                            <input className="form-control" id="founded" name="founded" value={data.place.founded} />
                        </div>
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Place Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={data.place.name} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="pic" className="form-label">Place Picture</label>
                        <input type="text" className="form-control" id="pic" name="pic" value={data.place.pic} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="text" className="form-control" id="city" name="city" value={data.place.city} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="state" className="form-label">State</label>
                        <input type="text" className="form-control" id="state" name="state" value={data.place.state} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="cuisines" className="form-label">Cuisines</label>
                        <input type="text" className="form-control" id="cuisines" name="cuisines" value={data.place.cuisines} required />
                    </div>
                    <div className="col-md-12">
                    <input className="btn btn-primary" type="submit" value="Update Place" />
                    </div>
                    </div>
                </form>
            </main>
        </Def>
    );
}

module.exports = edit_form