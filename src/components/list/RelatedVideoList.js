import RelatedVideoListItem from "./RelatedVideoListItem";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchRelatedVideos} from "../../features/relatedVideos/relatedVideosSlice";
import Loading from "../ui/Loading";

export default function RelatedVideoList({currentVideoId, tags}) {
    const dispatch = useDispatch();
    const {videos, isLoading, isError, error} = useSelector(state => state.relatedVideos)

    useEffect(() => {
        dispatch(fetchRelatedVideos({id: currentVideoId, tags}))
    }, [tags, currentVideoId, dispatch])

    //decide what to render
    let content;
    if (isLoading) {
        content = <Loading/>
    }
    if (!isLoading && isError) {
        content = <div className="col-span-12">{error}</div>
    }
    if(!isLoading && !isError && videos?.length === 0) {
        content = <div className="col-span-12">No related videos found</div>
    }
    if(!isLoading && !isError && videos?.length > 0) {
        content = videos.map(video => <RelatedVideoListItem key={video.id} video={video}/>)
    }

    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {content}
        </div>
    );
}
