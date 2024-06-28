# NodeJs Basic Informational Site
This is a project submission for The Odin Project's NodeJS course for a basic information website.

Replit link: https://replit.com/@hoichengleung/odin-node-basic-site

## Assignment
1. Make a project directory and create the following files inside that directory:
    - index.html
    - about.html
    - contact-me.html
    - 404.html

2. Create your node.js server file index.js and add the code needed to serve the right page according to the url.
    - localhost:8080 should take users to index.html
    - localhost:8080/about should take users to about.html
    - localhost:8080/contact-me should take users to contact-me.html
    - 404.html should display any time the user tries to go to a page not listed above.

## Notes

- [create a web server](https://www.w3schools.com/nodejs/nodejs_http.asp#:~:text=Node.js%20as%20a%20Web%20Server) with HTTP module

- Require fs, [read files](https://www.w3schools.com/nodejs/nodejs_filesystem.asp#:~:text=Rename%20files-,Read%20Files,-The%20fs.readFile) to return content.

- make index.js behave as a [file server](https://www.w3schools.com/nodejs/nodejs_url.asp#:~:text=Run%20example%20%C2%BB-,Node.js%20File%20Server,-Now%20we%20know)
