import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Modal from "react-modal";
import { MediumContext } from "../context/MediumContext";
import UploadModal from "./UploadModal";

Modal.setAppElement("#__next");

const styles = {
  wrapper: `flex justify-center gap-10 p-5 bg-[#FCC017]`,
  content: `max-w-7xl flex-1 flex justify-between gap-10`,
  logoContainer: `flex items-center flex-start`,
  logo: `cursor-pointer object-contain`,
  bannerNav: `flex cursor-pointer items-center space-x-5`,
  accentedButton: `bg-black text-white py-2 px-4 rounded-full`,
};

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const { user, handleUserAuth } = useContext(MediumContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          {/* <Image
            className={styles.logo}
            src={Logo}
            alt="logo"
            width={200}
            height={40}
          /> */}
        </div>
        <div className={styles.bannerNav}>
          <div>Our story</div>
          <div>Membership</div>
          {user ? (
            <>
              <Link href={"/?addNew=1"}>
                <div className={styles.accentedButton}>Write</div>
              </Link>
            </>
          ) : (
            <>
              <div>Sign In</div>
              <div className={styles.accentedButton}>Get Started</div>
            </>
          )}
        </div>
      </div>
      <Modal
        isOpen={!!router.query.addNew}
        onRequestClose={() => router.push("/")}
      >
        <UploadModal />
      </Modal>
    </div>
  );
};

export default Header;
