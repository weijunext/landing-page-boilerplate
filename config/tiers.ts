
import { siteConfig } from "@/config/site";
import { Tier, TiersEnum } from "@/types/pricing";

export const TIERS_EN: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Open-Source / Free",
    price: "Free",
    href: siteConfig.openSourceURL || "#",
    description:
      "Freely clone the landing page boilerplate from the GitHub repository.",
    features: [
      "Free",
      "Access to full code",
      "Secondary development",
      "MIT License",
    ],
    buttonText: "Get started",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Customize",
    href: siteConfig.authors[0].twitter || "#",
    description: "Pay to customize an exclusive landing page.",
    price: "$188",
    features: [
      "Access to full code",
      "Secondary development",
      "Exclusive style",
      "One-on-one service",
      "More exquisite pages",
    ],
    buttonText: "Contact us",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_ZH: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "开源 / 免费",
    price: "免费",
    href: siteConfig.openSourceURL || "#",
    description: "可从GitHub仓库免费克隆落地页模板。",
    features: [
      "免费",
      "访问全部代码",
      "二次开发",
      "MIT 许可证",
    ],
    buttonText: "开始",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "定制",
    href: siteConfig.authors[0].twitter || "#",
    description: "支付定制专属落地页。",
    price: "$188",
    features: [
      "访问全部代码",
      "二次开发",
      "独家风格",
      "一对一服务",
      "更精致的页面",
    ],
    buttonText: "联系我们",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_JA: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "オープンソース / 無料",
    price: "無料",
    href: siteConfig.openSourceURL || "#",
    description: "GitHubリポジトリからランディングページのボイラープレートを自由にクローンできます。",
    features: [
      "無料",
      "全コードへのアクセス",
      "二次開発",
      "MITライセンス",
    ],
    buttonText: "始める",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "カスタマイズ",
    href: siteConfig.authors[0].twitter || "#",
    description: "専用のランディングページをカスタマイズするために支払います。",
    price: "$188",
    features: [
      "全コードへのアクセス",
      "二次開発",
      "独占スタイル",
      "1対1のサービス",
      "より精巧なページ",
    ],
    buttonText: "お問い合わせ",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_AR: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "مفتوح المصدر / مجاني",
    price: "مجاناً",
    href: siteConfig.openSourceURL || "#",
    description: "يمكنك نسخ قالب صفحة الهبوط من مستودع GitHub بحرية.",
    features: [
      "مجاني",
      "الوصول إلى كامل الكود",
      "التطوير الثانوي",
      "رخصة MIT",
    ],
    buttonText: "ابدأ الآن",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "تخصيص",
    href: siteConfig.authors[0].twitter || "#",
    description: "ادفع لتخصيص صفحة هبوط حصرية.",
    price: "$188",
    features: [
      "الوصول إلى كامل الكود",
      "التطوير الثانوي",
      "أسلوب حصري",
      "خدمة فردية",
      "صفحات أكثر دقة",
    ],
    buttonText: "اتصل بنا",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_ES: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Código Abierto / Gratuito",
    price: "Gratis",
    href: siteConfig.openSourceURL || "#",
    description:
      "Clona libremente la plantilla de página de aterrizaje desde el repositorio de GitHub.",
    features: [
      "Gratis",
      "Acceso a todo el código",
      "Desarrollo secundario",
      "Licencia MIT",
    ],
    buttonText: "Comenzar",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Personalizar",
    href: siteConfig.authors[0].twitter || "#",
    description: "Paga para personalizar una página de aterrizaje exclusiva.",
    price: "$188",
    features: [
      "Acceso a todo el código",
      "Desarrollo secundario",
      "Estilo exclusivo",
      "Servicio personalizado",
      "Páginas más exquisitas",
    ],
    buttonText: "Contáctanos",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_RU: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Открытый Источник / Бесплатно",
    price: "Бесплатно",
    href: siteConfig.openSourceURL || "#",
    description:
      "Свободно клонируйте шаблон лендинга из репозитория на GitHub.",
    features: [
      "Бесплатно",
      "Доступ ко всему коду",
      "Вторичная разработка",
      "Лицензия MIT",
    ],
    buttonText: "Начать",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Настройка",
    href: siteConfig.authors[0].twitter || "#",
    description: "Оплатите персонализацию эксклюзивной лендинг страницы.",
    price: "$188",
    features: [
      "Доступ ко всему коду",
      "Вторичная разработка",
      "Эксклюзивный стиль",
      "Индивидуальное обслуживание",
      "Более изысканные страницы",
    ],
    buttonText: "Связаться с нами",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

interface TiersCollection {
  [key: `TIERS_${string}`]: Array<Tier>;
}

export const ALL_TIERS: TiersCollection = {
  TIERS_EN,
  TIERS_ZH,
  TIERS_JA,
  TIERS_AR,
  TIERS_ES,
  TIERS_RU
}