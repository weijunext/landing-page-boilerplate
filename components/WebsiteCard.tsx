import Link from "next/link";

const WebsiteCard = ({
  title,
  description,
  og,
  url,
}: {
  title: string;
  description: string;
  og?: string;
  url: string;
}) => {
  return (
    <Link href={url} title={title} aria-label={title} target="_blank">
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 px-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary">
        <img
          src={og || "/og.png"}
          alt={title}
          className="w-full h-44 object-cover rounded-lg mt-4"
        />
        <div className="py-4">
          <div className="font-bold text-xl mb-2 whitespace-nowrap overflow-hidden text-ellipsis text-gray-900 dark:text-white">
            {title}
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-base whitespace-nowrap overflow-hidden text-ellipsis">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default WebsiteCard;
