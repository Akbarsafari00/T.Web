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
