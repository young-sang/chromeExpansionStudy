// 컨텐츠 스크립트는 페이지 내의 모든 <img> 태그의 src 값을 수집합니다.
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getImages") {
      const imgElements = document.getElementsByTagName("img");
      const images = [];
      for (let img of imgElements) {
        // src 속성이 존재하는 경우에만 추가
        if (img.src) {
          images.push(img.src);
        }
      }
      // 수집한 이미지 URL 배열을 응답으로 전달합니다.
      sendResponse({ images });
    }
    // 비동기 응답을 사용하지 않을 경우 true를 리턴할 필요는 없습니다.
  });
  