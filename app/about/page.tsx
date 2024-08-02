import { Metadata } from "next";

export const metadata: Metadata ={
    title: "Steve's Home Page",
    description: "Generated with love by Steve",
    keywords: ["Steve", "Next.js", "TypeScript"],
};


export default function AboutPage(){
    return (
            <span className="text-7xl"> About Page</span>
        
    )
}