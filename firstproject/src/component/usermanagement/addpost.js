import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const modules = {
  history: {
    delay: 2000,
    maxStack: 500,
    userOnly: true,
  },
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    [{ direction: "rtl" }],
    ["link", "image", "video"],
    [{ header: 1 }, { header: 2 }],
    ["clean"],
  ],
};

export const Addpost = () => {
  const [value, setValue] = useState("");
  return (
    <div className="Container w-50 mx-auto my-auto ">
      <div className="form-outline ql-editor">
        <form>
          <ReactQuill
            theme="snow"
            modules={modules}
            value={value}
            onChange={setValue}
          />
          <center>
            <button type="submit" className="btn btn-primary mt-3">
              Add Post
            </button>
          </center>
        </form>
        <section
          dangerouslySetInnerHTML={{ __html: value }}
          className="SearchResult-body"
        />
      </div>
    </div>
  );
};
