import { CardDetailsProps } from "types/interfaces";

function getDate(timestamp: string) {
  const date = new Date(+timestamp * 1000).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return date;
}

export const CardDetails: React.FC<CardDetailsProps> = ({ item }) => {
  return (
    <div className="card-details">
      <img
        src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
        alt={item.title}
      />
      <div className="card-text">
        <div>Title: {item.title}</div>
        <div>Owner: {item.ownername}</div>
        <div>Upload: {getDate(item.dateupload!)}</div>
        <div>Last update: {getDate(item.lastupdate!)}</div>
        <div>Format: {item.originalformat}</div>
        {item.description?._content && (
          <div className="card-description">
            `Description: ${item.description._content}`
          </div>
        )}
        <div>
          Original size: {item.width_o} x {item.height_o} px
        </div>
        <div>Tags: {item.tags}</div>
        <div>views: {(+item.views!).toLocaleString("ru-RU")}</div>
      </div>
    </div>
  );
};
