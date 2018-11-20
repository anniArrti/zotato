var app   = require('express')(); // Express App include
var http = require('http').Server(app); // http server
var mysql = require('mysql'); // Mysql include
var bodyParser = require("body-parser"); // Body parser for fetch posted data
var connection = mysql.createConnection({ // Mysql Connection
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'officedata'
    });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Body parser use JSON data

connection.connect();

app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});
app.post('/create',function(req,res){

    var email = req.body.email;
    var data = {
        "Data":""
    };
    connection.query("INSERT into login(name, email, password) values('"+req.body.name+"','"+req.body.email+"','"+req.body.pwd+"')",function(err, rows, fields){
        if (err) throw err;
        data = "1";
        res.json(data);
    });
});
app.post('api/login',function(req,res){
    var email = req.body.email;
    var pass = req.body.password;
    var data = {
        "Data":""
    };
    connection.query("SELECT * from login WHERE email=? and password=? LIMIT 1",[email,pass],function(err, rows, fields){
        if(rows.length != 0){
            data = "1";
            res.json(data);
        }else{
          data = "0";
            res.json(data);
        }
    });
});
app.post('/dashboard',function(req,res){
    var data = {
        "Data":""
    };
    connection.query("UPDATE login SET projectname='"+req.body.projectname+"', date='"+req.body.date+"', starttime='"+req.body.strattime+"', endtime='"+req.body.endtime+"' WHERE email='"+req.body.email+"' ",function(err, results, fields){
      if (err) throw err;
        data = "1";
        res.json(data);  
    });
});
app.post('/admin',function(req,res){
    var email = req.body.email;
    var pass = req.body.pwd;
    var data = {
        "Data":""
    };
    connection.query("SELECT * from admin WHERE email=? and password=? LIMIT 1",[email,pass],function(err, rows, fields){
        if(rows.length != 0){
            data = "1";
            res.json(data);
        }else{
          data = "0";
            res.json(data);
        }
    });
});
app.get('/get',function(req,res){
   var data = {
        "Data":""
    };
  connection.query("SELECT * from login", function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});
app.get('/showdashboard/:email',function(req,res){
    var email = req.body.email;
    console.log(email);
   var data = {
        "Data":""
    };
  connection.query('SELECT * from login WHERE `email`=?', [req.params.email], function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});

app.get('/delete/:formid',function(req,res){
   connection.query('DELETE FROM `login` WHERE `id`=?', [req.params.formid], function (error, results, fields) {
    if (error) throw error;
    res.json('Record has been deleted!');
  });
});

app.post('/dashboard',function(req,res){
    var email = req.body.email;
    var data = {
        "Data":""
    };
    connection.query("UPDATE login SET name='"+req.body.name+"', email='"+req.body.email+"', password='"+req.body.pwd+"' WHERE id='"+[req.params.formid]+"' ",function(err, rows, fields){
      if (err) throw err;
    res.json(result);   
    });
});

app.listen(3000);

//https://mlab.com/
//https://mlab.com/plans/pricing/
//https://medium.com/@burimshala/how-to-implement-middleware-in-angular-using-ui-router-b3267dddbae8
//https://medium.com/@ervib/deploy-angular-4-app-with-express-to-heroku-6113146915ca
// mongodb database connectivity

/*const MONGO_URL = ('mongodb://anniArrti:annyattri123@ds119161.mlab.com:19161/mogodata');
 mongoose.connect(MONGO_URL)
  var db = mongoose.connection;
 db.on("error", console.error.bind(console, "connection error"));
 db.once("open", function(callback) {
     console.log("Connection succeeded.");
 });*/



/*https://medium.com/@ervib/deploy-angular-4-app-with-express-to-heroku-6113146915ca
https://dashboard.heroku.com/
https://github.com/anniArrti/office
https://blog.angular-university.io/angular-service-worker
auth gaurd
https://dzone.com/articles/implementing-guard-in-angular-5-app

Deploy On github
    git add .
    git commit -m "first commit"
    git push -u origin master



Deploy On Heroku(also see on heroku login prjectname/deploy)
    heroku login
    git add .
    git commit -am "make it better"
    git push heroku master

   !!---Important--!! Deploy MEAN stack on heroku https://www.google.co.in/search?ei=S-E1W-HIB5q_rQGDgL_AAw&q=deploying+mean+stack+app+on+heroku&oq=deploying+mean+stack+app+on+heroku&gs_l=psy-ab.3...9030521.9032962.0.9036079.6.6.0.0.0.0.471.1490.0j1j4j0j1.6.0....0...1c.1.64.psy-ab..0.1.471...0i30k1.0.9I-WCnPstMg#kpvalbx=1
    

    Herko 
        email(anniat44@gmail.com )
        name (anniArrti)
        password (anniattri@#1)

    Git hub 
            username (anniarrti)
            password (annyattri@#1) 

    mlab 
        username(anniarrti)
        password(annyattri123)


 DataTable Pagination https://www.youtube.com/watch?v=T5pNe0quzyo&list=PLV1euzd9ziJJaZ77M3BpQmOicKxEeOnKu&index=4
                    https://l-lin.github.io/angular-datatables/#/basic/angular-way       
*/