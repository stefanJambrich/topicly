import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Main, Navbar } from "../../components";
import GradientBorder from "../../components/gradientBorder/GradientBorder";
import { connector, getPicture } from "../../helpers/connection";

const FollowingPage = () => {
  const [following, setFollowing] = useState<any>(null);

  useEffect(() => {
    connector
      .get(`/follow/${localStorage.getItem("userId")}`)
      .then((res: any) => {
        const following = res.data.map((item: any) => item.usersTable);
        setFollowing(following);
      });
  }, []);

  return (
    <Layout>
      <Navbar />
      <Main className="ml-14 mr-9 verflow-scroll scrollbar-hide py-3">
        <div className="max-w-[30rem] grid gap-5">
          {following?.length ? "" : <h3 className="text-2xl text-bold mt-10">You follow no users</h3>}
          {following &&
            following.map((item: any, i: number) => {
              if (item.picture) item.picture = getPicture("stock.jpg");
              else item.picture = getPicture(item.picture);
              return <User key={i} {...item} />;
            })}
        </div>
      </Main>
    </Layout>
  );
};

const User = ({ firstName, lastName, nickname, picture }: any) => {
  return (
    <Link to={`/${nickname}`} className="flex-grow">
      <GradientBorder className="rounded-xl">
        <div className="rounded-xl w-full h-full bg-primary-accent px-4 py-3 flex hover:bg-primary-accent-2 items-center">
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
      </GradientBorder>
    </Link>
  );
};

export default FollowingPage;
