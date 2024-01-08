import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorcontainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <input style={{ display: "none" }} type="file" name="" id="file" />
          <div className="buttons">
            <button>Save as draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" id="lifestyle" value="lifestyle" />
            <label htmlFor="lifestyle">LifeStyle</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" id="work" value="work" />
            <label htmlFor="work">Work</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              id="technology"
              value="technology"
            />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" id="food" value="food" />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
