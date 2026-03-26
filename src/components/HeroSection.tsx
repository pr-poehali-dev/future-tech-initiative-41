import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-[#0a0f2e] to-blue-950 flex flex-col">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(30,64,175,0.35),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,40,120,0.2),transparent_60%)]"></div>

      {/* Navigation */}
      <header className="relative z-10 px-6 py-4 mx-auto w-full max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-white text-2xl font-bold tracking-tight flex items-center gap-2">
              <Icon name="Landmark" size={26} />
              ГосКарьера
            </span>
            <nav className="hidden ml-12 space-x-8 md:flex">
              {["О службе", "Вакансии", "Карьерный рост", "Льготы", "Истории успеха", "FAQ"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="px-4 py-2 text-white hover:text-gray-200 transition-colors text-sm">
              Войти в ЛК
            </a>
            <a
              href="#"
              className="px-5 py-2 text-white bg-blue-700 rounded-md hover:bg-blue-600 transition-colors text-sm font-medium"
            >
              Подать заявку
            </a>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col flex-1 items-center justify-center px-6 py-12 mx-auto text-center max-w-7xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm text-blue-300 bg-blue-900/30 border border-blue-700/40 rounded-full">
          <Icon name="Star" size={14} />
          Более 85 000 вакансий по всей стране
        </div>

        <h1 className="max-w-4xl mx-auto text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight">
          Госслужба — это{" "}
          <span className="text-blue-400">призвание</span>{" "}
          и стабильность
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-300 leading-relaxed">
          Присоединяйтесь к команде государственных профессионалов.
          <br />
          Достойная зарплата, социальные гарантии и возможность менять жизнь страны к лучшему.
        </p>
        <div className="flex flex-col mt-10 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="flex items-center justify-center px-8 py-3 text-lg font-medium text-gray-900 bg-white rounded-md hover:bg-gray-100 transition-colors"
          >
            Найти вакансию
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </a>
          <a
            href="#"
            className="px-8 py-3 text-lg font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 transition-colors"
          >
            Узнать о льготах
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-10 mt-16 mb-4">
          {[
            { value: "85 000+", label: "открытых вакансий" },
            { value: "340+", label: "ведомств и министерств" },
            { value: "32 %", label: "рост зарплат за 3 года" },
            { value: "98 %", label: "социальная защищённость" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        <div className="w-full mt-16 pt-10 border-t border-white/10">
          <p className="mb-8 text-gray-400 text-sm">
            Партнёры программы:{" "}
            <span className="text-white">федеральные ведомства и государственные структуры</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {["Минфин России", "Минтруд", "Роструд", "ФНС России", "Госуслуги"].map((name) => (
              <div key={name} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Icon name="Building2" size={16} />
                <span className="text-sm font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
