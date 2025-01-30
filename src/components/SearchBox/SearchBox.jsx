import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
    const dispatch = useDispatch();
    const searchedValue = useSelector(selectNameFilter);
    return (
        <div className={s.searchBox}>
            <label className={s.searchLabel}>
                Find contacts by name
                <input
                    className={s.searchInput}
                    type="text"
                    value={searchedValue}
                    onChange={(e) =>
                        dispatch(changeFilter(e.target.value.trim()))
                    }
                />
            </label>
        </div>
    );
};

export default SearchBox;
