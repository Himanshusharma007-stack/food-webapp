import Notification from "../components/Notification";
import { useState } from "react";
import { contactusService } from "../services/contactus";

export default function ContactUs() {
  const [notification, setNotification] = useState(false);
  const [errorNotification, setErrorNotification] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function showNotification() {
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 3000);
  }

  function resetForm() {
    setFname("");
    setLname("");
    setEmail("");
    setPhoneNumber("");
    setMsg("");
  }

  async function contactusBtnClicked(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      let name = `${fname.trim()} ${lname.trim()}`;
      let res = await contactusService({
        name,
        email: email.trim(),
        mobile: phoneNumber.trim(),
        msg: msg.trim(),
      });
      setErrorNotification(false);
      setNotificationMsg(res?.msg || "Successfully submitted.");

      console.log("Before reset:", { fname, lname, email, phoneNumber, msg });
      resetForm();
      console.log("After reset:", { fname, lname, email, phoneNumber, msg });
    } catch (error) {
      setErrorNotification(true);
      setNotificationMsg(error?.message);
      throw new Error(error);
    } finally {
      setIsLoading(false);
      showNotification();
    }
  }
  return (
    <>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-7xl py-12 md:py-24">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <p className="text-2xl font-bold text-gray-900 md:text-4xl">
                  Get in touch
                </p>
                {notification && (
                  <Notification
                    msg={notificationMsg}
                    error={errorNotification ? true : false}
                    close={() => setNotification(false)}
                  />
                )}
                <form action="" className="mt-8 space-y-4" onSubmit={(e) => contactusBtnClicked(e)}>
                  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="first_name"
                      >
                        First Name*
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:black dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="first_name"
                        value={fname}
                        placeholder="First Name"
                        required
                        onChange={(e) => setFname(e.target.value)}
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="last_name"
                      >
                        Last Name*
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:black dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        value={lname}
                        id="last_name"
                        placeholder="Last Name"
                        required
                        onChange={(e) => setLname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Email*
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:black dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="email"
                      id="email"
                      value={email}
                      placeholder="Email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="phone_number"
                    >
                      Phone number*
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:black dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="tel"
                      pattern="[0-9]{10}"
                      id="phone_number"
                      value={phoneNumber}
                      placeholder="Phone number (10 digits)"
                      required
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:black dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      id="message"
                      value={msg}
                      placeholder="Leave us a message"
                      cols="3"
                      onChange={(e) => setMsg(e.target.value)}
                    ></textarea>
                  </div>
                  <button
                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    type="submit"
                  >
                    {isLoading ? (
                      // Show loader when isLoading is true
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                        <span className="ml-2">Sending...</span>
                      </div>
                    ) : (
                      // Show "Send Message" text when isLoading is false
                      "Send Message"
                    )}
                  </button>
                </form>
                {/* {contactUs && (
                  <Notification
                    msg="This feature will available soon."
                    close={() => setContactUs(false)}
                  />
                )} */}
              </div>
            </div>
            <img
              alt="Contact us"
              className="hidden max-h-full w-full rounded-lg object-cover lg:block"
              src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=500&q=80"
            />
          </div>
        </div>
      </div>
    </>
  );
}
