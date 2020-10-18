import * as React from "react";

import { ICurry } from "../models/Curry";
import { CurryList } from "../components/CurryList";
import { MainTitle, MainContent } from "../styled/Page";

interface IProps {
    curries: ICurry[];
}

export default class BlogsPage extends React.Component<IProps>{
    static async getInitialProps(ctx: any) {
        try {
            
            const json: ICurry[] = [
                {
                    id: 1,
                    name: "Curry1",
                    imageUrl: "/static/curry1.jpg"
                },
                {
                    id: 2,
                    name: "Curry2",
                    imageUrl: "/static/curry2.jpg"
                },
                {
                    id: 3,
                    name: "Curry3",
                    imageUrl: "/static/curry3.jpg"
                },
                {
                    id: 4,
                    name: "Curry4",
                    imageUrl: "/static/curry4.jpg"
                },
                {
                    id: 5,
                    name: "Curry5",
                    imageUrl: "/static/curry5.jpg"
                },
                {
                    id: 6,
                    name: "Curry6",
                    imageUrl: "/static/curry6.jpg"
                }
            ];
            return {
                curries: json
            }
        } catch (e) {
            console.error(e);
            return {
                curries: []
            }
        }
    }

    public render() {
        return (
            <MainContent>
                <MainTitle>Indian Curries</MainTitle>
                <CurryList curries={this.props.curries} />
            </MainContent>
        )
    }
}