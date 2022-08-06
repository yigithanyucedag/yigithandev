import {
  FaArrowRight,
  FaEnvelope,
  FaGitAlt,
  FaGithub,
  FaInstagram,
  FaReact,
  FaTwitter,
} from "react-icons/fa";
import {
  SiAdobexd,
  SiAmazonaws,
  SiDjango,
  SiFirebase,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Emoji from "../components/Emoji";
import SocialButton from "../components/SocialButton";

export default function Home() {
  return (
    <>
      <section>
        <h1 className="text-3xl md:text-4xl font-semibold pt-5 text-center sm:text-start">
          <Emoji label="El sallama" symbol="👋" className="mr-3" />
          Merhaba, ben Yiğithan
        </h1>
        <div className="mt-6 w-full md:max-w-xl space-y-5">
          <p className="leading-8 text-center sm:text-start text-xl font-light opacity-90">
            İstanbul&apos;da yaşayan bir yazılım mühendisliği öğrencisiyim.
            Mobil ve web uygulamalar geliştiriyorum ve tasarlıyorum.
          </p>
          <p className="leading-8 text-center sm:text-start text-xl font-light opacity-90">
            Yemek yapmayı, gitar çalmayı ve kamp yapmayı çok seviyorum. Boş
            zamanlarımda da açık kaynak kodlu projeler oluşturuyorum ve{" "}
            <a
              href="https://github.com/yigithanyucedag"
              target="_blank"
              className="hover:text-blue-600 hover:underline transition-colors"
              rel="noreferrer"
            >
              GitHub profilim
            </a>
            de paylaşıyorum.
          </p>
        </div>
        <div className="flex space-x-2 mt-7 justify-center sm:justify-start">
          <SocialButton
            Icon={FaEnvelope}
            url="mailto:yigithanyucedag@gmail.com"
          />
          <SocialButton
            Icon={FaGithub}
            url="https://github.com/yigithanyucedag"
          />
          <SocialButton
            Icon={FaTwitter}
            url="https://twitter.com/yigithanyucedag"
          />
          <SocialButton
            Icon={FaInstagram}
            url="https://instagram.com/yigithanyucedag"
          />
        </div>
      </section>
      <section className="work-banner flex flex-col sm:flex-row sm:space-y-0 space-y-5 items-center justify-between bg-blue-600 p-5 rounded-md my-10 text-white">
        <div className="flex-1 flex flex-col items-center sm:items-start">
          <span className="font-semibold text-xl">
            Benimle çalışmak ister misiniz?
          </span>
          <p className="opacity-80 mt-1 text-center sm:text-start">
            Projenizi en iyi şekilde hayata geçirmek istiyorsanız doğru
            yerdesiniz.
          </p>
        </div>
        <a
          target="_blank"
          href="https://empbdoxp9bf.typeform.com/to/tcr126Kl"
          className="bg-white rounded-md py-2 px-4 text-blue-600 flex items-center space-x-2"
          rel="noreferrer"
        >
          <span className="font-medium">Projem var</span>
          <FaArrowRight className="w-4 h-4" />
        </a>
      </section>
      <section>
        <h2 className="text-3xl font-medium">Kullandığım Teknolojiler</h2>
        <div className="table-tech-stack">
          <div className="stack">
            <SiTypescript className="w-8 h-8 text-blue-600" />
            <span className="text-xl opacity-80">Typescript</span>
          </div>
          <div className="stack">
            <FaReact className="w-8 h-8 text-cyan-500" />
            <span className="text-xl opacity-80">React</span>
          </div>
          <div className="stack">
            <FaReact className="w-8 h-8 text-cyan-500" />
            <span className="text-xl opacity-80">React Native</span>
          </div>
          <div className="stack">
            <SiRedux className="w-8 h-8 text-purple-600" />
            <span className="text-xl opacity-80">Redux</span>
          </div>
          <div className="stack">
            <SiTailwindcss className="w-8 h-8 text-cyan-500" />
            <span className="text-xl opacity-80">Tailwind CSS</span>
          </div>
          <div className="stack">
            <SiNextdotjs className="w-8 h-8 text-black" />
            <span className="text-xl opacity-80">Next</span>
          </div>
          <div className="stack">
            <FaGitAlt className="w-8 h-8 text-orange-500" />
            <span className="text-xl opacity-80">Git</span>
          </div>
          <div className="stack">
            <SiNodedotjs className="w-8 h-8 text-green-600" />
            <span className="text-xl opacity-80">Node.js</span>
          </div>
          <div className="stack">
            <SiDjango className="w-8 h-8 text-green-600" />
            <span className="text-xl opacity-80">Django</span>
          </div>
          <div className="stack">
            <SiNginx className="w-8 h-8 text-green-700" />
            <span className="text-xl opacity-80">Nginx</span>
          </div>
          <div className="stack">
            <SiFirebase className="w-8 h-8 text-orange-500" />
            <span className="text-xl opacity-80">Firebase</span>
          </div>
          <div className="stack">
            <SiAmazonaws className="w-8 h-8 text-orange-400" />
            <span className="text-xl opacity-80">AWS</span>
          </div>
          <div className="stack">
            <SiPostgresql className="w-8 h-8 text-blue-800" />
            <span className="text-xl opacity-80">PostgreSQL</span>
          </div>
          <div className="stack">
            <SiMysql className="w-8 h-8 text-blue-800" />
            <span className="text-xl opacity-80">MySQL</span>
          </div>
          <div className="stack">
            <SiAdobexd className="w-8 h-8 text-fuchsia-800" />
            <span className="text-xl opacity-80">Adobe XD</span>
          </div>
        </div>
      </section>
    </>
  );
}
