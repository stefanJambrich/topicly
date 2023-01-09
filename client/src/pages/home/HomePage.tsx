import React, { useEffect } from "react";
import { Navbar, SideBar, Main } from "../../components";
import { Layout } from "../../components";
import GradientBorder from "../../components/gradientBorder/GradientBorder";
import { ButtonGradient, ButtonOutline } from "../../components/utills/Button";
import { IoImagesOutline } from "react-icons/io5";
import { GrEmoji } from "react-icons/gr";
import { IoIosSend, IoIosBookmark } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { connector } from "../../helpers/connection";

const posts = [
  {
    postId: "1",
    title: "Post 1",
    picture: "https://picsum.photos/651/300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    like: 10,
    timestamp: 1620000000,
    user: {
      userId: "1",
      username: "user1",
      picture: "https://picsum.photos/200/300",
    },
    comments: [
      {
        commentId: "1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        timestamp: 1620000000,
        user: {
          userId: "1",
          username: "user1",
          picture: "https://picsum.photos/200/300",
        },
      },
      {
        commentId: "2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        timestamp: 1620000000,
        user: {
          userId: "1",
          username: "user1",
          picture: "https://picsum.photos/200/300",
        },
      },
    ],
  },
  {
    postId: "2",
    title: "Post 2",
    picture: "https://picsum.photos/745/300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    like: 10,
    timestamp: 1620000000,
    user: {
      userId: "1",
      username: "user1",
      picture: "https://picsum.photos/200/300",
    },
    comments: [
      {
        commentId: "1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        timestamp: 1620000000,
        user: {
          userId: "1",
          username: "user1",
          picture: "https://picsum.photos/200/300",
        },
      },
      {
        commentId: "2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        timestamp: 1620000000,
        user: {
          userId: "1",
          username: "user1",
          picture: "https://picsum.photos/200/300",
        },
      },
    ],
  },
  {
    postId: "2",
    title: "Post 2",
    picture: "/zabicka.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    like: 10,
    timestamp: 1620000000,
    user: {
      userId: "1",
      username: "user1",
      picture: "https://picsum.photos/200/300",
    },
    comments: [
      {
        commentId: "1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        timestamp: 1620000000,
        user: {
          userId: "1",
          username: "user1",
          picture: "https://picsum.photos/200/300",
        },
      },
      {
        commentId: "2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        timestamp: 1620000000,
        user: {
          userId: "1",
          username: "user1",
          picture: "https://picsum.photos/200/300",
        },
      },
    ],
  },
  {
    postId: "2",
    title: "Post 2",
    picture: "https://picsum.photos/745/300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    like: 10,
    timestamp: 1620000000,
    user: {
      userId: "1",
      username: "user1",
      picture: "https://picsum.photos/200/300",
    },
    comments: [
      {
        commentId: "1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        timestamp: 1620000000,
        user: {
          userId: "1",
          username: "user1",
          picture: "https://picsum.photos/200/300",
        },
      },
      {
        commentId: "2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        timestamp: 1620000000,
        user: {
          userId: "1",
          username: "user1",
          picture: "https://picsum.photos/200/300",
        },
      },
    ],
  },
];

const trending = [
  {
    id: "1",
    tag: "javascript",
    numberOfPosts: 6593,
  },
  {
    id: "2",
    tag: "react",
    numberOfPosts: 6593,
  },
  {
    id: "3",
    tag: "vue",
    numberOfPosts: 6593,
  },
  {
    id: "4",
    tag: "angular",
    numberOfPosts: 6593,
  },
  {
    id: "5",
    tag: "node",
    numberOfPosts: 6593,
  },
  {
    id: "6",
    tag: "python",
    numberOfPosts: 6593,
  },
];

const recomendedUsers = [
  {
    id: "1",
    username: "user1",
    picture: "https://picsum.photos/200/300",
  },
  {
    id: "2",
    username: "user2",
    picture: "https://picsum.photos/200/300",
  },
];

const HomePage = () => {
  useEffect(() => {
    try {
      // Misto GET ma byt post, protoze stefan tam chce body a na servery ma GET, opiceee, takze zadnej feed. Zkousel jsem to dat na POST a stejne to nejde
      connector
        .get("/post/feed", {
          userId: localStorage.getItem("userId"),
        })
        .then((res: any) => {
          console.log(res.data);
        });
    } catch (error: any) {
      console.error(error);
    }
  }, []);

  return (
    <Layout>
      <Navbar className="hidden md:flex" />

      <Main className="ml-14 mr-4 overflow-scroll scrollbar-hide py-3 ">
        <Input />
        <div className="posts grid gap-6">
          {posts.map((post, i) => (
            <Post key={i} {...post} />
          ))}
        </div>
      </Main>

      <SideBar className="w-1/5 ml-5 mr-4 my-3 grid gap-3">
        <GradientBorder className="rounded-xl">
          <div className="rounded-xl w-full h-full px-3 py-2 bg-primary-accent">
            <h3>Trending</h3>
            <div>
              {trending.map((tag, i) => (
                <Tag key={i} {...tag} />
              ))}
            </div>
          </div>
        </GradientBorder>
        <GradientBorder className="rounded-xl">
          <div className="rounded-xl w-full h-full px-3 py-2 bg-primary-accent">
            <h3>Recomended for you</h3>
            <div>
              {recomendedUsers.map((user, i) => (
                <RecomendedUser key={i} {...user} />
              ))}
            </div>
          </div>
        </GradientBorder>
      </SideBar>
    </Layout>
  );
};

const Input = () => {
  return (
    <div className="mb-9 relative overflow-visible">
      <GradientBorder className="rounded-xl ">
        <input
          type="text"
          className="input rounded-xl py-4 border-none"
          placeholder="What are you thinking about?"
        />
      </GradientBorder>
      <div className="absolute right-5 top-10 flex gap-4 h-12">
        <div className="flex gap-2 h-full">
          <ButtonGradient circle>
            <IoImagesOutline size={20} />
          </ButtonGradient>
          <ButtonGradient circle>
            <GrEmoji size={20} />
          </ButtonGradient>
        </div>
        <ButtonGradient>post</ButtonGradient>
      </div>
    </div>
  );
};

const Post = ({
  title,
  picture,
  description,
  like,
  timestamp,
  user,
  comments,
}: any) => {
  return (
    <div className="post flex gap-3">
      <div className="user-post flex-grow">
        <GradientBorder className="rounded-xl">
          <div className="w-full h-full bg-primary-accent rounded-xl px-5 py-3 grid gap-3 pb-6">
            <div className="picture rounded-xl overflow-hidden mx-auto w-fit">
              <img
                src={picture}
                alt="picture"
                className="rounded-xl object-scale-down h-56 w-full transition-all duration-700 ease-in-out"
              />
            </div>
            <div className="user-description relative  overflow-visible">
              <GradientBorder className="rounded-l-full">
                <div className="w-full h-full bg-primary-accent-2 flex rounded-l-full">
                  <GradientBorder className="rounded-full p-[2px] relative right-[1px]">
                    <div className="user-picture z-15 w-full h-full bg-primary-accent rounded-full p-1">
                      <img
                        src={user.picture}
                        alt="user"
                        className="rounded-full aspect-square h-16"
                      />
                    </div>
                  </GradientBorder>
                  <div className="user-descritption pl-2 text-ellipsis">
                    <p>{user.username}</p>
                    {description}
                  </div>
                </div>
              </GradientBorder>

              <div className="absolute right-5 top-[55px] flex gap-4 h-10">
                <div className="flex gap-2 h-full">
                  <ButtonGradient className="p-[3px]" circle>
                    <IoIosSend size={15} />
                  </ButtonGradient>
                  <ButtonGradient className="p-[3px]" circle>
                    <IoIosBookmark size={15} />
                  </ButtonGradient>
                </div>
                <ButtonOutline className="p-[3px]">
                  <FaRegHeart /> {like}
                </ButtonOutline>
              </div>
            </div>
          </div>
        </GradientBorder>
      </div>
      <div className="comments h-full w-1/4">
        <GradientBorder className="h-full rounded-xl">
          <div className="rounded-xl bg-primary-accent w-full h-full  flex flex-col justify-between">
            <div className="comments-messages flex flex-col gap-3 px-3 py-4">
              {comments.map((comment: any, i: number) => (
                <Comment key={i} {...comment} />
              ))}
            </div>
            <div className="comments-new relative top-[1px]">
              <div className="bg-gradient h-[1px]"></div>
              <div className="px-4 py-3 flex justify-between text-sm h-fit">
                <textarea
                  name="multiliner"
                  className="bg-primary-accent w-full outline-none resize-none"
                  placeholder="Add a comment..."
                  wrap="hard"
                  rows={1}
                  onChange={(e) => {
                    const textarea = e.target as HTMLTextAreaElement;
                    console.log(textarea.scrollHeight);
                    textarea.style.height = "0";
                    if (textarea.scrollHeight < 100) {
                      textarea.style.height = textarea.scrollHeight + "px";
                    } else {
                      textarea.style.height = "100px";
                    }
                  }}
                ></textarea>
                <button className="px-2 py-1 h-fit min-w-fit text-current-accent bg-primary-accent hover:brightness-125 rounded-md self-end">
                  Post
                </button>
              </div>
            </div>
          </div>
        </GradientBorder>
      </div>
    </div>
  );
};

const Comment = ({ description, timestamp, user }: any) => {
  return (
    <>
      <div className="comment flex">
        <span className="comment-picture aspect-square rounded-full h-fit relative top-2">
          <img
            src={user.picture}
            alt="user"
            className="rounded-full aspect-square h-11"
          />
        </span>
        <div className="pl-1 leading-4">
          <p className="">{user.username}</p>
          <p className="text-sm text-current-accent">{description}</p>
        </div>
      </div>
    </>
  );
};

const Tag = ({ tag, numberOfPosts }: any) => {
  return (
    <div className="text-current-accent text-sm leading-4 py-1 flex justify-between flex-row">
      <div>
        <p className="text-current-accent-2 text-xs">{tag} - Trending</p>
        <p className="font-bold">#{tag}</p>
        <p className="text-current-accent-2 text-xs">
          {new Intl.NumberFormat("fr-FR").format(numberOfPosts)} Posts
        </p>
      </div>
      <button className="text-current hover:text-red-300">
        <ImBin size={20} />
      </button>
    </div>
  );
};

const RecomendedUser = ({ username, picture }: any) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <div className="user-picture bg-primary-accent rounded-full p-1">
          <img
            src={picture}
            alt="user"
            className="rounded-full aspect-square h-14"
          />
        </div>
        <p className="text-lg">{username}</p>
      </div>
      <button className="bg-gradient rounded-xl p-[1px]">
        <div className="rounded-xl px-7 py-2 bg-primary-accent text-current-accent-2 uppercase font-semibold">
          follow
        </div>
      </button>
    </div>
  );
};

export default HomePage;
