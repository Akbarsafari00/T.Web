import Head from 'next/head'
import Image from 'next/image'
import {useState} from "react";
import Layout from "../../components/layout";
import {unwatchFile} from "fs";

export default function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const [message,setMessage] = useState("");

    function loginSubmit(e:any) {
        setError("")
        setMessage("")
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email , password:password })
        };

        fetch('http://localhost:5000/identity-service/api/account/login', requestOptions)
            .then( async response => {

                var body = await response.json();
                if (response.ok){
                    setMessage(" با موفقیت وارد شدید . ");
                    localStorage.setItem("token",body.token)

                    const requestOptions = {
                        method: 'GET',
                        headers: { 'Content-Type': 'application/json','Authorization':'bearer '+ body.token}
                    };
                    fetch('http://localhost:5000/identity-service/api/account/profile',requestOptions )
                        .then(async userResponse=>{
                            var user = await userResponse.json();
                            localStorage.setItem("user",JSON.stringify(user));
                        })

                }else{

                    if (body.code==="ACCOUNT_UN_AUTHORIZED"){
                        setError("نام کاربری و یا رمز عبور اشتباه است")

                    }
                }
            })

    }
  return (
      <Layout>
          <div className={"row"}>
              <div className={"col-md-4"}>
                  <form className={"mt-4"} onSubmit={loginSubmit}>
                      <div className={"mb-3"}>
                          <label className={"mb-2"}>ایمیل</label>
                          <input type={"email"} className={"form-control"} value={email} onChange={(e=>setEmail(e.target.value))}/>
                      </div>
                      <div className={"mb-3"}>
                          <label className={"mb-2"}>کلمه عبور</label>
                          <input type={"password"} className={"form-control"} value={password} onChange={(e=>setPassword(e.target.value))}/>
                      </div>
                      <div className={"form-group"}>
                          <input type={'submit'} className={"btn btn-primary"} value={"ورود"}/>
                      </div>
                  </form>
                  {(error!=="") && <p className={"alert alert-danger mt-3"}>{error}</p>}
                  {(message!=="") && <p className={"alert alert-success mt-3"}>{message}</p>}
              </div>
              <div className={"col-md-8"}></div>
          </div>
      </Layout>
  )
}
