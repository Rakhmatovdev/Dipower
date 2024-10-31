import { Team } from "@/data/data";
import Link from "next/link";
import twitteri from '/public/twitter.svg'
import instagrami from '/public/instagram.svg'
import linkedini from '/public/linkedin.svg'

const TeamsAbout = () => {
  return (
    <section>
      <div className="container mx-auto px-2 sm:px-0 my-[120px]">
        <div className="sm:text-[54px] text-4xl font-[510]">Our Team</div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:grid-cols-3 w-full justify-items-center sm:justify-items-stretch ">
          {Team.map((user) => (
            <div key={user.name}>
              <div className="bg-secondary w-[370px] h-[430px] mt-4 xl:mt-0 xl:w-full g flex justify-center items-end">
                <img src={user.image} alt={user.name} />
              </div>
              <div className="text-[32px] mt-8 ">{user.name}</div>
              <div className="mt-2">{user.expert}</div>
              <ul className="flex gap-4 mt-4">
                <Link href={user.twitter}>
                  <img className=" " src={twitteri.src} alt="Twitter" />
                </Link>
                <Link href={user.instagram}>
                  <img src={instagrami.src} alt="Twitter" />
                </Link>
                <Link href={user.linkedin}>
                  <img src={linkedini.src} alt="Twitter" />
                </Link>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsAbout;
