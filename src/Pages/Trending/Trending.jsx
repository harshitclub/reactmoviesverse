import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomPagination from "../../components/Pagination/Pagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import "./Trending.css";

const Trending = () => {
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  // hooks for content
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  // function to fetch data from api (axios)
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    setContent(data.results);
  };

  // useEffect Hook to run the fetch function at the starting of website
  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <ScrollToTopOnMount />
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {
          // extracting the data from the api
          content &&
            content.map((c) => (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type={c.media_type}
                vote_average={c.vote_average}
              />
            ))
        }
      </div>
      {/* pagination functionality */}
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
