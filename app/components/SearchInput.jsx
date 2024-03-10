Function

function SearchInput({ value, onChange }) {
    return (
        <input
            className={`bg-red-500`}
            type="text"
            value={value}
            onChange={onChange}
        />
    );
}

export default SearchInput;
