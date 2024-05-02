import { Link } from "react-router-dom";
import GithubLogo from "../assets/footer/github.png";
import LinkedinLogo from "../assets/footer/linkedin.png";
import ShoppingBagLogo from "../assets/footer/shopping-bags.png";

export default function Footer(props) {
  return (
    <>
      <div className="bg-black text-white grid gap-6 md:gap-4 grid-cols-1 md:grid-cols-4 py-6 md:h-60">
        {/* Social Media */}
        <div className="md:col-start-2 md:col-span-1">
          <h1 className="mt-2 mb-4 text-lg md:text-xl">Social media</h1>

          <div className="flex gap-4">
            <a
              href="https://github.com/Himanshusharma007-stack"
              target="_blank"
            >
              <img src={GithubLogo} className="h-8 w-8" alt="Github" />
            </a>
            <a
              href="https://www.linkedin.com/in/himanshusharma007-stack/"
              target="_blank"
            >
              <img src={LinkedinLogo} className="h-8 w-8" alt="LinkedIn" />
            </a>
          </div>

          <div className="mt-4">
            <h1 className="mt-2 mb-3 text-lg">Other service</h1>
            <a
              href="https://himanshusharma007-stack.github.io/React-ecommerce/"
              target="_blank"
            >
              <img
                src={ShoppingBagLogo}
                className="h-10 w-10 ml-5"
                alt="Shopping Bags"
              />
            </a>
          </div>
        </div>

        {!props.hideLinks && (
          <>
            {/* Company */}
            <div className="text-lg md:text-xl">
              <h1 className="mt-2 mb-4">Company</h1>

              <p className="text-slate-400 my-2">
                <Link to="/food-webapp/about">About</Link>
              </p>
              {/* <p className="text-slate-400 my-2">Careers</p> */}
              <p className="text-slate-400 my-2">
                <Link to="/food-webapp/teams">Team</Link>
              </p>
            </div>

            {/* Contact Us */}
            <div className="text-lg md:text-xl">
              <h1 className="mt-2 mb-4">Contact us</h1>

              <p className="text-slate-400 my-2">
                <Link to="/food-webapp/contactus">Help & Support</Link>
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
