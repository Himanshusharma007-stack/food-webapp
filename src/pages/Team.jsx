import React from "react";

let team = [
  {
    name: "Himanshu Sharma",
    imageUrl:
      "https://scontent.fdel10-1.fna.fbcdn.net/v/t39.30808-6/273391329_2149939205160560_36939796878654698_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6CsTXwESzDIQ7kNvgEORKUc&_nc_ht=scontent.fdel10-1.fna&oh=00_AfB8OJKg_vB-529AOUB0sF2x84diK7J1Q-RxYDanz_bKpA&oe=6630495B",
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
              >
                {/* <div className="absolute bottom-4 left-4">
                  <h1 className="text-xl font-semibold text-blue">
                    {member.name}
                  </h1>
                  <h6 className="text-base text-blue">{member.role}</h6>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-8 text-center md:mt-16">
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Join Our Team
          </button>
        </div> */}
      </div>
    </section>
  );
}
