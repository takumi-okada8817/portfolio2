'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const mysql = require('mysql');

//cors設定
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

//jsonの使用
app.use(express.json());

//mysql

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'takumi_database_8817',
  database: 'appsdatabase'
});

//get
app.get('/',(req, res)=>{

    const appVideoId = connection.escape(req.query.videoId);
    console.log(appVideoId);

    /* connection.connect(); */
    const sql = 'select * from youtube_tags where videoId='+appVideoId;

    connection.query(sql,(error,results,fields)=>{

        if(error) throw error;
        console.log(results);
        res.send(results);
    });

    /* connection.end(); */
});

//tag
app.get('/tagRegister',(req,res)=>{

    const tagAreaVideoId = connection.escape(req.query.videoId);
    const tagVal = connection.escape(req.query.tagVal);

    connection.query(`insert into youtube_tags(videoId,tag) values(${tagAreaVideoId},${tagVal})`,(error,results,fields)=>{

        if(error) throw error;
        /* if(results.length){
            res.send();
        }else{ */
            //OkPacketオブジェクトが返る

            console.log(results);
            res.send('登録完了');

        /* } */
    });
});

//delete
app.get('/deleteTag',(req,res)=>{

    const deleteTag = connection.escape(req.query.deleteTag);
    const tagVideoId = connection.escape(req.query.videoId);

    connection.query(`delete from youtube_tags where videoId=${tagVideoId} and tag=${deleteTag} limit 1`,(error,results,fields)=>{
        
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
});

//サーバー起動
app.listen(port, ()=> {
    console.log(`Listening on port ${port}...`);
});