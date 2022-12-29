const Foam = () => {
    return(
        <div class="container">
          <a href="#Foam"></a>
    <div class="input-form-backgroud row">
      <div class="input-form col-md-12 mx-auto">
        <h4 class="mb-3 text-center m-5"><i class="fa-solid fa-bullhorn"></i> 면접제안</h4>
        <form class="validation-form" novalidate> 
          <div class="row">
            <div class="col-md-6 mb-3">
              <label htmlFor="name">이름</label>
              <input type="text" class="form-control" id="name" placeholder="성명" required></input>
              <div class="invalid-feedback">
                이름을 입력해주세요.
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label htmlFor="nickname">나이</label>
              <input type="number" class="form-control" id="age" placeholder="" required></input>
              <div class="invalid-feedback">
                나이를 입력해주세요.  
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label htmlFor="email">이메일</label>
            <input type="email" class="form-control" id="email" placeholder="you@example.com" required></input>
            <div class="invalid-feedback">
              이메일을 입력해주세요.
            </div>
          </div>
          <div class="mb-3">
            <label htmlFor="address">주소</label>
            <input type="text" class="form-control" id="address" placeholder="서울특별시 강남구" required></input>
            <div class="invalid-feedback">
              주소를 입력해주세요.
            </div>
          </div>
          <div class="mb-3">
            <label htmlFor="address2">상세주소<span class="text-muted">&nbsp;(필수 아님)</span></label>
            <input type="text" class="form-control" id="address2" placeholder="상세주소를 입력해주세요."></input>
          </div>
          <div class="row">
            <div class="col-md-8 mb-1">
              <h6>희망직무 <span class="text-muted">&nbsp;(중복가능)</span> </h6> 
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="frontEnd" value="frontEnd"></input>
                <label class="custom-control-label" for="frontEnd">프론트엔드</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="backEnd" value="backEnd"></input>
                <label class="custom-control-label" for="backEnd">백엔드</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="pub" value="publisher"></input>
                <label class="custom-control-label" for="pub">퍼블리셔</label>
              </div>
              <div class="invalid-feedback">
                희망직무를 선택해주세요.
              </div>
            </div>
            <div class="col-md-4 mb-3">
            </div>
          </div>
          <hr class="mb-4"></hr>
          <div class="custom-control custom-checkbox text-center">
            <input type="checkbox" class="custom-control-input" id="aggrement" required></input>
            <label class="custom-control-label" for="aggrement">개인정보 수집 및 이용에 동의합니다.</label>
          </div>
          <div class="mb-1 text-center">
          <button class="btn btn-primary btn-lg btn-block" type="submit">면접제안 보내기</button>
          </div>
        </form>
      </div>
    </div>
    <footer class="my-3 text-center text-small">
      <p class="mb-1">&copy; LHK</p>
    </footer>
  </div>        
    )
}
export default Foam;