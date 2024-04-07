import Link from "next/link";
import style from "./page.module.css";
import Image from "next/image";
import SignForm from "@/components/signupform/SignForm";
import SocialSignBar from "@/components/socialsignbar/SocialSignBar";

export default function SignupPage() {
  return (
    <div className={style["full-layout"]}>
      <div className={style["form-container"]}>
        <div>
          <Link href="/">
            <h1 className={style.logo}>
              <Image
                src="/img/logobig.png"
                width={210}
                height={38}
                alt="로고 이미지"
              />
            </h1>
          </Link>
          <p className={style.message}>
            이미 회원이신가요?
            <Link className={style["signin-link"]} href="/signin">
              로그인 하기
            </Link>
          </p>
        </div>
        <SignForm />
        <SocialSignBar>다른 방식으로 가입하기</SocialSignBar>
      </div>
    </div>
  );
}
