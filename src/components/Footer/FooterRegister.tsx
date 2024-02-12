import { FooterLogos } from "./FooterLogos";
import { FooterForm } from "./FooterForm";
import { FooterText } from "./FooterText";
export function FooterRegister() {
  return (
    <div className="Left flex flex-col w-[400px] h-[320px] gap-[34px]">
      <FooterText />
      <FooterLogos />
      <FooterForm />
    </div>
  );
}
