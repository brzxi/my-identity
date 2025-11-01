import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans">
      {/* ✅ رأس الصفحة */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <h1 className="text-xl font-bold">هويتي</h1>
        <nav className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-blue-600">من أنا</a>
          <a href="#works" className="hover:text-blue-600">أعمالي</a>
          <a href="#contact" className="hover:text-blue-600">تواصل</a>
        </nav>
      </header>

      {/* ✅ من أنا */}
      <section id="about" className="flex flex-col items-center text-center py-20 px-6">
        <motion.img
          src="/vite.svg"
          alt="شعار الهوية"
          className="w-24 h-24 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <h2 className="text-2xl font-bold mb-4">من أنا</h2>
        <p className="max-w-xl leading-relaxed text-gray-600">
          أهلاً! أنا مصمم أهوى تحويل الأفكار إلى أعمال بصرية أنيقة ومؤثرة.
          أعمل على مشاريع تعكس الجمال والهوية الخاصة لكل شخص أو علامة.
        </p>
      </section>

      {/* ✅ أعمالي */}
      <section id="works" className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-6">أعمالي</h2>
        <p className="text-gray-500">قريبًا 🔧</p>
      </section>

      {/* ✅ تواصل */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">تواصل معي</h2>
        <p className="text-gray-600 mb-4">راسلني عبر البريد أو تواصل على حساباتي:</p>
        <div className="flex justify-center gap-6">
          <a href="mailto:example@email.com" className="text-blue-600 hover:underline">📧 البريد</a>
          <a href="https://www.instagram.com/" target="_blank" className="hover:text-pink-500">📸 انستقرام</a>
          <a href="https://www.tiktok.com/" target="_blank" className="hover:text-gray-800">🎵 تيك توك</a>
        </div>
      </section>

      {/* ✅ التذييل */}
      <footer className="py-4 text-center text-sm border-t border-gray-200 text-gray-500">
        © {new Date().getFullYear()} هويتي — جميع الحقوق محفوظة
      </footer>
    </div>
  );
}
