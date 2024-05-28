import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="flex flex-col items-center text-center text-surface bg-neutral-900">
      <div className="container pt-9">
        <div className="mb-6 flex justify-center space-x-2">
          <a
            href="#!"
            className="rounded-full p-3 font-medium transition duration-150 ease-in-out hover:bg-yellow-300 focus:ring-0 hover:text-neutral-900"
          >
            <span className="[&>svg]:h-5 [&>svg]:w-5">
              <FaFacebookF />
            </span>
          </a>

          <a
            href="#!"
            className="rounded-full p-3 font-medium transition duration-150 ease-in-out hover:bg-yellow-300 focus:ring-0 hover:text-neutral-900"
          >
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
              <FaXTwitter />
            </span>
          </a>
          <a
            href="#!"
            className="rounded-full p-3 font-medium transition duration-150 ease-in-out hover:bg-yellow-300 focus:ring-0 hover:text-neutral-900"
          >
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
              <FaInstagram />
            </span>
          </a>

          <a
            href="#!"
            className="rounded-full p-3 font-medium transition duration-150 ease-in-out hover:bg-yellow-300 focus:ring-0 hover:text-neutral-900"
          >
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
              <FaLinkedinIn />
            </span>
          </a>

          <a
            href="https://github.com/AxolotlJ-Dev/Recipes-Go"
            type="button"
            className="rounded-full p-3 font-medium transition duration-150 ease-in-out hover:bg-yellow-300 focus:ring-0 hover:text-neutral-900"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>

      <div className="w-full bg-black/5 p-4 text-center">
        © 2023 Copyright:
        <Link className="text-yellow-300" href="/">
          Recipes Go
        </Link>
      </div>
    </footer>
  );
}
