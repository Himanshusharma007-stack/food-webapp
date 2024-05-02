import React from "react";
import Myimg from "../assets/images/my-img.jpeg";

let team = [
  {
    name: "Himanshu Sharma",
    imageUrl: Myimg,
    role: "Frontend Developer",
  },
  {
    name: "Himanshu Sharma",
    imageUrl:
      "https://scontent.fdel10-1.fna.fbcdn.net/v/t1.6435-9/67380174_1390382624449559_3886841245628104704_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1q0BdmACP8gAb7QGfKR&_nc_ht=scontent.fdel10-1.fna&oh=00_AfDGoy8SI3WeoEPyhmvaSf_-xCzu0KvFIqT2LYP5TLQI2Q&oe=6651CD28",
    role: "Backend Developer",
  },
];

export default function Teams() {
  return (
    <section className="my-12 mx-2">
      <div className="mx-auto max-w-7xl px-2 lg:px-0">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
            People who made it successful
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
            <strong>Himanshu Sharma</strong> is the driving force behind our
            live food delivery website, seamlessly blending roles as both a{" "}
            <strong>backend</strong> and <strong>frontend</strong> developer.
            With his expertise, he ensures that every aspect of the website,
            from its functionality to its user interface, is meticulously
            crafted for optimal performance and user experience. His dedication
            and versatility shine through in every line of code, making him an
            invaluable asset to our team and the success of our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-4 justify-center">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="relative flex items-center justify-center h-80 w-full rounded-lg bg-red-300"
                style={{
                  background: `url(${member.imageUrl}) center/cover no-repeat`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
