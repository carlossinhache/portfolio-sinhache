import { useCatImage } from "../hooks/useCatImage.js";
import { useCatFact } from "../hooks/useCatFact.js";

const CatFacts = () => {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleGetNewFact = async () => {
    refreshFact();
  };
  return (
    <main className="max-w-[800px] w-full h-screen mx-auto text-center bg-white catFacMain">
      <button onClick={handleGetNewFact} className="glowingbtn">
        Get new fact
      </button>

      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          className="catFacImg"
          src={imageUrl}
          alt={`Image extracted using the first three words for ${fact}`}
        />
      )}
    </main>
  );
};

export default CatFacts;
