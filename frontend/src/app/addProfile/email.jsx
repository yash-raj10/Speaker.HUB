"use server";

import React from "react";
import { currentUser } from "@clerk/nextjs";

export default async function email() {
  const user = await currentUser();
  console.log(user.emailAddresses[0].emailAddress);

  return <div>{user.emailAddresses[0].emailAddress}</div>;
}
