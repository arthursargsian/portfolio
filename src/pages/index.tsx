import MainHeader from "@/components/MainHeader";
import EditPart from "@/components/EditPart";
import Workers from "@/components/Workers";
import SlidePart from "@/components/SlidePart";

export default function Home() {
    return (
        <>
            <MainHeader/>
            <EditPart/>
            <Workers/>
            <SlidePart/>
        </>
    );
}