import Head from 'next/head'
import Image from 'next/image'
import {useState} from "react";
import Layout from "../../components/layout";

export default function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    function loginSubmit(e:any) {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email , password:password })
        };

        fetch('http://localhost:5000/identity-service/api/account/login', requestOptions)
            .then(response => response.json());
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
              </div>
              <div className={"col-md-8"}></div>
          </div>
      </Layout>
  )
}
