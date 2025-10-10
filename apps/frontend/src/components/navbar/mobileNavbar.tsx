import { PropsWithChildren } from "react";
import SideBar from "../ui/SideBar";
import { Bars2Icon } from "@heroicons/react/16/solid";

type Props = PropsWithChildren;

const MobileNavbar = (props: Props) => {
    return (
        <div className="md:hidden">
            <SideBar trigerIcon={<Bars2Icon className="w-4" />} trigerClassName="absolute top-2 left-2">
                {props.children}
            </SideBar>
        </div>
    );
}

export default MobileNavbar;