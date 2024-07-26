import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

export default function AvatarDemo() {
  return (
    <>
      <h2 className="text-2xl font-semibold">Avatar</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The Avatar component is used to represent a user or entity.
      </p>
      <ul className="list-disc pl-5">
        <li>It can be an image or a fallback text.</li>
        <li>It can be a square or a circle.</li>
      </ul>
      <div className="flex space-x-4 py-4">
        <Avatar>
          <AvatarImage src="https://github.com/robinpfp.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/robinpfpng" />
          <AvatarFallback>RP</AvatarFallback>
        </Avatar>
      </div>
    </>
  );
}
