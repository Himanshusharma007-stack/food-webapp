export default function Footer() {
  return (
    <>
      <div className="h-48 bg-black text-white grid gap-4 grid-cols-4">
        <div class="col-start-2">
          <h1 className="mt-2 mb-4">Social media</h1>

          <div className="flex gap-4">
            <a
              href="https://github.com/Himanshusharma007-stack"
              target="_blank"
            >
              <img src="../src/assets/footer/github.png" className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/himanshusharma007-stack/"
              target="_blank"
            >
              <img
                src="../src/assets/footer/linkedin.png"
                className="h-8 w-8"
              />
            </a>
          </div>

          <div className="mt-4">
            <h1 className="mt-2 mb-3">Other service</h1>
            <a
              href="https://himanshusharma007-stack.github.io/React-ecommerce/"
              target="_blank"
            >
              <img
                src="../src/assets/footer/shopping-bags.png"
                className="h-10 w-10 ml-5"
              />
            </a>
          </div>
        </div>
        <div>
          <h1 className="mt-2 mb-4">Company</h1>

          <p className="text-slate-400 my-2">About</p>
          <p className="text-slate-400 my-2">Careers</p>
          <p className="text-slate-400 my-2">Team</p>
        </div>

        <div>
          <h1 className="mt-2 mb-4">Contact us</h1>

          <p className="text-slate-400 my-2">Help & Support</p>
          <p className="text-slate-400 my-2">Partner with us</p>
          <p className="text-slate-400 my-2">Ride with us</p>
        </div>

        <div></div>
      </div>
    </>
  );
}
