"use client";

import { ApplicationConstant } from "@/constant/applicationConstant";
import NewCompany from "@/module/newCompany/NewCompany";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const NewCompanyPage = () => {
  const authClient = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!authClient.isAuthenticated && !authClient.user.isStaff) {
      router.push(ApplicationConstant.LOGIN_PATH);
    }
  }, []);

  return <NewCompany />;
};

export default NewCompanyPage;
