const http=require("http");
const server = http.createServer((req, res) =>{
    res.write("hello INGABIRE RUTAGENGWA Diane")
    res.end();
});


server.listen(8900, null, null, null, () => {
    console.log("server is running on port 8900");
});