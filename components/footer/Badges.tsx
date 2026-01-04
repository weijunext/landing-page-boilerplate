"use client";

export default function Badges() {
  return (
    <div className="py-6 flex justify-center w-full flex-wrap gap-2">
      <a
        href="https://firstlook.tools"
        title="Featured on FirstLook.Tools"
        target="_blank"
      >
        <img
          src="https://firstlook.tools/badge/badge_light.svg"
          alt="Featured on FirstLook.Tools"
          width="200"
          height="54"
        />
      </a>
      <a
        href="https://dofollow.tools"
        title="Featured on Dofollow.Tools"
        target="_blank"
      >
        <img
          src="https://dofollow.tools/badge/badge_light.svg"
          alt="Featured on Dofollow.Tools"
          width="200"
          height="54"
        />
      </a>
    </div>
  );
}
