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
                <div className={"meta"}>
                    <span className={"author"}>
                        <img src={"https://files.virgool.io/upload/users/92127/avatar/Cc8JiU.png?x-img=v1/resize,h_120,w_120/optimize,q_100"}/>
                        <span>اکبر احمدی سرای</span>
                        <a className={"follow"}>دنبال کردن</a>
                    </span>
                    <span>13 شهریور 1400</span>
                    <span>3 دقیقه</span>
                </div>
            </div>
        </article>
  )
}
