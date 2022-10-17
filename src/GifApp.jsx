import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball']);

  const handleAddCategory = (value) => {
    setCategories([value, ...categories]);
  };

  const handleReset = () => {
    setCategories(categories.filter((item) => item !== item));
  };

  const handleRemove = (category) => {
    setCategories(categories.filter((item) => item !== category));
  };

  return (
    <>
      {/* titulo */}
      <div className="container">
        <h1 className="text-center text-light p-5 red">GIF APP</h1>

        {/* input */}
        <div className="row d-flex justify-content-center">
          <AddCategory addCategory={handleAddCategory} />
        </div>
        <button
          className=" my-2 btn btn-danger w-100 mx-2"
          data-testid="bReset"
          onClick={handleReset}
        >
          Reset
        </button>
        {/* listado */}

        {categories.length === 0 ? (
          <div className="alert alert-warning text-center" role="alert">
           No hay gifs para mostrar!
          </div>
        ) : (
          categories.map((category) => (
            <GifGrid
              key={category}
              category={category}
              handleRemove={handleRemove}
            />
          ))
        )}
      </div>
    </>
  );
};
