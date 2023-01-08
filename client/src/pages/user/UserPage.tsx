import React from "react";
import { useParams } from "react-router-dom";
import { Layout, Main, Navbar } from "../../components";
import "./style.css";

const data = {
  id: "1",
  firstName: "John",
  lastName: "Doe",
  nickname: "Johnny",
  email: "negr@negr.c",
  description: "I am a very cool person",
  picture: "avatar.jpg",
  followers: 0,
  posts: [
    {
      postId: "2",
      title: "Post 2",
      picture: "https://picsum.photos/745/300",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      like: 10,
      timestamp: 1620000000,
    },
  ],
};

const UserPage = () => {
  const { userId } = useParams();

  return (
    <Layout>
      <Navbar />
      <Main className="relative">
        <img
          className="absolute select-none"
          src="accountBackground.svg"
          alt="My Happy SVG"
        />
        <div className="relative z-10 grid place-items-center mt-[10rem]">
          <div className="user-picture rounded-full h-36 aspect-square">
            <img src={data.picture} alt="user picture" />
          </div>
          <div className="user-info text-center">
            <h2 className="text-5xl">{data.nickname}</h2>
            <p className="text-xl">
              {data.firstName} {data.lastName}
            </p>
            <div className="account-info flex gap-4 items-center">
              <span>{data.followers} followers</span>
              <button className="bg-gradient px-4 py-[2px] rounded uppercase">
                follow
              </button>
            </div>
            <p className="description text-current-accent">
              {data.description}
            </p>
          </div>
          <div className="posts-wrapper mt-4">
            <h3 className="uppercase text-secondary-dark font-semibold text-xl">posts</h3>
          </div>
        </div>
      </Main>
    </Layout>
  );
};

export default UserPage;
