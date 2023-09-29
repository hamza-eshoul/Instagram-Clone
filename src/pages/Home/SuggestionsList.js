import Suggestion from "./Suggestions";

const suggestions_list = [
  {
    id: 1,
    name: "cristiano",
    image:
      "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Fcristiano.jpg?alt=media&token=10c2540b-b6bb-4ef1-9ba3-9e563f949d26",
  },
  {
    id: 2,
    name: "elonmusk",
    image:
      "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Felonmusk.jpg?alt=media&token=8759d492-888e-4f2e-8097-9f9c15021521",
  },
  {
    id: 3,
    name: "ozark",
    image:
      "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Fozark.jpg?alt=media&token=2bbef0c8-f820-4a9f-959e-237b0be75ecc",
  },
  {
    id: 4,
    name: "traversymedia",
    image:
      "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Ftraversymedia.jpg?alt=media&token=62c24e11-22b3-4606-b323-f43050a29e22",
  },
  {
    id: 5,
    name: "theodinproject",
    image:
      "https://firebasestorage.googleapis.com/v0/b/instagram-clone-c9891.appspot.com/o/profiles%2Ftheodinproject.jpg?alt=media&token=54cae2b0-0757-45e4-850f-7146fa5926a9",
  },
];

const SuggestionsList = () => {
  return (
    <section className="mb-3.5 flex flex-col gap-3">
      {suggestions_list.map((suggestion) => (
        <Suggestion
          key={suggestion.id}
          suggestionName={suggestion.name}
          suggestionImage={suggestion.image}
        />
      ))}
    </section>
  );
};

export default SuggestionsList;
