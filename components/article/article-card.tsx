import Head from 'next/head'
import Image from 'next/image'
import  $ from 'jquery'


export default function ArticleCard(props:any) {
    return (
        <article className={"article-card"}>
            <div>
                <img className={"banner"} src={props.item.banner}/>
            </div>
            <div className={"content"}>
                <h2 className={"title"}>{props.item.title}</h2>
                <p className={"excerpt"}>{props.item.content}</p>
                <div className={"meta"}><span>13 شهریور 1400</span> | <span>3 دقیقه</span> | <span>اکبر احمدی سرای</span></div>
            </div>
        </article>
  )
}
