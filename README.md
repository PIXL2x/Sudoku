# Sudoku++

React Native기반 모바일 스도쿠 앱

## 주요 기능

- **난이도 선택:** 이지, 노말, 하드 3가지 난이도 중 선택 가능
- **타이머 기능:** 풀기 시작한 시간을 측정하여 풀이 시간을 확인
- **빠른 클리어 기록:** 가장 빠른 풀이 기록을 간편히 확인 가능
- **렌더링 최적화:** WebGL을 사용한 효율적인 렌더링
- **시각적 도움:** 셀 선택 시 해당 행, 열, 블록이 강조 표시
- **목숨 시스템:** 틀린 숫자를 입력하면 목숨이 줄어들고(초기 3개), 목숨이 모두 소진되면 게임오버

## 기술 스택

- **프론트엔드:** React, React-Native
- **개발 플랫폼:** Expo
- **상태 관리:** Zustand
- **스도쿠 렌더링:** WebGL

## 로컬 개발 환경 설정

1. 리포지토리 클론

```bash
git clone https://github.com/PIXL2x/Sudoku/
```

2. 프로젝트 디렉토리로 이동

```bash
cd Sudoku
```

3. 패키지 설치

```bash
npm install
```

4. Expo 실행 (안드로이드 또는 iOS)

```bash
# 안드로이드
npx expo android

# iOS
npx expo ios
```

> **Note:** 실행하기 전에 Android Studio나 Xcode를 플랫폼에 맞게 설치 필요.

## 스크린샷

<div align="center">
  <img width="200" src="https://github.com/user-attachments/assets/e81d62d6-a5c3-4366-b24f-76d1ed1432b1" alt="Sudoku App Screenshot"/>
</div>

