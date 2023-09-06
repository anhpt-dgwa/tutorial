<template>
  <section id="contact" class="section section-contact">
    <div class="container">
      <div class="section-title white animation">
        <h2 class="section-title_ttl">contact</h2>
        <span class="section-title_sub">お問い合わせ</span>
      </div>
      <div class="contact-wrap">
        <div class="contact-col contact-form animation">
          <form>
            <dl class="form-control">
              <dt class="form-control_lbl">お名前</dt>
              <dd class="form-control_ctn">
                <p><span>姓</span><input type="text" name="first-name" class="ipt ipt-sm"></p>
                <p><span>姓</span><input type="text" name="last-name" class="ipt ipt-sm"></p>
              </dd>
            </dl>
            <dl class="form-control">
              <dt class="form-control_lbl">貴社名</dt>
              <dd class="form-control_ctn"><input type="text" name="cpn-name" class="ipt"></dd>
            </dl>
            <dl class="form-control">
              <dt class="form-control_lbl">メールアドレス</dt>
              <dd class="form-control_ctn"><input type="email" name="email" class="ipt" required></dd>
            </dl>
            <dl class="form-control">
              <dt class="form-control_lbl">お問い合わせ内容</dt>
              <dd class="form-control_ctn"><textarea name="message" class="are"></textarea></dd>
            </dl>
            <div class="form-control">
              <p class="form-control_ctn"><button type="submit" class="btn btn-submit"><span>送信する</span></button></p>
            </div>
          </form>
        </div>
        <div class="contact-col contact-info">
          <div class="footer-logo animation">
            <a href="../"><img src="../assets/logo-footer.png" alt=""></a>
          </div>
          <dl class="footer-info animation">
            <dt>[日本法人]</dt>
            <dd>株式会社アイエフヴイアジア<br>〒162-0846 東京都新宿区市谷左内町5番地202<br>03-6824-9033</dd>
            <dt>ベトナム本社]</dt>
            <dd>IF Vietnam Co., Ltd.<br>Floor 3rd of 15 Quang Trung Building, Hai Chau I Ward, Hai Chau District, Da Nang City, Vietnam.</dd>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>