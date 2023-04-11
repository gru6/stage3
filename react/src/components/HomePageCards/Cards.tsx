import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import "./Cards.css";
import { CardDetails } from "./CardDetails";
import { HomePageCard } from "types/interfaces";
import ShortCard from "./ShortCard";

export const CreateCards: React.FC = () => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<HomePageCard[]>([]);
  const [isModalOpen, setModalStatus] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  function handleOpenModal(itemId: string) {
    setSelectedItemId(itemId);
    setModalStatus(true);
  }

  function handleCloseModal() {
    setSelectedItemId(null);
    setModalStatus(false);
  }

  useEffect(() => {
    const searchText = JSON.parse(
      JSON.stringify(localStorage.getItem("input"))
    );
    fetch(
      `https://api.flickr.com/services/rest/?safe_search=safe&method=flickr.photos.search&api_key=53a635ed164897772597b0b398e2259a&per_page=21&content_type=1&sort=relevance&license=1,2,3,4,5,6&media=photos&text=${searchText}&extras=description,date_upload,owner_name,icon_server,original_format,last_update,tags,views,url_o&format=json&nojsoncallback=1`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data.photos.photo);
        return data;
      })
      .then(
        (data) => {
          setIsLoaded(true);
          setItems(data.photos.photo);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="loading-indicator">
        Loading...
        <div className="spinner"></div>
      </div>
    );
  } else if (items.length > 0) {
    return (
      <>
        <ShortCard
          items={items}
          selectedItemId={selectedItemId}
          handleOpenModal={handleOpenModal}
        />

        <Modal
          isOpen={isModalOpen}
          onClose={() => handleCloseModal()}
          InnerComponent={
            selectedItemId ? (
              <CardDetails
                item={items.find((item) => item.id === selectedItemId)!}
              />
            ) : null
          }
        ></Modal>
      </>
    );
  } else {
    return <div>Какой-то странный запрос, попробуй еще раз...</div>;
  }
};
