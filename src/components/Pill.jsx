import PropTypes from "prop-types";

const Pill = ({ title }) => {
    return (
        <div
            className={`${
                title === "featured" ? "bg-neutral-darkerGrayCyan" : "bg-primary-DarkCyan"
            } pill`}
        >
            {title}
        </div>
    );
};

Pill.propTypes = {
    title: PropTypes.string,
};

export default Pill;
