import { useDispatch, useSelector } from "react-redux";

import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
    const dispatch = useDispatch();
    const searchedValue = useSelector(selectNameFilter);
    return (
        <>
            <h2 className="text-xl font-bold mt-16 mb-4">
                Find contacts by name
            </h2>
            <label className="input input-bordered flex items-center gap-2 mb-10 w-3xs md:w-sm max-w-md">
                <input
                    type="text"
                    className="grow"
                    placeholder="Search"
                    value={searchedValue}
                    onChange={(e) =>
                        dispatch(changeFilter(e.target.value.trim()))
                    }
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                >
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                    />
                </svg>
            </label>
        </>
    );
};

export default SearchBox;
