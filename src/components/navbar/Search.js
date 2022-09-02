import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {searchChanged} from "../../features/filter/filterSlice";
import {useMatch, useNavigate} from "react-router-dom";

export default function Search() {
    const {search} = useSelector(state => state.filter);
    const [input, setInput] = useState(search);
    const dispatch = useDispatch();
    const match = useMatch('/');
    const navigate = useNavigate();

    useEffect(() => {
        setInput(search);
    }, [search])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchChanged(input))

        //if user not in homepage, redirect to homepage
        if(!match){
            navigate('/');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="outline-none border-none mr-2"
                id="blog-search"
                type="search"
                name="search"
                placeholder="Search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </form>
    );
}
