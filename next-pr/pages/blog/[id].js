import {useRouter} from "next/router";

export default () => {
    const router = useRouter();


    return (
        <>
            <h1>Blog post</h1>
            <p>post id: {router.query.id}</p>
            </>
    )
}