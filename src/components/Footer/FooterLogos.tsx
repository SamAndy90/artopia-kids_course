import Image from "next/image";
import instaico from "./static/instagram.svg";
import twitterico from "./static/twitter.svg";
import inico from "./static/in.svg";
export function FooterLogos() {
  return (
    <div className="Footer__logos flex gap-5">
      <Image src={instaico} alt="x-twitter logo" width={20} height={20} />
      <Image src={twitterico} alt="x-twitter logo" width={20} height={20} />
      <Image src={inico} alt="x-twitter logo" width={20} height={20} />
    </div>
  );
}
