"use client";

import React, { type FC } from "react";
import useSWR from "swr";
import { axiosInstance } from "@/utils/axios.util";
import { cn } from "@/utils/cn.util";

import { IoWarningSharp } from "@/components/icons/warning.icon";
import { RxReload } from "@/components/icons/loading.icon";
import { RiDownloadCloud2Fill } from "@/components/icons/download.icon";

interface Props {
  file: `/${string}`;
  className?: string | undefined;
}

export const DownloadCV: FC<Readonly<Props>> = ({ className, file }) => {
  const { error, isLoading, data, mutate } = useSWR(
    file,
    (url) =>
      axiosInstance
        .get("/sample.pdf", {
          responseType: "blob",
        })
        .then((data: any) => {
          const url = window.URL.createObjectURL(new Blob([data]));
          const link = document.createElement("a");
          link.href = url;
          const fileName = file.split("/").pop() || "download";
          link.setAttribute("download", fileName);
          document.body.appendChild(link);
          link.click();

          link.remove();
          window.URL.revokeObjectURL(url);
        }),
    {
      revalidateOnMount: false,
      revalidateIfStale: false,
      revalidateOnFocus: false,
    },
  );

  return (
    <button
      className={cn(className)}
      disabled={isLoading}
      onClick={() => mutate()}
    >
      {!isLoading && (
        <>
          <RiDownloadCloud2Fill className="w-5 h-5 mr-2" />
          Descarcă
        </>
      )}
      {isLoading && <RxReload className="w-5 h-5 animate-spin" />}
      {error && !isLoading && <IoWarningSharp className="w-5 h-5" />}
    </button>
  );
};
