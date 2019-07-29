var supertest = require("supertest");
const test = require('tape');

    test('should return home page' , (t)=>{
        supertest("http://localhost:4000")
            .get("/")
            .expect("Content-type",/text/)
            .expect(200)
            .end((err,res)=>{
                console.log("response" , res);
            // HTTP status should be 200
            t.error(err);
            t.equal(res.statusCode, 200 ,"should return home page")
            t.end();
            });
    });

        
      