---
title: "TMUX · CMUX · 덕테이프 — 터미널 멀티플렉서의 진화"
tags: [개발도구, 터미널, AI, tmux, cmux, claude-code]
date: 2026-05-11
description: "30년 된 TMUX부터 AI 시대의 CMUX까지, 그리고 그 뒷이야기 '덕테이프' 정신. 한 장의 카드뉴스로 정리하는 터미널 멀티플렉서의 어제와 오늘."
---

# 🖥️ TMUX · CMUX · 덕테이프

## 🎯 한 줄 요약

> **TMUX**는 30년 된 정통 터미널 멀티플렉서, **CMUX**는 2026년 AI 에이전트 시대를 위해 새로 만든 멀티플렉서, **덕테이프(Duct Tape)**는 "기본 도구만으로 끝까지 해결한다"는 개발자 정신. 셋은 서로 보완 관계다.

![터미널 멀티플렉서 비교 카드뉴스](/00-personal/블로그/attachments/2026-05-11_tmux-cmux-덕테이프_카드뉴스.png)

---

## 🧩 1. TMUX — Terminal MUltipleXer (30년 정통)

- 🎯 **무엇**: 1989년 등장한 GNU Screen의 후예, 2007년 등장한 **터미널 멀티플렉서**. 한 터미널 안에서 여러 세션·창·패널을 띄우는 도구.
- 📊 **얼마나**: 거의 모든 리눅스/맥/유닉스 표준 도구. SSH로 원격 서버에 붙어 작업 중 연결이 끊겨도 세션이 살아있어 다시 붙으면 그대로 이어짐.
- 🔍 **왜**: 터미널 1개로 화면 분할(가로/세로)·세션 백그라운드·여러 작업 동시 진행. **CLI만으로 IDE 같은 워크플로우** 구축 가능.
- 🇰🇷 **한국에서?**: 서버 관리자·개발자에게 필수 도구. 기상청·은행·통신사 운영 환경에서 30년째 현역.

### TMUX의 핵심 매력
- **세션 영속성**: 노트북을 닫아도 서버의 세션은 살아있음
- **크로스 플랫폼**: macOS·Linux·Windows(WSL) 모두
- **단축키 학습 장벽**: `Ctrl+b` 프리픽스 + 알파벳 — 익히면 손이 빠름

---

## 🤖 2. CMUX — Claude/Code MUltipleXer (AI 시대 후예)

- 🎯 **무엇**: 2026년 Manaflow AI가 만든 **AI 코딩 에이전트 전용 멀티플렉서**. tmux 정신을 이어받되 AI 워크플로우에 최적화.
- 📊 **얼마나**: GitHub ⭐ 빠르게 증가 중. 네이티브 macOS 앱(Ghostty libghostty 기반) + CLI. Claude Code·Codex·OpenCode·Gemini CLI·Aider 등 **모든 CLI 에이전트 통합**.
- 🔍 **왜**: tmux는 사람이 보는 터미널을 가정. CMUX는 **여러 AI 에이전트가 동시에 일하는 풍경**을 가정 → 에이전트 알림·화면 캡처·에이전트 간 통신(read-screen) 같은 AI-네이티브 기능 추가.
- 🇰🇷 **한국에서?**: Claude Code 한국 사용자 급증과 함께 관심 ↑. 여러 AI 에이전트 병렬 워크플로우(예: 코드·테스트·리뷰 동시 진행)에 적합.

### CMUX의 핵심 매력
- **AI 에이전트 알림**: 에이전트가 "기다림"에서 "응답함"으로 전환되면 즉시 표시
- **에이전트 간 통신**: A 에이전트가 B 에이전트의 화면을 읽고 협업
- **GUI 시각화**: 여러 패널을 한눈에 (수직 탭·분할 패널·임베드 브라우저)
- **소켓 API**: 자동화 스크립트로 멀티플렉싱 제어

---

## 🩹 3. 덕테이프(Duct Tape) — 정신과 비유

- 🎯 **무엇**: 직역하면 "덕트 테이프"(만능 접착 테이프). 개발 문화에서는 **"정식 도구·완벽한 솔루션 대신 기본 도구만으로 끝까지 해결하는 정신"**.
- 📊 **얼마나**: 실리콘밸리 명저 *The Duct Tape Programmer*(Joel Spolsky, 2009)에서 유래. **"완벽한 GUI 대신 tmux로 충분, 화려한 IDE 대신 vim으로 충분"** 같은 미니멀리즘.
- 🔍 **왜**: 도구가 많아질수록 **학습·유지·의존성 관리**가 늘어남. 덕테이프 정신은 *"기본기만 잘 갈고닦으면 어떤 환경에서도 일할 수 있다"*는 실용주의.
- 🇰🇷 **한국에서?**: SI 환경, 폐쇄망, 정부 사업 등 **신규 도구 도입이 어려운 곳에서 빛남**. tmux + vim + bash로만 풀스택 개발이 가능한 이유.

### 덕테이프 vs AI-네이티브 비교
| 관점 | 덕테이프 (tmux + vim + bash) | AI-네이티브 (cmux + Claude Code) |
|---|---|---|
| 학습 곡선 | 가파름 (1년+) | 완만함 (1주) |
| 환경 의존성 | 거의 없음 (SSH만 되면) | 인터넷·API 키 필수 |
| 자동화 수준 | 사람 손 위주 | AI 에이전트가 분담 |
| 적합 분야 | 폐쇄망·서버 운영·임베디드 | 개인 개발·MVP·콘텐츠 제작 |

---

## 💡 셋이 어울리는 워크플로우 예시

```
[데스크탑 환경]
  ├─ tmux: SSH로 원격 서버 관리·로그 모니터링·재기동
  ├─ cmux: AI 코딩 에이전트 여러 개를 동시에 운영
  └─ 덕테이프 정신: 한 도구가 안 되면 또 다른 기본 도구로
```

- **서버 장애 대응** → tmux로 SSH + 로그 추적 + 핫픽스
- **여러 AI 에이전트 동시 작업** → cmux로 코드·테스트·리뷰 병렬
- **새 도구 못 쓰는 환경** → 덕테이프 정신으로 vim + tmux + bash만으로 풀어내기

세 가지를 **상황에 맞게 골라쓰는 것**이 진짜 멀티플렉싱이다.

---

## 📎 참고 자료

- [tmux GitHub](https://github.com/tmux/tmux/wiki) — TMUX 공식 위키
- [cmux 공식 사이트](https://cmux.com/) — Manaflow AI의 cmux
- [tmux vs cmux 비교 (2026)](https://ice-ice-bear.github.io/posts/2026-03-23-tmux-cmux/) — Battle-Tested vs AI Agent
- [The Duct Tape Programmer (Joel Spolsky, 2009)](https://www.joelonsoftware.com/2009/09/23/the-duct-tape-programmer/) — 덕테이프 정신 원전
- [Claude Code Agent Teams](https://code.claude.com/docs/en/agent-teams) — tmux 기반 병렬 에이전트
- [AI Terminal Multiplexers Compared](https://getbeam.dev/blog/ai-terminal-multiplexers-compared-2026.html) — Superset·Chloe·cmux 비교 (Beam, 2026)

---

> 💬 **한 줄 코멘트**: 좋은 도구는 정답이 아니라 *상황에 맞는 선택지*다. tmux가 30년 살아남은 이유, cmux가 2026년 떠오른 이유, 그리고 덕테이프 정신이 두 도구를 가능하게 하는 이유 — 모두 같은 이야기다.

> ⚠️ 본 글은 학습·기록 목적입니다. 도구 선택은 본인 환경·팀·용도에 맞게 결정하세요.
