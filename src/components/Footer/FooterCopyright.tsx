export function FooterCopyright() {
  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex mx-[45px] border-[#777e90] border-y p-[32px] gap-[15px]">
        <a className="text-[#777e90]" href="#">
          Terms
        </a>
        <a className="text-[#777e90]" href="#">
          Privacy Policy
        </a>
      </div>
      <p className="text-center ml-[-50px] text-white font-semibold text-[14px]">
        © CarryUa, Inc @ All Rights NOT Reserved
      </p>
    </div>
  );
}
