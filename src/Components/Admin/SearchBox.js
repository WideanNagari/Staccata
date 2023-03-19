import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBox = (props) => {
    const text = props.text;
    const handleChange = props.handleChange
    return (
        <div className="flex gap-3 mb-2">
            <div className="bg-primary-800 w-1/2 p-2 rounded-lg flex">
                <label htmlFor="searchbox" className="mr-2">
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" fixedWidth/>
                </label>
                <input type="text" name="search-box" id="searchbox" placeholder={text}
                        className="outline-none w-full bg-transparent placeholder-gray-500"
                        onChange={handleChange}/>
            </div>
            {/* <button className="bg-primary-100 text-white px-4 py-1 rounded-lg hover:bg-primary-200 duration-100">Search</button> */}
        </div>
    );
}
 
export default SearchBox;