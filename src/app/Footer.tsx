import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbBrandVercel } from "react-icons/tb";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center gap-4 mt-8 text-gray-500">
        <Link href="https://www.linkedin.com/in/galindoptbr/" target="_blank">
          <p>
            <FaLinkedin size={30} />
          </p>
        </Link>
        <Link href="https://github.com/galindoptbr" target="_blank">
          <p>
            <FaGithub size={30} />
          </p>
        </Link>
        <Link href="https://vercel.com/galindoptbrs-projects" target="_blank">
          <p>
            <TbBrandVercel size={30} />
          </p>
        </Link>
      </div>
      <p className="text-center text-gray-500 text-sm italic">
        Galindo ⓒ 2024{" "}
      </p>
    </>
  );
};

export default Footer;
