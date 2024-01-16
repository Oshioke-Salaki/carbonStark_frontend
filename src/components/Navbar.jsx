/* eslint-disable react/prop-types */
import Logo from "./Logo";
import DisconnectBtn from "./DisconnectBtn";
import useWalletConnector from "../hooks/useWalletConnector";

function Navbar() {
  const { connectWallet, disconnectWallet, connection, address } =
    useWalletConnector();
  return (
    <nav className="flex bg-darkPrimary items-center justify-between py-[14px] px-[55px]">
      <Logo />

      {!connection?.isConnected ? (
        <button
          className="py-[10px] rounded-[50px] px-8 text-white text-sm font-semibold bg-primaryColor"
          onClick={() => connectWallet()}
        >
          Connect Wallet
        </button>
      ) : (
        <DisconnectBtn address={address} disconnectWallet={disconnectWallet} />
      )}
    </nav>
  );
}

export default Navbar;
