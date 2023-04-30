import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./Cards.css";
import { CardDetails } from "./CardDetails";
import ShortCard from "./ShortCard";

import { useSelector } from "react-redux";
import { RootState } from "store";

import { useGetCardsQuery } from "../../features/apiSlice";
import { HomePageCard } from "types/interfaces";

export const CreateCards: React.FC = () => {
  const [isModalOpen, setModalStatus] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const { value: searchValue } = useSelector(
    (state: RootState) => state.search
  );
  const { data, isFetching, error } = useGetCardsQuery(searchValue);
  const { photo = [] } = data?.photos || {};

  const handleOpenModal = (itemId: string) => {
    setSelectedItemId(itemId);
    setModalStatus(true);
  };

  const handleCloseModal = () => {
    setSelectedItemId(null);
    setModalStatus(false);
  };

  if (error) {
    if ("status" in error) {
      const errMsg =
        "error" in error ? error.error : JSON.stringify(error.data);

      return (
        <div>
          <div>An error has occurred:</div>
          <div>{errMsg}</div>
        </div>
      );
    }
  }

  if (isFetching) {
    return (
      <div className="loading-indicator">
        Loading...
        <div className="spinner"></div>
      </div>
    );
  } else if (photo.length > 0) {
    return (
      <>
        <ShortCard
          items={photo}
          selectedItemId={selectedItemId}
          handleOpenModal={handleOpenModal}
        />

        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          InnerComponent={
            selectedItemId ? (
              <CardDetails
                item={
                  photo.find(
                    (item: HomePageCard) => item.id === selectedItemId
                  )!
                }
              />
            ) : null
          }
        ></Modal>
      </>
    );
  } else return <div>Какой-то странный запрос, попробуй еще раз...</div>;
};
