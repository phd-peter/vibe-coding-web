import React from "react";

export default function Hero() {
  return (
    <section id="home" className="pt-40 sm:pt-44 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur text-xs text-gray-200">
            어떤 웹사이트든 내 프론트엔드화 시켜보세요
            <span className="hidden sm:inline text-white/70">• Open source</span>
            <a
              href="https://youtu.be/J3Ocsrx2b6s"
              target="_blank"
              rel="noreferrer"
              className="ml-1 underline underline-offset-2 hover:text-white transition-colors"
            >
              Youtube에서 확인하세요!
            </a>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            바이브 코딩 프론트엔드 제작을 위한 <br />
            웹사이트 훔치기!
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200">
            비전공자 30대 직장인도 할 수 있는 바이브 코딩
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://youtu.be/J3Ocsrx2b6s"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              지금바로 Youtube 보기
            </a>
            <a
              href="https://github.com/phd-peter/vibe-coding-web"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 transition-all"
            >
              View on GitHub
            </a>
          </div>

          {/* Glass code/result panel */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Vibe Coding</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-600/80 border border-white/10">
                  Frontend
                </span>
              </div>
              <pre className="mt-3 bg-gray-900/60 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`// 바이브 코딩으로 나왔던 프론트엔드가 마음에 안드셨다고요? 

저도 그래요..

하지만 Lovable 오픈소스와 함께하면 가능입니다! 

웹사이트 레퍼런스만 가져오세요 
`}</code>
              </pre>
            </div>

            <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">200 Response</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-600/80 border border-white/10">
                  dev-ilsan
                </span>
              </div>
              <pre className="mt-3 bg-gray-900/60 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`생각보다 쉽지만,
                
또 생각보다 어려운 바이브 코딩

개발일산과 함께하세요

열심히 배우고 열심히 나누겠습니다!

`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}