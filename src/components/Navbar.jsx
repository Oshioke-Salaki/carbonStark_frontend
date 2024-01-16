import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="flex bg-darkPrimary items-center justify-between py-[14px] px-[55px]">
      <Logo />
      <button className="py-[10px] rounded-[50px] px-8 text-white text-sm font-semibold bg-primaryColor">
        Connect Wallet
      </button>
    </nav>
  );
}

export default Navbar;
