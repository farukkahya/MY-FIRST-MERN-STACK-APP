import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deletePostAction } from "../redux/acitons/post";

const Card = ({ post }) => {
  const dispatch = useDispatch();
  const deletePost = (id) => {
    dispatch(deletePostAction(id))
    toast("Silme işlemi başarılı", {
      position: "top-right",
      autoClose: 5000,
      });
  }
  const updatePost = (id) => {
    dispatch({type:"MODAL", payload: {open: true, updateId: id}})

  }
  return (
    <div className="relative w-1/4 border p-3 rounded-md bg-gray-50 mx-5">
      <div className="text-2xl font-bold text-indigo-400">{post?.title}</div>
      <div className="mx-1 text-lg">{post?.description}</div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">{post?.user}</span>
        <span className="text-xs text-gray-500">
          {(post?.date)?.substring(0, 10)}
        </span>
      </div>
      <div className="absolute -top-3 -right-3 flex items-center space-x-3">
        <AiOutlineDelete onClick={()=>deletePost(post._id)} size={28} className={'bg-red-500 text-white rounded-full p-1 cursor-pointer'}/>
        <AiOutlineEdit onClick={()=>updatePost(post._id)} size={28} className={'bg-blue-500 text-white rounded-full p-1 cursor-pointer'}/>
      </div>
    </div>
  );
};

export default Card;
