document.getElementById("fetchImages").addEventListener("click", async () => {
    // 현재 활성 탭의 정보를 가져옵니다.
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    // chrome:// URL은 스크립트 주입이 불가능하므로 예외 처리합니다.
    if (tab.url.startsWith("chrome://")) {
      alert("chrome:// 페이지에서는 실행할 수 없습니다.");
      return;
    }
  
    // 팝업에서 컨텐츠 스크립트로 메시지를 보냅니다.
    chrome.tabs.sendMessage(tab.id, { action: "getImages" }, (response) => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
        alert("메시지 전송 중 오류 발생");
        return;
      }
      
      // 응답으로 받은 이미지 URL 배열을 리스트에 표시합니다.
      const imgList = document.getElementById("imgList");
      imgList.innerHTML = "";
      if (response && response.images && response.images.length > 0) {
        response.images.forEach(url => {
          const li = document.createElement("li");
          li.textContent = url;
          imgList.appendChild(li);
        });
      } else {
        imgList.innerHTML = "<li>이미지가 없습니다.</li>";
      }
    });
  });
  