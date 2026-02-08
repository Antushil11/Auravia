import React from "react";
import Logos from "../Logos/Logos";
import Container from "../../Container/Container";
import {
  FaDiscord,
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
  return (
    <Container>
      <div className="bg-[#f3ebe8]">
        <footer className="footer sm:footer-horizontal bg-base-100 shadow-sm text-base-content p-10">
          <aside>
            <Logos></Logos>
            <p>
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
            <div className="flex gap-2 text-primary-content ">
              <a href="https://www.facebook.com/"  className="hover:text-primary">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.youtube.com/" className="hover:text-primary">
                <FaYoutube size={24} />
              </a>
              <a href="https://x.com/"  className="hover:text-primary">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.tiktok.com/404?fromUrl=/en%22" className="hover:text-primary">
                <IoLogoTiktok size={24} />
              </a>
              <a href="https://www.instagram.com/" className="hover:text-primary">
                <FaInstagramSquare size={24} />
              </a>
              <a href="https://discord.com/" className="hover:text-primary">
                <FaDiscord size={24} />
              </a>
            </div>
          </nav>
          <nav>
            <form action="">
              <label className="footer-title">Email</label>
              <input
                className="mt-2 p-2 w-full rounded-xl border border-primary"
                placeholder="enter you email"
                type="email"
                name="Email"
                id=""
              />
            </form>
          </nav>
        </footer>
      </div>
    </Container>
  );
};

export default Footer;
