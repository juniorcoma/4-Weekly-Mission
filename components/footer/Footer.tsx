import Link from "next/link";
import style from "./Footer.module.css";
import { ABOUT_SOCIAL_INFORMATION } from "@/constant";
import Image from "next/image";
const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style["footer-inner"]}>
        <div className={style["footer-content"]}>
          <p className={style.codeit}>@Codeit-2023</p>
          <div className={style.other}>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">FAQ</Link>
          </div>
          <div className={style["social-container"]}>
            {ABOUT_SOCIAL_INFORMATION.map((social) => (
              <a key={social.id} href={social.url} target="_blank">
                <Image
                  src={social.iconImg}
                  width={20}
                  height={20}
                  alt={social.title}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
