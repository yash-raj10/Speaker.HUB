"use client";

import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import LM from "./LM";
import useLoginModel from "../../hooks/useLoginModel";

const LoginModel = ({}) => {
  const [isLoading, setIsLoading] = useState(false);
  const loginModel = useLoginModel();
  // useEffect(() => {
  //   setShowModel(isOpen);
  // }, [isOpen]);

  // const handleClose = useCallback(() => {
  //   if (disabled) {
  //     return;
  //   }
  //   setShowModel(false);
  //   setTimeout(() => {
  //     onClose();
  //   }, 300);
  // }, [disabled, onClose]);

  // const handleSubmit = useCallback(() => {
  //   if (disabled) {
  //     return;
  //   }
  //   onSubmit();
  // }, [disabled, onSubmit]);

  // if (!isOpen) {
  //   return null;
  // }

  return (
    <LM
      disabled={isLoading}
      isOpen={loginModel.isOpen}
      onClose={loginModel.onClose}
      // onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default LoginModel;
