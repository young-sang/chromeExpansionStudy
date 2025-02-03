document.getElementById("getTitle").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    // 현재 탭의 URL이 chrome://으로 시작하면 경고 메시지 출력
    if (tab.url.startsWith("chrome://")) {
        alert("chrome:// 페이지에서는 스크립트를 실행할 수 없습니다.");
        return;
    }
    
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => alert(`현재 탭 제목: ${document.title}`)
    });
});
