<template>
  <main class="page-main">
    <h1 class="page-title">Contact Page</h1>
    <div class="inner">
      <div class="p-form">
        <form @submit.prevent="handleSubmit" class="checkout-form">
          <dl class="p-form_ctrl">
            <dt class="p-form_ctrl__lbl">企業名<span class="req">【必須】</span></dt>
            <dd class="p-form_ctrl__ctn">
              <input type="text" name="your_company" v-model="form.your_company" required class="ipt" placeholder="DGWA">
            </dd>
          </dl>
          <dl class="p-form_ctrl">
            <dt class="p-form_ctrl__lbl">部署名</dt>
            <dd class="p-form_ctrl__ctn"><input type="text" name="your_department" v-model="form.your_department" class="ipt" placeholder="DEV"></dd>
          </dl>
          <dl class="p-form_ctrl">
            <dt class="p-form_ctrl__lbl">氏名<span class="req">【必須】</span></dt>
            <dd class="p-form_ctrl__ctn"><input type="text" name="your_name" v-model="form.your_name" class="ipt" placeholder="ANHPT"></dd>
          </dl>
          <dl class="p-form_ctrl">
            <dt class="p-form_ctrl__lbl">電話番号<span class="req">【必須】</span></dt>
            <dd class="p-form_ctrl__ctn"><input type="text" name="your_phone" v-model="form.your_phone" class="ipt" placeholder="0123456789"></dd>
          </dl>
          <dl class="p-form_ctrl">
            <dt class="p-form_ctrl__lbl">メールアドレス<span class="req">【必須】</span></dt>
            <dd class="p-form_ctrl__ctn"><input type="text" name="your_email" v-model="form.your_email" class="ipt" placeholder="XXXXXXXXXXXXXXX@xx.xx.xx"></dd>
          </dl>
          <dl class="p-form_ctrl">
            <dt class="p-form_ctrl__lbl">お問い合わせ内容<span class="req">【必須】</span></dt>
            <dd class="p-form_ctrl__ctn"><textarea name="your_content" v-model="form.your_content" id="" class="ipt are" placeholder="疑問点・ご依頼などお気軽にご入力ください。"></textarea></dd>
          </dl>
          <div class="p-form_btn">
            <button type="submit" class="btn">確認画面へ</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "CheckoutForm",
  methods: {
    handleSubmit() {
      alert("form submitted");
    },
  },
  setup() {
    const form = reactive({
      your_company: "",
      your_department: "",
      your_name: "",
      your_phone: "",
      your_email: "",
      your_content: "",
    });

    return {
      form,
    };
  },
};
</script>