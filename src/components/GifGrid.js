
import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem }  from "./GifItem";

export const GifGrid = ({ category, handleRemove }) => {
  const { imagenes, loading } = useFetchGif(category);
  return (
    <>
      <div className="">
        <h3 className="text-center my-4 text-light red">{category} </h3>{" "}
      <button className="btn btn-danger w-25 " data-testid="bDelete" onClick={() => handleRemove(category)}>Eliminar</button>
      </div>
      <hr className="text-light" />
      <div className="d-flex flex-wrap">
        {loading ? (

          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>

        ) : (
          imagenes.map((imagen) => <GifItem key={imagen.id} {...imagen} />)
        )}
      </div>
    </>
  );
};
