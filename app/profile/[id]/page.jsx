"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userId = searchParams.get("id");

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/users/${params?.id.toString()}`);
      const data = await response.json();
      setUser(data);
    };
    const fetchPost = async () => {
      const response = await fetch(`/api/users/${params?.id.toString()}/posts`);
      const data = await response.json();
      setPosts(data);
    };
    if (params?.id) {
      fetchUser();
      fetchPost();
      console.log(user);
    }
  }, [params?.id]);

  return <Profile name={user?.username} image={user?.image} desc={`Welcome to ${user?.username}'s profile page`} data={posts} />;
};

export default MyProfile;
