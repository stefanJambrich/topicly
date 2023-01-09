import React, { useRef, useState, useEffect } from "react";
import { IoImageOutline } from "react-icons/io5";
import { Layout, Main, Navbar } from "../../components";
import GradientBorder from "../../components/gradientBorder/GradientBorder";
import { ButtonGradient } from "../../components/utills/Button";
import { IoIosSearch } from "react-icons/io";
import {
  connector,
  getPicture,
  getUserPicture,
} from "../../helpers/connection";
import { Link } from "react-router-dom";
const SearchPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    connector.get(`/search?search=${localStorage.getItem("searchQuerry")}`).then((res: any) => setResults(res.data));
  }, []);

  const handleSearch = async () => {
    const searchQuerry = inputRef.current?.value as string;
    localStorage.setItem("searchQuerry", searchQuerry)
    const res = await connector.get(`/search?search=${searchQuerry}`);
    console.log(res.data);
    setResults(res.data);
  };

  return (
    <Layout>
      <Navbar />
      <Main className="ml-14 mr-9 verflow-scroll scrollbar-hide py-3">
        <div className="search-input-wrapper max-w-[50rem]">
          <Input inputRef={inputRef} handleSearch={handleSearch} />
        </div>
        <div className="results grid gap-5 max-w-[50rem]">
          {results?.map((result: any, i) => {
            if (result.picture) result.picture = getPicture("stock.jpg");
            else result.picture = getPicture(result.picture);
            // result.picture = getUserPicture(result.picture)
            return <Result key={i} {...result} />;
          })}
        </div>
      </Main>
    </Layout>
  );
};

const Input = ({ inputRef, handleSearch }: any) => {
  const handleChange = (event: any) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="mb-9 relative overflow-visible">
      <GradientBorder className="rounded-xl ">
        <div className="rounded-xl bg-primary-accent flex items-center px-2">
          <input
            type="text"
            className="input rounded-xl py-4 border-none"
            placeholder="Find users"
            onKeyDown={handleChange}
            ref={inputRef}
          />
          <IoIosSearch
            className="mr-5 text-current-accent hover:brightness-125"
            size={40}
            onClick={handleSearch}
          />
        </div>
      </GradientBorder>
    </div>
  );
};

const Result = ({
  firstName,
  lastName,
  nickname,
  picture,
  userId: followerId,
}: any) => {
  const handleFollow = async () => {
    const res = await connector.post("/follow", {
      userId: localStorage.getItem("userId"),
      followerId,
    });
  };

  return (
    <GradientBorder className="rounded-xl">
      <div className="rounded-xl w-full h-full bg-primary-accent px-4 py-3 flex hover:bg-primary-accent-2 justify-between items-center">
        <Link to={`/${nickname}`} className="flex-grow">
          <div className="flex ">
            <div className="user-picture rounded-full h-14 aspect-square">
              <img src={picture} alt="user picture" />
            </div>
            <div className="bg-separator h-full w-[2px] mx-4"></div>
            <div>
              <h3 className="text-2xl">{nickname}</h3>
              <p className="text-current-accent">
                {firstName} {lastName}
              </p>
            </div>
          </div>
        </Link>
        <button
          className="bg-gradient px-4 py-[2px] rounded uppercase"
          onClick={handleFollow}
        >
          follow
        </button>
      </div>
    </GradientBorder>
  );
};

export default SearchPage;
