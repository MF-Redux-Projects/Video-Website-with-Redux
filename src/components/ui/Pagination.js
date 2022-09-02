import {useSelector} from "react-redux";

export default function Pagination() {
    const {videos} = useSelector(state => state.videos);
    const {page, limit} = useSelector(state => state.pagination);

    const totalPage = Math.ceil(videos.length / limit);
    const pages = Array.from({length: totalPage}, (_, i) => i + 1);

    return (
        <section className="pt-12">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
                {
                    pages.map(page => (
                        <div className="bg-blue-600 text-white px-4 py-1 rounded-full" onClick={}>
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
