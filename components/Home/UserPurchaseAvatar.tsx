import Image from "next/image";

const UserPurchaseAvatar = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-20 mt-14">
      <div className="flex flex-col items-center gap-5">
        <div className="flex items-center justify-center">
          {Users.map((user, index) => {
            return (
              <Image
                key={index}
                src={user.image}
                alt="User"
                height={40}
                width={40}
                className="rounded-full -m-[5px] border border-white"
              />
            );
          })}
        </div>
        <p className="text-sm text-gray-600">
          <span className="text-primary font-semibold text-base">1000+</span>{" "}
          makers ship easier
        </p>
      </div>
    </div>
  );
};

export default UserPurchaseAvatar;

const Users = [
  {
    image: "/images/users/1.png",
  },
  {
    image: "/images/users/2.png",
  },
  {
    image: "/images/users/3.png",
  },
  {
    image: "/images/users/4.png",
  },
  {
    image: "/images/users/5.png",
  },
];
