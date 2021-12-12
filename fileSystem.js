var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    fs.readFile('demo_html_file.html', function(err, data){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        return res.end()
    })
}).listen(8080);

//This was to append the file

// fs.appendFile('mynewFile.txt', 'Hello Content!', function(error){
//     if(error) throw error;
//     console.log('Saved!');

// })


//fs.open() method make a flag as second argument, if flag is w for writting.

fs.open('newFile.txt', 'w', function(err, file){
    if(err) throw err;
    console.log('saved!')
})

//fs.writeFile() method replace this specified

fs.writeFile('mynewfile.txt', 'hellow content', function(err){
    if(err) throw err;
    console.log('saved!');
})

//to delete file 
fs.unlink('mynewFile.txt', function(error){
    if (error) throw error;
    console.log("file Deleted!");
})

// to rename file
fs.rename('mynewFile.txt', 'newRenamedFile.txt', function(err){
    if (err) throw err;
    console.log('File Renamed')
})