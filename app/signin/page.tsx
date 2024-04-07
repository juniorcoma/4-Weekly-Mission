import Image from "next/image";
import style from "./page.module.css";
import Link from "next/link";
import SocialSignBar from "@/components/socialsignbar/SocialSignBar";
import SignForm from "@/components/signupform/SignForm";
export default function Page() {
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
            회원이 아니신가요?
            <Link className={style["signin-link"]} href="/signup">
              회원 가입하기
            </Link>
          </p>
        </div>
        <SignForm />
        <SocialSignBar>소셜 로그인</SocialSignBar>
      </div>
    </div>
  );
}
