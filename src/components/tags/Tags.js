import Tag from "./Tag";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchTags} from "../../features/tags/tagsSlice";
import Loading from "../ui/Loading";
import {resetAllFilters} from "../../features/filter/filterSlice";

export default function Tags() {
    const dispatch = useDispatch();
    const {tags, isLoading, isError, error} = useSelector(state => state.tags);
    const {tags: selectedTags, search, author} = useSelector(state => state.filter);

    useEffect(() => {
        dispatch(fetchTags());
    }, [dispatch])

    //decide what to render
    let content;
    if (isLoading) {
        content = <Loading/>
    }
    if (!isLoading && isError) {
        content = <div className="col-span-12">{error}</div>
    }

    if(!isLoading && !isError && tags?.length === 0) {
        content = <div className="col-span-12">No tags found</div>
    }

    if(!isLoading && !isError && tags?.length > 0) {
        content = tags.map(tag => <Tag key={tag.id} tag={tag}/>)
    }

    const handleClearAllFilters = () => {
        dispatch(resetAllFilters());
    }

    return (
        <section>
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 border-b overflow-y-auto">
                <div className="flex">
                    <div className="w-4/5 flex gap-2">{content}</div>
                    {
                        selectedTags?.length > 0 || search || author ? (
                            <div className="w-1/5">
                                <button className="bg-red-400 text-white px-4 py-1 rounded-full cursor-pointer float-right" onClick={handleClearAllFilters}>&#10005; Reset</button>
                            </div>
                        ) : ''
                    }
                </div>
            </div>
        </section>
    );
}
