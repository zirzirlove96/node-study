const express = require("express");
const app = express();
const port = 4040;

const bodyParser = require('body-parser');  //reuqest body값을 읽어 올 수 있게 하는 모듈
const cors = require('cors');   //특정 서버 리소스에 다른 임의의 웹사이트들이 request를 보낼 수 있게 하는 모듈(서버는 기본적으로 CORS 방식을 제한)
var value = "";

app.use(cors());    //라우터용으로 사용 하지 않는 것을 권장 ("/about" | "/about:id" 같은 "/about"에 속해 동시에 탄다)
app.use(bodyParser.json()); //데이터를 json 방식으로 받아온다.
app.use(bodyParser.urlencoded({extended:true}));    //req에 body 속성이 추가된다. extended:true는 객체 안에 객체를 파싱 


app.get('/', (req,res)=> {
    res.send("Hello!");
});

app.post('/', (req,res) => {
    console.log(req.body.content);
    res.send(`데이터 노출 ${req.body.content}`);
});



app.listen(port,() => {
 console.log(`Example app listening att https://localhost:${port}`);
});