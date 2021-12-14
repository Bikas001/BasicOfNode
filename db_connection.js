var mysql = require('mysql')
var conn = mysql.createConnection({
host: "localhost",
user: "yarsha",
password: "dbpassword"
});

conn.connect(function(err){
if(err) throw err;
console.log("connected")
//conn.query("create database node_db", function(err, result){
//if(err) throw err;
//console.log("Database Created!!");

//});

var sql = "create table customers (name varchar2(255), address varchar2(255))";
conn.query(sql, function(err, result){
    if (err) throw err;
    console.log("Table Created");
})

var sql = "insert into customers (name, address) values ('indox','ktm'))";
conn.query(sql, function(err, result){
    if(err) throw err;
    console.log("inserted"+ result.insertId);// this result.insertId will return inserted Id.

});

//insert multiple record at a time 

var sql = "insert into customers (name, address) values ?";
var values = [['jone', 'kathmandu'],
['hari','pokhara'],
['binod ad', 'chitwan']
];
conn.query(sql,[values], function(err, result){
    if(err) throw err;
    console.log("number of record inserted"+ result.affectedRows)
})
// field of parameter will return information of each fileds of tables.

conn.query("select * from customer where address ='ktm' ", function(err, result, fields){
    if(err) throw err;
    console.log(result)
})

//mysql.escape() will remove sql injection
// ? is as placeholder in sql eg: 'select * from customers where name = ?' conn.query(sql,['name'], function(err,result){})
// In case of multi paramater select * from customers where name = ? or address = ? ' conn.query(sql,[name,addr], function(err, result){})

conn.query("select * from customers order by name", function(err, result){

})

var sql = "DELETE from customers where address = 'ktm'";
conn.query(sql, function(error, result){
    if(error) throw error;
    console.log("NUmber of record deleted"+ result.affectedRows)
})

})
