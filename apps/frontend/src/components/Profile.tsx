import { SessionUser } from "@/lib/session";
import {Popover, PopoverContent, PopoverTrigger} from "@radix-ui/react-popover";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { UserIcon } from "lucide-react";
import { ArrowRightStartOnRectangleIcon, ListBulletIcon, PencilSquareIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

type Props = {
    user: SessionUser
}

const Profile = ({user}: Props) => {
    return (
        <Popover>
            <PopoverTrigger>
                <Avatar>
                    <AvatarImage src={user.avatar} className="rounded-full w-14 border-white border-2"/>
                    <AvatarFallback>
                        <UserIcon className="w-8 text-slate-500" />
                    </AvatarFallback>
                </Avatar>
            </PopoverTrigger>
            <PopoverContent className="bg-white text-slate-500 p-4">
                <div className="text-center flex justify-center items-center gap-2 font-bold mb-5">
                    <UserIcon className="w-8 text-slate-500 " />
                    <p >{user.name}</p>
                </div>
                <div className="*:flex *:items-center *:gap-5 *:transition *:rounded-md text-slate-500 p-2 *:px-2 *:my-2 *:py-2 [&>*:hover]:bg-sky-500 [&>*:hover]:text-white [&>*:hover]:translate-x-2  ">
                    <Link href={"/user/create-post"} >
                        <PencilSquareIcon className="w-4" />
                        <span className="">Create new Post</span>
                    </Link>
                    <Link href={"/user/posts"}>
                        <ListBulletIcon  className="w-4"/>
                        <span>Posts</span>
                    </Link>
                       <a href="/api/auth/signout">
                        <ArrowRightStartOnRectangleIcon className="w-4"/>
                         <span>Sign Out</span>
                    </a>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default Profile;