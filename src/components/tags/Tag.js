import {useDispatch, useSelector} from "react-redux";
import {tagRemoved, tagSelected} from "../../features/filter/filterSlice";

export default function Tag({tag = {}}) {
    const dispatch = useDispatch();
    const {tags: selectedTags} = useSelector(state => state.filter);

    const isSelected = selectedTags.includes(tag.title);

    const handleSelected = () => {
        if(isSelected){
            dispatch(tagRemoved(tag.title));
        } else {
            dispatch(tagSelected(tag.title));
        }
    }

    const tagClass = isSelected ? 'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer' : 'bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer';

    return (
        <div className={tagClass} onClick={handleSelected}>
            {tag.title}
        </div>
    );
}
