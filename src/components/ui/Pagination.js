import {useDispatch, useSelector} from "react-redux";
import {setPage} from "../../features/pagination/paginationSlice";
import {useEffect} from "react";
import {fetchTotalVideos} from "../../features/videos/videosSlice";

export default function Pagination() {
    const dispatch = useDispatch();
    const {videoCount} = useSelector(state => state.videos);
    const {page: currentPage, limit} = useSelector(state => state.pagination);
    const {tags, search, author} = useSelector(state => state.filter);

    useEffect(() => {
        dispatch(fetchTotalVideos({tags, search, author}));
    }, [dispatch, tags, search, author]);

    const totalPage = Math.ceil(videoCount / limit);
    if(totalPage === 1) return null;
    const pages = Array.from({length: totalPage}, (_, i) => i + 1);

    const handlePageChange = (page) => {
        dispatch(setPage(page));
    }

    return (
        <section className="pt-12">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
                {
                    pages.map(page => {
                        let itemClass = page === currentPage ? 'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer' : 'bg-gray-200 px-4 py-1 rounded-full cursor-pointer';
                        return (
                            <div key={page} className={itemClass} onClick={() => handlePageChange(page)}>
                                {page}
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}
