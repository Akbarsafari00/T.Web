import Head from 'next/head'
import Image from 'next/image'
import  $ from 'jquery'
import WidgetLayout from "./widget-layout";
import ArticleCard from "../article/article-card";
import React from "react";


export default function TopTagWidget(props:any) {

    var items = [
        {"title":"برنامه نویسی",link:"#"},
        {"title":"ورزش",link:"#"},
        {"title":"معماری میکروسرویس",link:"#"},
        {"title":"ایتم های برنامه نویسی",link:"#"},
        {"title":"سکس",link:"#"},
    ]
    var rows = [];
    for (let item of items){
        rows.push(<li><a key={Math.random()} href={item.link}>{item.title}</a></li>);
    }
    return (
        <WidgetLayout name={"top-tag-widget"} title={"برچسب های برتر"}>
                <ul>
                    {rows}
                </ul>
        </WidgetLayout>
  )
}
