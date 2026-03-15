import { useState, useReducer, useMemo, useCallback, useEffect } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import { favouritesReducer } from "../reducer/favouritesReducer";

export default function Gallery() {
  const { photos, loading, error } = useFetchPhotos();

  const [search, setSearch] = useState("");

  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    [],
    () => JSON.parse(localStorage.getItem("favourites")) || [],
  );

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase()),
    );
  }, [photos, search]);

  if (loading) return <p className="text-center">Loading...</p>;

  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search by author..."
        className="border p-2 w-full mb-4"
        onChange={handleSearch}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredPhotos.map((photo) => {
          const isFav = favourites.includes(photo.id);

          return (
            <div key={photo.id} className="border p-2">
              <img
                src={photo.download_url}
                alt={photo.author}
                className="w-full h-48 object-cover"
              />

              <div className="flex justify-between items-center mt-2">
                <p>{photo.author}</p>

                <button
                  onClick={() =>
                    dispatch({ type: "TOGGLE_FAV", payload: photo.id })
                  }
                >
                  {isFav ? "❤️" : "🤍"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
