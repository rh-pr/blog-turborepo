import {Skeleton} from "@/components/ui/skeleton";

const CommentCardSkeleton = () => {
    return (
        <div className="p-2 shadow rounded flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <Skeleton className="w-12 h-12 rounded-full" />
                <Skeleton className="w-48 h-4 " />
                <Skeleton className="w-96 h-12" />

            </div>
        </div>
    )
}

export default CommentCardSkeleton