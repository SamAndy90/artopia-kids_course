export function FooterNavigation() {
  return (
    <nav className="flex gap-[129px]">
      <div className="flex flex-col gap-[12px]">
        <p className=" font-semibold text-[20px] text-white">Artopia</p>
        <a className="text-[#777E90] text-[18px]" href="#">
          explore
        </a>
        <a className="text-[#777E90] text-[18px]" href="#">
          Digital Art
        </a>
        <a className="text-[#777E90] text-[18px]" href="#">
          About
        </a>
      </div>
      <div className="flex flex-col gap-[12px]">
        <p className=" font-semibold text-[20px] text-white">My Account</p>
        <a className="text-[#777E90] text-[18px]" href="#">
          Profile
        </a>
        <a className="text-[#777E90] text-[18px]" href="#">
          Favourites
        </a>
        <a className="text-[#777E90] text-[18px]" href="#">
          Watchlist
        </a>
        <a className="text-[#777E90] text-[18px]" href="#">
          My Collections
        </a>
        <a className="text-[#777E90] text-[18px]" href="#">
          Settings
        </a>
      </div>
      <div className="flex flex-col gap-[12px]">
        <p className=" font-semibold text-[20px] text-white">Resources</p>
        <a className="text-[#777E90] text-[18px]" href="#">
          Platform Status
        </a>
        <a className="text-[#777E90] text-[18px]" href="#">
          Partners
        </a>
        <a className="text-[#777E90] text-[18px]" href="#">
          Taxes
        </a>
        <a className="text-[#777E90] text-[18px]" href="#">
          Newsletter
        </a>
      </div>
      <div className="flex flex-col gap-[12px]">
        <p className=" font-semibold text-[20px] text-white">Community</p>
        <a className="text-[#777E90] text-[18px]" href="#">
          Help Center
        </a>
        <a className="text-[#777E90] text-[18px]" href="#">
          Suggest Feature
        </a>
        <a className="text-[#777E90] text-[18px]" href="#">
          Subscribe
        </a>
      </div>
    </nav>
  );
}
