import { useCollection } from "../../hooks/useCollection";

// components
import InstCard from "./InstCard";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

const InstCardList = () => {
  const {
    documents: cards,
    error,
    isPending,
  } = useCollection("homepage_cards");

  return (
    <div className="mb-10 flex flex-col gap-3">
      {isPending && <Loading loadingHeight={"h-screen"} loadingSize={50} />}
      {error && <Error error={error} />}
      {cards &&
        cards.map((card) => (
          <InstCard
            key={card.id}
            cardProfileImage={card.cardProfileImage}
            cardProfileName={card.cardProfileName}
            showVerify={card.showVerify}
            likeNbr={card.likeNbr}
            comments={card.comments}
            cardImage={card.cardImage}
          />
        ))}
    </div>
  );
};

export default InstCardList;
