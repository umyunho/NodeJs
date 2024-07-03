const express = require('express');
const router = express.Router();
const path = require("path");
const mysql = require('mysql2/promise');

async function getConnection(){
    let connection = await mysql.createConnection(
        {
            host : 'localhost',
            user : 'root',
            password : 'adminuser',
            database : 'board'
        }
    );
    return connection;
}

// const connection = mysql.createConnection(
//     {
//         host : 'localhost',
//         user : 'root',
//         password : 'adminuser',
//         database : 'board'
//     }
// );



router.post('/login', async (req,res, next)=>{
    // const userid = req.body.userid;
    // const pwd = req.body.pwd;
    const {userid,pwd} = req.body;
    const sql = "select * from member where userid = ?";
    try {
        
        const connection = await getConnection();
        const [rows,fields] = await connection.query(sql,[userid]);
        if(rows.length == 1){
                if(rows[0].pwd == pwd){
                    const uniqueInt = Date.now();
                    req.session[uniqueInt] = rows[0];
                    res.cookie('session', uniqueInt, {httpOnly: true, path: '/'});
                    res.json({msg:'ok'});
                }else{
                res.json({msg:'비밀번호가 틀림'});
                }
            }else{
                res.json({msg:'아이디가 없음'});
            }
    } catch (err) {
       next(err);
    }


    // connection.query(sql, [userid], (error, rows)=>{
    //     //sql:실행될 sql문
    //     // [userid] : ?에 대응되는값을 저장한변수, 여러개면 컴마로구분
    //     // rows에는 검색결과, error에러내용이 저장되면서 익명함수 실행됨
    //     if(error){
    //         next(error);
    //     }else{
    //         if(rows.length == 1){
    //             if(rows[0].pwd == pwd){
    //                 const uniqueInt = Date.now();
    //                 req.session[uniqueInt] = rows[0];
    //                 res.cookie('session', uniqueInt, {httpOnly: true, path: '/'});
    //                 res.json({msg:ok});
    //             }else{
    //             res.json({msg:'비밀번호가 틀림'});
    //             }
    //         }else{
    //             res.json({msg:'아이디가 없음'});
    //         }
    //     }
    // });
});

router.get('/joinForm', (req,res)=>{
    res.sendFile(path.join(__dirname, '/..', '/views/joinForm.html'));

})

router.post("/idcheck",async(req,res)=>{
    const userid = req.body.userid;
    const sql = "select * from member where userid = ?";
    try{
        const connection = await getConnection();
        const [rows, fields] = await connection.query(sql, [userid]);
        if(rows.length > 0){
            res.json({id:1});
            
        }else{
            res.json({id:0});
        }
    }catch(err){
        next(err);
    }
});

router.post('/join', async(req,res)=>{
    
})


module.exports = router;