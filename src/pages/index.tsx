import MainHeader from "@/components/MainHeader";
import EditPart from "@/components/EditPart";
import Workers from "@/components/Workers";
import SlidePart from "@/components/SlidePart";
import Features from "@/components/Features";
import Technical from "../components/Technical";
import Showcase from "@/components/Showcase";

export default function Home() {
    return (
        <>
            <MainHeader/>
            <EditPart/>
            <Workers/>
            <SlidePart/>
            <Features/>
            <Technical/>
            <Showcase/>
        </>
    );
}