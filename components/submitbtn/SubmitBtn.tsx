"use client";
import React from "react";
import * as S from "./SubmitBtn.style";
export default function SubmitBtn({ children }: { children: React.ReactNode }) {
  return <S.Button type="submit">{children}</S.Button>;
}
