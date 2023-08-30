<template>
  <div class="wrap">
    <div class="order_amount">
      <span class="amount">{{ orderInfo.order_amount }}</span>
      <span class="unit"> MMK</span>
    </div>
    <van-cell class="bankInfo">
      <template>
        <img class="fornt_icon" src="../../assets/Wallet.png" alt />
        <!-- 转账金额 -->
        <span class="bank_title"
          >လွှပြောင်းပမာဏ：{{ orderInfo.order_amount }}</span
        >
        <img
          src="../../assets/copy.png"
          alt
          class="copy"
          v-clipboard:copy="orderInfo.order_amount"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
        />
      </template>
    </van-cell>
    <van-cell class="bankInfo">
      <template>
        <!-- 银行卡号 -->
        <img class="fornt_icon" src="../../assets/Credit Card.png" alt />
        <span class="bank_title">ဘဏ်ကတ်နံပါတ်：{{ orderInfo.pay_no }}</span>
        <img
          src="../../assets/copy.png"
          alt
          class="copy"
          v-clipboard:copy="orderInfo.pay_no"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
        />
      </template>
    </van-cell>
    <van-cell class="bankInfo">
      <template>
        <!-- 收款人姓名 -->
        <img class="fornt_icon" src="../../assets/User.png" alt />
        <span class="bank_title">ငွေလက်ခံသူအမည်：{{ orderInfo.pay_name }}</span>
        <img
          src="../../assets/copy.png"
          alt
          class="copy"
          v-clipboard:copy="orderInfo.pay_name"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
        />
      </template>
    </van-cell>
    <van-cell class="bankInfo">
      <template>
        <!-- 银行名称 -->
        <img class="fornt_icon" src="../../assets/Building.png" alt />
        <span class="bank_title">ဘဏ်အမည်: {{ orderInfo.pay_organ }}</span>
        <img
          src="../../assets/copy.png"
          alt
          class="copy"
          v-clipboard:copy="orderInfo.pay_organ"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
        />
      </template>
    </van-cell>
    <van-cell class="bankInfo">
      <template>
        <!-- 银行支行 -->
        <img class="fornt_icon" src="../../assets/Building.png" alt />
        <span class="bank_title">ဘဏ်ခွဲ: {{ orderInfo.pay_local }}</span>
        <img
          src="../../assets/copy.png"
          alt
          class="copy"
          v-clipboard:copy="orderInfo.pay_local"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
        />
      </template>
    </van-cell>
    <div
      style="
        font-size: 14px;
        color: #ff976a;
        margin: 8px 0 8px 0;
        margin-left: 10px;
      "
    >
      <van-icon name="warning" style="padding-top: 5px" />
      <!-- 转账备注必填，否则不能及时到账 -->
      <span style="vertical-align: bottom; padding-left: 5px">ငွေလွှရန် မှတ်ချက်များ လိုအပ်သည်၊ သိုမဟုတ်ပါက အကောင့်ထဲ အချိန်မီငွေရောက်ရှိမည်မဟုတ်ပါ။</span>
    </div>
    <div style="padding: 14px 24px 24px 24px">
      <p class="title">
        <!-- 订单 -->
        <strong>အော်ဒါပုံစံ</strong>
      </p>
      <p class="orderInfo">
        အော်ဒါ အမျိုးအစား：
        <span>ဘဏ်ကတ်ငွေလွှခြင်း။</span>
      </p>
      <p class="orderInfo">
        အော်ဒါနံပါတ်：
        <span style="font-size: 12px">{{ orderInfo.order_no }}</span>
      </p>
      <p class="orderInfo">
        တရားဝင်သက်တမ်း：
        <span>
          <van-count-down
            :time="sec"
            format=" mm မိနစ် ss စက္ကန်."
            style="display: inline-block; color: #f56c6c"
            @finish="finish"
          />
        </span>
      </p>
    </div>
    <div class="tips">
      <p class="important">အရေးကြီးသောသတိပေးချက်</p>
      <p>1. မိုဘိုင်းဘဏ်မှ လွဲပြောင်းနိုင်တော. ဆော.ဖ်ဝဲ</p>
      <p>2. ကျေးဇူးပြု၍ မှန်ကန်သော လွှပြောင်းငွေပမာဏနှင့် မှတ်ချက်များ ကိုဖြည့်ပါ ( သိုမဟုတ် )ပါက  အပ်ငွေသည် အချိန်မီရောက်ရှိမည်မဟုတ်ပါ။</p>
      <p>3. နောက်တစ်ကြိမ် ငွေသွင်းသည့်အခါ အကောင့်နံပါတ်အသစ်တစ်ခုထပ်ယူပါ၊ အကောင်.နံပါတ် အဟောင်း ထည်.မိပါက ငွေရောက်မည်မဟုတ်ပါ</p>
      <p>4. ငွေလွှသည့်အခါ လက်ခံကတ်နံပါတ်ကို ဦးစွာ ကူးယူပြီး ကူးထည့်ပါ။</p>
      <p>5. ငွေသွင်းနည်းကို မသိပါက အပ်ငွေ သင်ခန်းစာ စာမျက်နှာရှိ နည်းလမ်းများကိုတစ်ဆင်.ခြင်းဆီ  လိုက်လုပ်ပါ</p>
      <p>7. ကျေးဇူးပြု၍ အပ်ငွေ ပို.ပေးသည် စာသည် 1 မိနစ်သာ အကျုံးဝင်ပါသည်။</p>
      <p>7. အပ်ငွေနှင့်ပတ်သက်၍ သင့်တွင်မေးခွန်းများရှိပါက၊ အချိန်မီဖြေရှင်းရန် ဖောက်သည်ဝန်ဆောင်မှုကို ဆက်သွယ်ပါ။</p>
    </div>
  </div>
</template>

<script>
import { Cell, CountDown, Icon, Toast } from "vant";
export default {
  components: {
    [Cell.name]: Cell,
    [CountDown.name]: CountDown,
    [Icon.name]: Icon,
    [Toast.name]: Toast,
  },
  data() {
    return {
      orderInfo: {},
      bankInfo: {},
      sec: 0,
      timer: "",
    };
  },

  methods: {
    //获取信息
    getData() {
      var _this = this;
      _this.$axios
        // .post("index.php?s=OTCUser.pcode&time=" + this.$route.query.time)
        .get(
          "Task/Comment_CommonController.getOrder?orderNo=" +
            this.$route.query.time
        )
        .then((res) => {
          if (res.data.data.status > 2) {
            this.$router.push({ path: "end" });
            clearInterval(this.timer);
          } else {
            this.orderInfo = res.data.data;
            // this.bankInfo = JSON.parse(res.data.data.pay_code);
            // this.orderInfo.amount = (this.orderInfo.amount / 100).toFixed(2);
            this.sec =
              parseInt(
                new Date(this.orderInfo.end_time.replace(/\//g, "-")).getTime()
              ) - new Date().getTime();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //复制
    onCopy() {
      Toast.success("复制成功");
    },
    onError() {
      Toast.fail("复制失败请重试！！");
    },
    finish() {
      // this.$router.push({ path: "end" });
    },
  },
  created() {
    this.getData();
  },
  mounted() {
    this.timer = setInterval(this.getData, 5000);
    this.sec = 300;
  },
};
</script>

<style lang="less" scoped>
.wrap {
  width: 100%;
  background-color: #f7f6f9;
  position: absolute;
}
.order_amount {
  width: 100%;
  height: 88px;
  background-color: #009dff;
  color: #ffffff;
  font-size: 30px;
  line-height: 88px;
  .unit {
    font-size: 16px;
    font-weight: 400;
  }
}
.bankInfo {
  font-size: 12px;
  color: #606266;
  .bank_title {
    padding-left: 15px;
  }
}

.fornt_icon {
  vertical-align: middle;
}
.copy {
  vertical-align: middle;
}
.tips {
  color: #909399;
  font-size: 10px;
  padding-left: 16px;
  padding-right: 10px;
  margin-top: 16px;
  .important {
    font-size: 14px;
    color: rgb(255, 151, 106);
  }
}
.van-cell__value--alone {
  color: #606266;
}
.van-cell {
  background-color: #f7f6f9;
}
.title {
  text-align: center;
  font-size: 18px;
  margin: 0;
  margin-bottom: 20px;
}
.orderInfo {
  color: #606266;
  font-size: 14px;
}
</style>
