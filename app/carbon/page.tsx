import React from "react";
import {Metadata} from "next";
import SelectorBar from "../components/SelectorBar";
import Chart from "@/app/components/Chart";

export const metadata: Metadata = {
    title: "Carbon Dioxide",
    description: "Page with data of carbon dioxide usage",
};

export default function CarbonPage() {
    return (
        <div>
            <SelectorBar></SelectorBar>
            <div className={"h-1/2 w-1/2 px-10"}>
                <Chart></Chart>
            </div>
        </div>
    );
}
