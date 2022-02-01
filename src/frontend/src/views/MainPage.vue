<template>
  <div>
    <section class="visual slide">
      <div class="con">
        <div class="slide">
          <div class="txt">
            당신이 생각하는<br>
            NEVERLAND
            <p>가장 멋진 네버랜드를 만들어주세요</p>
          </div>
        </div>
      </div>
    </section>
    <section class="product">
      <h2 class="hide">제품정보</h2>
      <ul>
        <li><a href="#a">홈</a></li>
        <li><a href="#a">작성</a></li>
        <li><a href="#a">조회</a></li>
        <li><a href="#a">프로필</a></li>
        <li><a href="#a">네버랜드</a></li>
        <li><a href="#a">연락</a></li>
      </ul>
    </section>
    <div class="section">
      <h2>NEVERLAND</h2>
      <p>다양한 네버랜드를 구경하세요</p>
      <input type="radio" name="slide" id="slide01" checked>
      <input type="radio" name="slide" id="slide02">
      <input type="radio" name="slide" id="slide03">
      <input type="radio" name="slide" id="slide04">
      <div class="slidewrap">
        <ul class="slidelist">
          <!-- 슬라이드 영역 -->
          <li class="slideitem">
            <a>
              <div class="textbox">
                <h3>첫번째 슬라이드</h3>
                <p>첫번째 슬라이드 입니다.</p>
              </div>
              <img src="@/assets/images/img6.jpg">
            </a>
          </li>
          <li class="slideitem">
            <a>

              <div class="textbox">
                <h3>두번째 슬라이드</h3>
                <p>두번째 슬라이드 입니다.</p>
              </div>
              <img src="@/assets/images/img6.jpg">
            </a>
          </li>
          <li class="slideitem">
            <a>

              <div class="textbox">
                <h3>세번째 슬라이드</h3>
                <p>세번째 슬라이드 입니다.</p>
              </div>
              <img src="@/assets/images/img6.jpg">
            </a>
          </li>
          <!-- 좌,우 슬라이드 버튼 -->
          <div class="slide-control">
            <div>
              <label for="slide03" class="left"></label>
              <label for="slide02" class="right"></label>
            </div>
            <div>
              <label for="slide01" class="left"></label>
              <label for="slide03" class="right"></label>
            </div>
            <div>
              <label for="slide02" class="left"></label>
              <label for="slide01" class="right"></label>
            </div>
          </div>

        </ul>
        <!-- 페이징 -->
        <ul class="slide-pagelist">
          <li><label for="slide01"></label></li>
          <li><label for="slide02"></label></li>
          <li><label for="slide03"></label></li>
        </ul>
      </div>
    </div>
    <section class="notice">
      <div class="clear">
        <div class="top clear">
          <h2>WHAT IS NEVERLAND?</h2>
          <ul>
            <li><a href="#a">창작하는<span>당신이 생각하는 플랫폼</span></a></li>
            <li><a href="#a">공유하는<span>우리가 생각하는 플랫폼</span></a></li>
            <li><a href="#a">자유로운<span>가까운 한솔홈데코 매장 확인</span></a></li>
            <li><a href="#a">특별한<span>한솔의 행복한 삶의 공간 이야기</span></a></li>
          </ul>
        </div>
      </div>
    </section>
    <footer>
      <div class="btm">
        <p>네버랜드</p>
        <address>Copyright 2022 NEVERLAND All rights reserved.</address>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "MainPage"
}
</script>

<style scoped>

</style>