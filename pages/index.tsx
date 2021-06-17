import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/layout";
import React from "react";
import ArticleCard from "../components/article/article-card";

export default function Home() {

   var items = [
       {
           banner:"https://res.cloudinary.com/practicaldev/image/fetch/s--UTGxVyaw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/5pv3pqwlib8s9yix8l08.png" ,
           title:"سلام من میتوانم یک متن تست برای سنجش زیبایی پروژه باشم" ,
           content:"لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. "
       },
       {
           banner:"https://www.robinwieruch.de/static/917a4a7754061fb4915122abdffa43c6/9dc27/2.jpg" ,
           title:"سلام من میتوانم یک متن تست برای سنجش زیبایی پروژه باشم" ,
           content:"لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. "
       },
       {
           banner:"https://www.robinwieruch.de/static/c3a20a8af41df0c5c98db7866a929771/9dc27/3.jpg" ,
           title:"سلام من میتوانم یک متن تست برای سنجش زیبایی پروژه باشم" ,
           content:"لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. "
       },
       {
           banner:"https://res.cloudinary.com/practicaldev/image/fetch/s--UTGxVyaw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/5pv3pqwlib8s9yix8l08.png" ,
           title:"سلام من میتوانم یک متن تست برای سنجش زیبایی پروژه باشم" ,
           content:"لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. "
       },
       {
           banner:"https://res.cloudinary.com/practicaldev/image/fetch/s--UTGxVyaw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/5pv3pqwlib8s9yix8l08.png" ,
           title:"سلام من میتوانم یک متن تست برای سنجش زیبایی پروژه باشم" ,
           content:"لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. "
       },
       {
           banner:"https://res.cloudinary.com/practicaldev/image/fetch/s--UTGxVyaw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/5pv3pqwlib8s9yix8l08.png" ,
           title:"سلام من میتوانم یک متن تست برای سنجش زیبایی پروژه باشم" ,
           content:"لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. "
       }
   ]
    var rows = [];
   for (let item of items){
       rows.push(<ArticleCard item={item}/>)
   }
  return (
      <Layout>
          <div className={"row"}>
              <div className={"col-md-8"}>
                  {rows}
              </div>
          </div>
      </Layout>
  )
}
