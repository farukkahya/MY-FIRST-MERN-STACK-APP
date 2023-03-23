import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createPostAction, updatePostAction } from "../redux/acitons/post";

const Modal = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.modal);
  const [postData, setPostData] = useState({
    user: "",
    title: "",
    description: "",
  });
  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
  const postCreate = () => {
    if (modal?.updateId) {
      dispatch(updatePostAction(modal?.updateId, postData));
      toast("Güncelleme işlemi başarılı", {
        position: "top-right",
        autoClose: 5000,
      });
    } else {
      dispatch(createPostAction(postData));
      toast("Ekleme işlemi başarılı", {
        position: "top-right",
        autoClose: 5000,
      });
    }
    dispatch({ type: "MODAL", payload: false });
    
  };
  return (
    <div className="w-full backdrop-blur-sm h-screen bg-opacity-50 bg-black fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
      <div className="bg-white w-1/3 p-2 rounded-md">
        <div
          onClick={() => dispatch({ type: "MODAL", payload: false })}
          className="flex items-center justify-between cursor-pointer"
        >
          <h1 className="text-2xl font-bold">{modal?.updateId ? "POST GÜNCELLE": "POST PAYLAŞ"}</h1>
          <AiOutlineClose size={25} />
        </div>
        <div className="my-4 flex flex-col space-y-3">
          <input
            value={postData.user}
            onChange={handleChange}
            name="user"
            className="input-style"
            type="text"
            placeholder="User"
          />
          <input
            value={postData.title}
            onChange={handleChange}
            name="title"
            className="input-style"
            type="text"
            placeholder="Title"
          />
          <input
            value={postData.description}
            onChange={handleChange}
            name="description"
            className="input-style"
            type="text"
            placeholder="Description"
          />
        </div>
        <div
          onClick={postCreate}
          className="w-full p-2 text-center bg-indigo-600 text-white cursor-pointer hover:bg-indigo-800"
        >
          {modal?.updateId ? "GÜNCELLE" : "PAYLAŞ"}
        </div>
      </div>
    </div>
  );
};

export default Modal;
