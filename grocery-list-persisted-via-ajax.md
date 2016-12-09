We have a Rails application that renders the following React application on the
home page:

![Grocery List React][grocery-list-react]

The React application is functional, but the data is not currently persisted.
Your job is to update the React application, so data is persisted in the
database of the Rails application.

## Setup
From your challenges directory, run the following:

```
$ et get grocery-list-persisted-via-ajax
$ cd grocery-list-persited-via-ajax
$ bundle install
$ bundle exec rake db:create
$ bundle exec rake db:migrate
$ bundle exec rails server -b 0.0.0.0
```

Then in another terminal tab run:

```
$ npm install
$ npm start
```

If you go to [localhost:3000][localhost-3000], the current React application
will be displayed on the page and there should be no errors in your console.

## Rails API endpoints
The Rails application has API endpoints that will allow you to create, read, and
delete groceries.

### Creating Groceries
cURL request example:

```
$ curl -i -X POST -H "Content-Type: application/json" -d '{
    "grocery": {
        "name": "Oranges"
    }
}' "http://localhost:3000/api/groceries"
```

HTTP Response:

```
HTTP/1.1 201 Created
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Content-Type: application/json; charset=utf-8
ETag: W/"d197f8d687f2e2d299efd3bfc947a005"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 534f7d92-993e-4c75-a32e-e7a1b8341445
X-Runtime: 0.391709
Transfer-Encoding: chunked

{"grocery":{"id":1,"name":"Oranges","created_at":"2016-06-21T18:13:13.826Z","updated_at":"2016-06-21T18:13:13.826Z"}}
```

If you do not properly format the request body you may get a 400 or 500 response status
code. Furthermore, if the name property is either not specified or a blank
string, then you will get a 422 response status code.

### Reading Groceries
cURL request example:

```
$ curl -i -X GET "http://localhost:3000/api/groceries"
```

HTTP Response:

```
HTTP/1.1 200 OK
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Content-Type: application/json; charset=utf-8
ETag: W/"df07be93b35664210986cb466da8d4ee"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 85c49c59-7c07-4d54-95e7-fc03983f60ae
X-Runtime: 0.007165
Transfer-Encoding: chunked

{"groceries":[{"id":1,"name":"Oranges","created_at":"2016-06-21T18:13:13.826Z","updated_at":"2016-06-21T18:13:13.826Z"}]}
```

### Deleting Groceries
cURL request example:

```
$ curl -i -X DELETE "http://localhost:3000/api/groceries/1"
```

HTTP Response:

```
HTTP/1.1 204 No Content
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Cache-Control: no-cache
X-Request-Id: ccd072cc-2edf-4fc1-90b2-4062d71448dd
X-Runtime: 0.021644

```

## Deliverables

1. The initial grocery list that the React application displays should be the
   groceries currently in the database of the Rails application.

2. Whenever a grocery is added to the list, the grocery should be added to
   the database of the Rails application. The grocery should be present
   in the list even if the page is refreshed.

3. Whenever a grocery is deleted from the list, the grocery should be removed
   from the database of the Rails application. The grocery should be absent
   even if the page is refreshed.

## Pro Tips
* The `componentDidMount` lifecycle method is an appropriate place to fetch initial grocery list
    data.
* If you are sending data to the server via an AJAX call, make sure you format
    the data to JSON using [`JSON.stringify`][json-stringify] and specify
    the `contentType` in the [AJAX settings][ajax-settings].

[ajax-settings]: http://api.jquery.com/jquery.ajax/
[json-stringify]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
[grocery-list-react]: https://s3.amazonaws.com/horizon-production/images/grocery_list_react.png
[localhost-3000]: http://localhost:3000
