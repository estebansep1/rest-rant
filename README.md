# Project REST-Rant

REST-Rant is an app where users can review restaurants.


## Routes

| Method | Path                  | Purpose                                            |
|--------|-----------------------|----------------------------------------------------|
| GET    | /                     | The home page                                      |
| GET    | /places               | Index page listing all places                      |
| POST   | /places               | Create a new place                                 |
| GET    | /places/new           | Form page for creating a new place                 |
| GET    | /places/:id           | Details about a particular place                   |
| PUT    | /places/:id           | Update a particular place                          |
| GET    | /places/:id/edit      | Form page for editing an existing place            |
| DELETE | /places/:id           | Delete a particular place                          |
| POST   | /places/:id/rant      | Create a rant (comment) about a particular place   |
| DELETE | /places/:id/rant/:id  | Delete a rant (comment) about a particular place   |

## Places data

|Data Name | Data Type |
|----------|-----------|
| name     | string    |
| city     | string    |
| state    | string    | 
| cuisines | string    | 
| pic      | string    | 