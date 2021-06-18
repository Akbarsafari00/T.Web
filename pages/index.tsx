import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/layout";
import React from "react";
import ArticleCard from "../components/article/article-card";
import TopTagWidget from "../components/widgets/top-tag-widget";

export default function Home() {

   var items = [
       {
           banner:"/webp/64e5cdf8b89590f3dc87cde9f91ef776.webp" ,
           title:"سلام من میتوانم یک متن تست برای سنجش زیبایی پروژه باشم" ,
           content:"لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. "
       },
       {
           banner:"/webp/76af074ae1f51a3a1ceee7d0f52603a1.webp" ,
           title:"سلام من میتوانم یک متن تست برای سنجش زیبایی پروژه باشم" ,
           content:"لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. "
       },
       {
           banner:"/webp/89df955d75ddfcdf66cc0b157f343771.webp" ,
           title:"سلام من میتوانم یک متن تست برای سنجش زیبایی پروژه باشم" ,
           content:"لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. "
       },
       {
           banner:"/webp/64e5cdf8b89590f3dc87cde9f91ef776.webp" ,
           title:"سلام من میتوانم یک متن تست برای سنجش زیبایی پروژه باشم" ,
           content:"لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. "
       },
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
              <div className={"col-md-4"}>
                  <TopTagWidget/>
              </div>
          </div>
      </Layout>
  )
}
