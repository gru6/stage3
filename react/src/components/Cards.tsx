import React, { useEffect, useState } from "react";
import Modal from "./form/Modal";

type Item = {
  id: string;
  farm: number;
  server: string;
  secret: string;
  title: string;
};

type Error = {
  message: string;
};

export const CreateCards: React.FC = () => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const [isModalOpen, setModalStatus] = useState(false);

  const element = <div>Подробности!</div>;

  function handleOpenModal() {
    setModalStatus(true);
  }

  function handleCloseModal() {
    setModalStatus(false);
  }

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    const searchText = JSON.parse(
      JSON.stringify(localStorage.getItem("input"))
    );
    fetch(
      `https://api.flickr.com/services/rest/?safe_search=safe&method=flickr.photos.search&api_key=53a635ed164897772597b0b398e2259a&per_page=20&content_type=1&sort=relevance&license=1,2,3,4,5,6&media=photos&text=${searchText}&extras=description,date_upload,owner_name,o_dims,original_format,path_alias,tags,views&format=json&nojsoncallback=1`
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
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <>
        <div className="cards-container" onClick={handleOpenModal}>
          {items &&
            items.map((item) => {
              return (
                <div className="card" key={item.id}>
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

        <Modal
          isOpen={isModalOpen}
          onClose={() => handleCloseModal()}
          InnerComponent={element}
        ></Modal>
      </>
    );
  }
};
