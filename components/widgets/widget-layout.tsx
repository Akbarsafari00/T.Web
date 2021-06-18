import Head from 'next/head'
import Image from 'next/image'
import  $ from 'jquery'


export default function WidgetLayout(props:any) {
    return (
        <section className={"widget widget-layout "+props.name}>
            <h3 className={"title"}>{props.title}</h3>
            <div className={"body"}>
                {props.children}
            </div>
        </section>
  )
}
