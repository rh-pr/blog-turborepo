import { Button } from "@/components/ui/button"
import { PencilSquareIcon } from "@heroicons/react/16/solid"
import Link from "next/link"

const NoPost = () => {
  return (
    <div className="mt-32 flex flex-col items-center gap-5">
      <p className="text-center p-4 text-5xl text-slate-400">No Posts Yet!</p>
      <Button asChild>
        <Link href={"/user/create-post"} className="flex items-center justify-center">
            <span>
                <PencilSquareIcon className="w-4" />
            </span>
            <span>Write Your First Post </span>
        </Link>
      </Button>
    </div>
  )
}

export default NoPost
