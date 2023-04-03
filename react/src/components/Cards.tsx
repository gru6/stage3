import React, { useEffect, useState } from "react";

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

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    const searchText = JSON.parse(
      JSON.stringify(localStorage.getItem("input"))
    );
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=53a635ed164897772597b0b398e2259a&text=${searchText}&format=json&nojsoncallback=1`
    )
      .then((res) => res.json())
      /*    .then((data) => {
        console.log("data", data.photos.photo);
        return data;
      }) */
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
      <div className="cards-container">
        {items &&
          items
            .map((item) => {
              return (
                <img
                  key={item.id}
                  src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
                  alt={`${item.title}`}
                />
              );
            })
            .slice(0, 10)}
      </div>
    );
  }
};
