const http = require('http');

function dataControl(req,resp){
    resp.write('<h1>Hello, Ifti</h1>');
    resp.end();
}
http.createServer(dataControl) .listen(4502);


///etao kam korbo


// const http = require('http');

// const dataControl = (req, resp) => {
//     resp.write('<h1>Hello, This is anil sidhu</h1>');
//     resp.end();
// };

// http.createServer(dataControl).listen(4500);