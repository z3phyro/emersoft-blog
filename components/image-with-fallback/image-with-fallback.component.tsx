"use client";

import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FALLBACK_IMAGE_URL } from "@/config/constants.config";

export const ImageWithFallback = ({ fallback = FALLBACK_IMAGE_URL, src, ...props }: any) => {
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setError(false);
  }, [src]);

  return <Image onError={() => setError(true)} src={error ? fallback : src} {...props} />;
};
