module.exports={
    checklog:function(LoginData){
        return new Promise(async(resolve,reject)=>{
            const response={};
            let mypassword=1234;
            let email="donexbrocamp@gmail.com";
            if(LoginData.Email==email && LoginData.password==mypassword){
                console.log("Login successfull predefined details are matched");
                response.status=true;
                response.email=email;
                response.password=mypassword;
                resolve(response);
            }
            else{
                console.log("Login failed");
                response.status=false;
                resolve({staus:false});
            }
        });       
    },
}
