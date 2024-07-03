const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

const app = express();
app.set('port', process.env.PORT||3000);
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// static폴더 설정
app.use('/', express.static(path.join(__dirname,'uploads')));

try{
    fs.readdirSync('uploads');
}catch(err){
    console.error('uploads 폴더가 없어 uploads폴더를 생성합니다.');
    fs.mkdirSync('uploads');
}

const multerObj = multer(
    {
        storage:multer.diskStorage(
            {
                destination(req,file,done){//업로드된 파일이 저장될 폴더 설정
                    done(null,'uploads/');
                },
                filename( req,file,done){   //업로드된 파일이 저장되기 전 파일 이름을 변경하는 설정
                    const ext = path.extname(file.originalname);
                    done(null,path.basename(file.originalname,ext)+Date.now()+ext);  
                },
            }
        ), 
        limits:{ 
            fileSize: 5*1024*1024,
        }, 
    }
);

app.post('/upload',multerObj.single('image'),(req,res)=>{


    res.json(
        {
            title : req.body.title,
            description : req.body.description,
            price : req.body.price,
            filename : req.body.filename,
        }
    );
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/fileUpload.html'));
});

app.listen(app.get('port'), ()=>{console.log(app.get('port'),"포트서버 오픈");});