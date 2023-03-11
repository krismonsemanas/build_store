import React from "react";
import { GuestLayoutProps } from "@/types/layouts";
import { Head } from "@inertiajs/react";
import SectionFullScreen from "@/components/SectionFullScreen";
import CardBox from "@/components/CardBox";
const GuestLayout = ({ children }: GuestLayoutProps) => {
  return (
    <SectionFullScreen bg="purplePink">
      <Head title="Login" />
      <CardBox className="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl">
        {children}
      </CardBox>
    </SectionFullScreen>
  );
};

export default GuestLayout;
