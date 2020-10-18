// 共通レイアウト
import React from "react";
import App, { Container } from "next/app";
import { GlobalNav } from "../components/GlobalNav";

// サーバー、クライアント側両方で実行される
export default class MyApp extends App{
    static async getInitialProps(ctx: any) {
        let pageProps = {};

        if (ctx.Component.getInitialProps) {
            pageProps = await ctx.Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <GlobalNav />
                <Component {...pageProps} />
            </Container>
        );
    }
}
