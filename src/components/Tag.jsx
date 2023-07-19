import PropTypes from "prop-types";
const Tag = ({ tag, setTags, tagList }) => {
    const removeTag = (e) => {
        const filteredTags = tagList.filter(
            (tag) => e.target.previousElementSibling.innerHTML !== tag
        );
        setTags([...filteredTags]);
    };

    return (
        <div className="filterTag flex justify-between items-center min-w-[80px] my-2">
            <span className="w-3/4 h-full flex justify-center items-center px-4 py-1">{tag}</span>
            <span
                onClick={removeTag}
                className="flex justify-center items-center font-bold bg-primary-DarkCyan text-white hover:bg-neutral-darkerGrayCyan h-full w-1/4 cursor-pointer"
            >
                X
            </span>
        </div>
    );
};

Tag.propTypes = {
    tag: PropTypes.string,
    setTags: PropTypes.func,
    tagList: PropTypes.array,
};

export default Tag;
