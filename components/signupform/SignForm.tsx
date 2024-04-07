"use client";
import Image from "next/image";
import SubmitBtn from "../submitbtn/SubmitBtn";
import * as S from "./SignForm.style";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import instance from "@/lib/instance";

interface FormInput {
  email: string;
  password: string;
  passwordCheck?: string;
}

export default function SignForm() {
  const path = usePathname();
  const router = useRouter();
  if (localStorage.getItem("accessToken") !== null) router.push("/folder");
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [isShowPasswordCheck, setIsShowPasswordCheck] =
    useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm<FormInput>();
  const onSubmitSigninForm = handleSubmit(async (data) => {
    try {
      const request = await instance.post("sign-in", data);
      const { accessToken } = request.data.data;
      localStorage.setItem("accessToken", accessToken);
      router.push("/folder");
    } catch (err) {
      setError("email", { type: "submit", message: "아이디를 확인해주세요" });
      setError("password", {
        type: "submit",
        message: "비밀번호를 확인해주세요",
      });
    }
  });

  if (path === "/signin")
    return (
      <form onSubmit={onSubmitSigninForm}>
        <label htmlFor="email">이메일</label>
        <S.Input
          type="text"
          placeholder="이메일을 입력해주세요"
          id="email"
          {...register("email", { required: true })}
          aria-invalid={errors.email ? "true" : "false"}
        />

        <S.ErrorMessage role="alert">
          {errors.email?.type === "required" && "이메일을 입력해주세요"}
          {errors.email?.message}
        </S.ErrorMessage>

        <label htmlFor="password">비밀번호</label>
        <S.Wrap>
          <S.Input
            type={isShowPassword ? "text" : "password"}
            placeholder="비밀번호를 입력해주세요"
            id="password"
            {...register("password", { required: true })}
            aria-invalid={errors.password ? "true" : "false"}
          />

          <S.EyeButton
            type="button"
            onClick={() => setIsShowPassword((prev) => !prev)}
          >
            <Image
              src={isShowPassword ? "/img/eye-on.svg" : "/img/eye-off.svg"}
              width={16}
              height={16}
              alt="비번 보임"
            />
          </S.EyeButton>
        </S.Wrap>

        <S.ErrorMessage role="alert">
          {errors.password?.type === "required" && "비밀번호를 입력해주세요"}
          {errors.password?.message}
        </S.ErrorMessage>

        <SubmitBtn>로그인</SubmitBtn>
      </form>
    );
  const onSubmitSignupForm = handleSubmit(async (data) => {
    try {
      const request = await instance.post("check-email", { email: data.email });
      router.push("/folder");
    } catch (err) {
      setError("email", { type: "valid", message: "중복된 이메일입니다." });
    }
  });
  return (
    <form onSubmit={onSubmitSignupForm}>
      <label htmlFor="email">이메일</label>
      <S.Input
        type="text"
        placeholder="이메일을 입력해주세요"
        id="email"
        {...register("email", {
          required: true,
          pattern: /^[^@]+@[^.]+\..+$/,
        })}
        aria-invalid={errors.email ? "true" : "false"}
      />
      <S.ErrorMessage>
        {errors.email?.type === "required" && "이메일을 입력해주세요"}
        {errors.email?.type === "pattern" && "올바른 이메일 주소가 아닙니다"}
        {errors.email?.message}
      </S.ErrorMessage>
      <label htmlFor="password">비밀번호</label>
      <S.Wrap>
        <S.Input
          type={isShowPassword ? "text" : "password"}
          placeholder="비밀번호를 입력해주세요"
          id="password"
          {...register("password", {
            pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/,
          })}
          aria-invalid={errors.password ? "true" : "false"}
        />
        <S.EyeButton
          type="button"
          onClick={() => setIsShowPassword((prev) => !prev)}
        >
          <Image
            src={isShowPassword ? "/img/eye-on.svg" : "/img/eye-off.svg"}
            width={16}
            height={16}
            alt="비번 보임"
          />
        </S.EyeButton>
      </S.Wrap>
      <S.ErrorMessage>
        {errors.password?.type === "pattern" &&
          "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요"}
      </S.ErrorMessage>
      <label htmlFor="password-check">비밀번호 확인</label>
      <S.Wrap>
        <S.Input
          type={isShowPasswordCheck ? "text" : "password"}
          placeholder="비밀번호를 한번 더 입력해주세요"
          id="password-check"
          {...register("passwordCheck", {
            validate: (value) => value === getValues("password"),
          })}
          aria-invalid={errors.passwordCheck ? "true" : "false"}
        />
        <S.EyeButton
          type="button"
          onClick={() => setIsShowPasswordCheck((prev) => !prev)}
        >
          <Image
            src={isShowPasswordCheck ? "/img/eye-on.svg" : "/img/eye-off.svg"}
            width={16}
            height={16}
            alt="비번 보임"
          />
        </S.EyeButton>
      </S.Wrap>
      <S.ErrorMessage>
        {errors.passwordCheck?.type === "validate" &&
          "비밀번호가 일치하지 않습니다"}
      </S.ErrorMessage>
      <SubmitBtn>회원가입</SubmitBtn>
    </form>
  );
}
