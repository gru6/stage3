import { HomePageCard } from "types/interfaces";

interface ShortCardProps {
  items: HomePageCard[];
  selectedItemId: string | null;
  handleOpenModal: (itemId: string) => void;
}

export default function ShortCard(props: ShortCardProps) {
  const { items, selectedItemId, handleOpenModal } = props;
  return (
    <>
      <div className="cards-container">
        {items &&
          items.map((item) => {
            const isSelected = item.id === selectedItemId;
            return (
              <div
                className={`card ${isSelected ? " selected" : ""}`}
                key={item.id}
                onClick={() => handleOpenModal(item.id)}
              >
                <div>views: {(+item.views).toLocaleString("ru-RU")}</div>
                <div>
                  Original size: {item.width_o} x {item.height_o} px
                </div>
                <div className="card-photo">
                  <img
                    style={{ height: "80%" }}
                    src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
                    alt={`${item.title}`}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
