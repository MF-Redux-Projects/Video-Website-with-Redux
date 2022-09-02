import {Link, useMatch, useNavigate} from "react-router-dom";
import {authorFilter, resetTagsSearchFilter} from "../../features/filter/filterSlice";
import {useDispatch} from "react-redux";

export default function RelatedVideoListItem({video}) {
    const dispatch = useDispatch();
    const match = useMatch('/');
    const navigate = useNavigate();
    const {id, title, thumbnail, author, avatar, date, views, duration, authorId} = video;
    const videoUrl = `/videos/${id}`;

    const handleAuthorFilter = (author) => {
        dispatch(authorFilter(author));
        dispatch(resetTagsSearchFilter());

        //if user not in homepage, redirect to homepage
        if(!match){
            navigate('/');
        }
    }

    return (
        <div className="w-full flex flex-row gap-2 mb-4">
            <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
                <Link to={videoUrl}>
                    <img src={thumbnail} className="object-cover" alt={title}/>
                </Link>
                <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">{duration}</p>
            </div>

            <div className="flex flex-col w-full">
                <Link to={videoUrl}>
                    <p className="text-slate-900 text-sm font-semibold">
                        {title}
                    </p>
                </Link>
                <p className="text-gray-400 text-xs mt-2 hover:text-gray-600 cursor-pointer"
                      onClick={() => handleAuthorFilter(authorId)}
                >
                    {author}
                </p>
                <p className="text-gray-400 text-xs mt-1">
                    {views} views . {date}
                </p>
            </div>
        </div>
    );
}
