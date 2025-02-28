// 1. window 타입 확장

import { useEffect } from "react";
import styled from "styled-components";

// window 객체에 gtranslateSettings 라는 설정값 추가를 위해 TS 전역 타입 선언 declare global 사용
declare global {
  interface Window {
    gtranslateSettings?: {
      default_language: string;
      detect_brower_language: boolean;
      languages: string[];
      wrapper_selector: string;
      flag_size: number;
    };
  }
}

// 2. 외부 스크립트를 비동기로 로드
const loadScript = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script"); // HTML에 <script> 태그 생성
    script.src = src; // 스크립트 URL 지정
    script.defer = true; // HTML 파싱 후 스크립트 실행
    script.onload = () => resolve(); // 스크립트 로드 성공 시 Promise를 resolve
    script.onerror = () => reject(new Error(`Failed to load script ${src}`)); // 실패 시 Promise를 reject
    document.body.appendChild(script); // <body>에 추가하여 즉시 로드
  });
};

export default function Translater() {
  // 3. useEffect를 사용해 GTranslate 설정 및 스크립트 로드
  useEffect(() => {
    const loadGTranslate = async () => {
      if (!window.gtranslateSettings) {
        // (1) GTranslate 설정 추가
        const script1 = document.createElement("script");
        script1.innerHTML = `
              window.gtranslateSettings = {
                  "default_language": "ko",
                  "detect_brower_language": true,
                  "languages": ["ko", "en", "ja"],
                  "wrapper_selector": ".gtranslate_wrapper",
                  "flag_size": 20
              };
              `;
        document.body.appendChild(script1);

        // (2) GTranslate 스크립트 로드 (비동기)
        try {
          await loadScript(
            "https://cdn.gtranslate.net/widgets/latest/flags.js"
          );
        } catch (err) {
          console.error("GTranslate script load failed:", err);
        }

        // (3) cleanup
        return () => {
          document.body.removeChild(script1);
        };
      }
    };

    loadGTranslate();
  }, []);

  // 4. 출력
  return <FlagsContainer className="gtranslate_wrapper" />;
}

const FlagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* 국기 간의 간격 띄우기 */
  padding: 10px;
`;
