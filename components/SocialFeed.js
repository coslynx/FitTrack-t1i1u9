"use client";

import React, { useState } from "react";
import { useStore } from "@/store";

const SocialFeed = () => {
  const { user, posts, addPost } = useStore((state) => state);
  const [newPost, setNewPost] = useState({
    content: "",
  });

  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ ...newPost, userId: user.id });
    setNewPost({ content: "" });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold mb-2">Social Feed</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <textarea
            name="content"
            value={newPost.content}
            onChange={handleChange}
            placeholder="Share your progress, ask questions, or motivate others!"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
        >
          Post
        </button>
      </form>
      <div className="mt-4">
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mb-4">
              <p className="font-bold">{post.user.email}</p>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SocialFeed;