import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {authorFilter, resetTagsSearchFilter} from "../../features/filter/filterSlice";

export default function VideoGridItem({video = {}}) {
    const dispatch = useDispatch();
    const {id, title, thumbnail, author, avatar, date, views, duration, authorId} = video;
    const videoUrl = `/videos/${id}`;

    const handleAuthorFilter = (author) => {
        dispatch(authorFilter(author));
        dispatch(resetTagsSearchFilter())
    }

    return (
        <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
            <div className="w-full flex flex-col">
                <div className="relative">
                    <Link to={videoUrl}>
                        <img src={thumbnail} className="w-full h-auto" alt={title}/>
                    </Link>

                    <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">{duration}</p>
                </div>

                <div className="flex flex-row mt-2 gap-2">
                    <p onClick={() => handleAuthorFilter(authorId)} className="shrink-0 cursor-pointer">
                        <img src={avatar} className="rounded-full h-6 w-6" alt={author}/>
                    </p>

                    <div className="flex flex-col">
                        <Link to={videoUrl}>
                            <p className="text-slate-900 text-sm font-semibold">{title}</p>
                        </Link>
                        <Link className="text-gray-400 text-xs mt-2 hover:text-gray-600" to='#'
                              onClick={() => handleAuthorFilter(authorId)}>{author}</Link>
                        <p className="text-gray-400 text-xs mt-1">
                            {views} views . {date}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
