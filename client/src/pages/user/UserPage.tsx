import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Layout, Main, Navbar } from "../../components";
import {
  connector,
  getPicture,
  getUserPicture,
} from "../../helpers/connection";

const UserPage = () => {
  const { username } = useParams();
  const [user, setUser] = React.useState<any>(null);

  const getFollowers = async (id: string) => {
    try {
      const res = await connector.get(`/follow/${id}`);
      return res.data.length;
    } catch (error) {
      console.log(error);
      return 0;
    }
  };

  const getPosts = async (id: string) => {
    try {
      const res = await connector.get(`/post/user/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    try {
      connector.get(`/search?search=${username}`).then((res: any) => {
        res.data.forEach(async (element: any) => {
          if (element.nickname === username) {
            element.picture = getUserPicture(element.picture);
            element.followers = await getFollowers(element.userId);
            // element.posts = await getPosts(element.userId)
            setUser(element);
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Layout>
      <Navbar />
      <Main className="relative">
        <img
          className="absolute select-none"
          src={getPicture("accountBackground.svg")}
          alt="My Happy SVG"
        />
        <div className="relative z-10 grid place-items-center mt-[10rem]">
          <div className="user-picture rounded-full h-36 aspect-square">
            <img src={user?.picture} alt="user picture" />
          </div>
          <div className="user-info text-center ">
            <h2 className="text-5xl py-2">{user?.nickname}</h2>
            <p className="text-xl">
              {user?.firstName} {user?.lastName}
            </p>
            <div className="account-info flex gap-4 items-center mt-1">
              <Link to="following">
                <span>{user?.followers} following</span>
              </Link>
              <button className="bg-gradient px-4 py-[2px] rounded uppercase">
                follow
              </button>
            </div>
            <p className="description text-current-accent">
              {user?.description}
            </p>
          </div>
          {/* <div className="posts-wrapper mt-4">
            <h3 className="uppercase text-secondary-dark font-semibold text-xl">
              posts
            </h3>
            {
              user?.posts?.map((post:any) => {
                return (
                  <Post key={post.postId} {...post} />
                )
              })  
            }
          </div> */}
        </div>
      </Main>
    </Layout>
  );
};

const Post = ({}: any) => {
  return <></>;
};

export default UserPage;
