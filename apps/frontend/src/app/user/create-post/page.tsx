import CreatePostContainer from "./_components/createPostContainer";

const CreatePage = () => {
    return (
        <div className="bg-white shadow-md rounded-md p-6 max-w-2xl w-full">
            <h2 className="text-lg text-center font-bold text-slate-700 mb-10">
                Create a New Post
            </h2>
            <CreatePostContainer />
        </div>
    );
}

export default CreatePage;