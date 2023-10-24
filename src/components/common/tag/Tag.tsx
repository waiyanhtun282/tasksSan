import React from "react";

interface Tag {
  tagTitle: string;
  className: string;
  selectedTag: () => void;
  selected: () => void;
}

const Tag = ({ tagTitle, className, selectTag, selected }: Tag) => {
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4ca" },
    Javascript: { backgroundColor: "#fdd12c" },
    React: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      type="button"
      className={className}
      style={selected ? tagStyle[tagTitle] : tagStyle.default}
      onClick={() => selectTag(tagTitle)}
    >
      {tagTitle}
    </button>
  );
};

export default Tag;
