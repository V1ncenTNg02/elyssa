import React, { useState } from "react";
import styles from "./Navigation.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../Logo/Logo";
import config from "../../configs/content.json";
import { CgClose } from "react-icons/cg";

export default function Navigation() {
  const { navigation, icon } = config;
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="mx-auto w-full max-w-[1270px] px-2 sm:px-6 lg:px-8">
        <div className={styles.navBarLayout}>
          <div className={styles.navBarContainer}>
            <Link href="/" passHref className={styles.logoContainer}>
              <Logo isLarge={true}  classNames='min-w-[180px] h-full max-md:hidden md:visible'/>
              <Logo isLarge={false} classNames='md:hidden' />
            </Link>
          </div>

          <div className={styles.linksContainer}>
            <div className={styles.navListContainer}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={styles.navBarButton}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className={styles.iconsContainer}>
              {icon.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={styles.linkIcon}
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    className={styles.icon}
                    width={28}
                    height={28}
                  />
                </Link>
              ))}
            </div>
          </div>

          <button className={"md:hidden"} onClick={() => setOpen(!open)}>
            {open ? (
              <Image
                src="/assets/menu-hamburger.png"
                alt="menuButton"
                width={50}
                height={50}
              />
            ) : (
              <Image
                src="/assets/menu-hamburger.png"
                alt="menuButton"
                width={50}
                height={50}
              />
            )}
          </button>
        </div>
      </div>
      {open && (
        <div className={styles.mobileMenu}>
          <CgClose
            className="absolute right-[3rem] top-[2rem]"
            style={{ color: "white", scale: "200%" }}
            onClick={() => setOpen(!open)}
          />
          <ul className={styles.mobileMenuList}>
            {navigation.map((item) => (
              <li key={item.name} className={styles.mobileMenuItem}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
