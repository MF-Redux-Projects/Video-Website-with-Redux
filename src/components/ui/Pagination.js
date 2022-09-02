import {useDispatch, useSelector} from "react-redux";
import {setPage} from "../../features/pagination/paginationSlice";
import {useEffect} from "react";
import {fetchTotalVideos} from "../../features/videos/videosSlice";

export default function Pagination() {
    const dispatch = useDispatch();
    const {videoCount} = useSelector(state => state.videos);
    const {page, limit} = useSelector(state => state.pagination);

    useEffect(() => {
        dispatch(fetchTotalVideos());
    }, [dispatch]);

    console.log(videoCount)

    const totalPage = Math.ceil(videoCount / limit);
    const pages = Array.from({length: totalPage}, (_, i) => i + 1);

    const handlePageChange = (page) => {
        dispatch(setPage(page));
    }

    return (
        <section className="pt-12">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
                {
                    pages.map(page => (
                        <div key={page} className="bg-blue-600 text-white px-4 py-1 rounded-full" onClick={() => handlePageChange(page)}>
                            {page}
                        </div>
                    ))
                }
                <div className="bg-blue-600 text-white px-4 py-1 rounded-full">
                    1
                </div>
                {/*<div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
                    2
                </div>*/}

            </div>
        </section>
    );
}
