import { siteConfig } from "@/config/site";
import Link from "next/link";

const FooterProducts = () => {
  const footerProducts = siteConfig.footerProducts;

  return (
    <div className="flex space-x-2 flex-wrap justify-center">
      {footerProducts.map((product, index) => {
        return (
          <>
            <Link key={product.url} href={product.url} target="_blank">
              {product.name}
            </Link>
            {index !== footerProducts.length - 1 ? (
              <>
                <div>{" • "}</div>
              </>
            ) : (
              <></>
            )}
          </>
        );
      })}
    </div>
  );
};

export default FooterProducts;
