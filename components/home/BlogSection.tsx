import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const BlogSection = () => {
    const t = useTranslations("home");
 return( <section className="p-10 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-white flex flex-col items-center gap-8">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-pink-800 dark:text-pink-800 drop-shadow-md">
      {t("title_2")}
    </h2>

    <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
      <Card
        href="/blog"
        img="/images/background/jesus_blog.png"
        alt={t("alt_img_1")}
        title={t("articule_1_title")}
        text={`${t("articule_1_information_p1")} ${t("articule_1_information_p2")} ${t("articule_1_information_p3")}`}
      />

      <Card
        href="/personajes"
        img="/images/background/personajes.avif"
        alt={t("alt_img_2")}
        title={t("articule_2_title")}
        text={`${t("articule_2_information_p1")} ${t("articule_2_information_p2")}`}
      />
    </div>
  </section>)
};

const Card = ({
  href,
  img,
  alt,
  title,
  text,
}: {
  href: string;
  img: string;
  alt: string;
  title: string;
  text: string;
}) => (
  <Link href={href} className="block max-w-sm">
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-pink-200 transition hover:-translate-y-1 hover:shadow-lg">
      <Image className="rounded-t-lg" src={img} width={500} height={500} alt={alt} />
      <div className="p-5 flex flex-col justify-center">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-pink-800 mb-2">{title}</h3>
        <p className="text-black dark:text-black-300">{text}</p>
      </div>
    </div>
  </Link>
);

export default BlogSection;
