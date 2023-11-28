import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, currentUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const user: User | null = await currentUser();

  return (
    <div className="flex w-screen items-center justify-between p-6">
      <div>
        <Link
          className="text-2xl font-bold text-blue-500 no-underline"
          href={"/"}
        >
          AiFolk
        </Link>
      </div>
      <div className="text-blue-500 font-semibold text-lg">
        {user ? (
          <div className="flex flex-row gap-x-4 items-center">
            <Link href={"/ai-folks"}>
              <Button variant={"outline"}> Open App</Button>
            </Link>
            <UserButton />
          </div>
        ) : (
          <SignInButton />
        )}
      </div>
    </div>
  );
};

export default Navbar;
