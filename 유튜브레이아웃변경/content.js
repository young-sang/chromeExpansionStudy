console.log("YouTube Layout Customizer Loaded!");

// 배경 색상을 어두운 회색으로 변경
document.body.style.backgroundColor = "#181818";

// 동영상 리스트 크기 조정
let videoGrid = document.querySelector("#contents");
if (videoGrid) {
  videoGrid.style.display = "grid";
  videoGrid.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))";
  videoGrid.style.gap = "20px";
}

// 상단 네비게이션 바 투명하게 만들기
let navbar = document.querySelector("#masthead-container");
if (navbar) {
  navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
}
