<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import {
  getCheckoutInfoAPI,
  addAddressAPI,
  getAddressAPI
} from '@/apis/Checkout'
import { reqPostPay } from '@/apis/pay'
import { useRouter } from 'vue-router'
import { cAType, cIType } from '@/types/checkout'

const checkInfo = ref<cAType>({} as cAType) // 订单对象
const curAddress = ref<cIType>({} as cIType) // 地址对象
const CheckoutList = async () => {
  const res = await getCheckoutInfoAPI()
  if (res.code === '1') {
    curAddress.value = res.result
    checkInfo.value = res.result
  }
}
onMounted(() => {
  CheckoutList()
})

const toggleFlag = ref(false)
const upDataAddresses = (item: { isDefault: number }) => {
  curAddress.value.userAddresses.forEach((e: { isDefault: number }) => {
    e.isDefault = 1
  })
  item.isDefault = 0
  toggleFlag.value = false
}
const addFlag = ref(false)

let userForm = reactive({
  receiver: '',
  contact: '',
  provinceCode: '',
  cityCode: '',
  countyCode: '',
  address: '',
  postalCode: '',
  addressTags: '',
  isDefault: '',
  fullLocation: ''
})

const getAddress = async () => {
  const res = await getAddressAPI()
  if (res.code === '1') {
    curAddress.value.userAddresses = res.result
  }
}
const addAddress = async () => {
  const res = await addAddressAPI(userForm)
  if (res.code === '1') {
    addFlag.value = false
    getAddress()
  }
}
const addAddressFlag = () => {
  // 初始化数据
  userForm = reactive({
    receiver: '',
    contact: '',
    provinceCode: '',
    cityCode: '',
    countyCode: '',
    address: '',
    postalCode: '',
    addressTags: '',
    isDefault: '',
    fullLocation: ''
  })
  addFlag.value = true
}

const router = useRouter()
const submitOrder = async () => {
  const res = await reqPostPay({
    deliveryTimeType: 1,
    payType: 1,
    payChannel: 1,
    buyerMessage: '',
    goods: curAddress.value.goods.map(
      (item: { skuId: string; count: number }) => {
        return {
          skuId: item.skuId,
          count: item.count
        }
      }
    ),
    addressId: curAddress.value.userAddresses.filter(
      (item: { isDefault: number }) => item.isDefault === 0
    )[0].id
  })
  if (res.code === '1') {
    const orderId = res.result.id
    router.push({
      name: 'pay',
      query: {
        id: orderId
      }
    })
    alert('提交成功')
  }
}
</script>

<template>
  <div class="xtx-pay-checkout-page">
    <div class="container">
      <div class="wrapper">
        <!-- 收货地址 -->
        <h3 class="box-title">收货地址</h3>
        <div class="box-body">
          <div class="address">
            <div class="text">
              <div class="none" v-if="!curAddress">
                您需要先添加收货地址才可提交订单。
              </div>
              <ul
                v-for="i in curAddress.userAddresses"
                :key="i.id"
                v-show="i.isDefault === 0">
                <li>
                  <span>
                    收
                    <i />
                    货
                    <i />
                    人：
                  </span>
                  {{ i.receiver }}
                </li>
                <li>
                  <span>联系方式：</span>
                  {{ i.contact }}
                </li>
                <li>
                  <span>收货地址：</span>
                  {{ i.fullLocation }} {{ i.address }}
                </li>
              </ul>
            </div>
            <div class="action">
              <el-button size="large" @click="toggleFlag = true">
                切换地址
              </el-button>
              <el-button size="large" @click="addAddressFlag">
                添加地址
              </el-button>
            </div>
          </div>
        </div>
        <!-- 商品信息 -->
        <h3 class="box-title">商品信息</h3>
        <div class="box-body">
          <table class="goods">
            <thead>
              <tr>
                <th width="520">商品信息</th>
                <th width="170">单价</th>
                <th width="170">数量</th>
                <th width="170">小计</th>
                <th width="170">实付</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in checkInfo.goods" :key="i.id">
                <td>
                  <a href="javascript:;" class="info">
                    <img :src="i.picture" alt="" >
                    <div class="right">
                      <p>{{ i.name }}</p>
                      <p>{{ i.attrsText }}</p>
                    </div>
                  </a>
                </td>
                <td>&yen;{{ i.price }}</td>
                <td>{{ i.price }}</td>
                <td>&yen;{{ i.totalPrice }}</td>
                <td>&yen;{{ i.totalPayPrice }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- 配送时间 -->
        <h3 class="box-title">配送时间</h3>
        <div class="box-body">
          <a class="my-btn active" href="javascript:;">
            不限送货时间：周一至周日
          </a>
          <a class="my-btn" href="javascript:;">工作日送货：周一至周五</a>
          <a class="my-btn" href="javascript:;">双休日、假日送货：周六至周日</a>
        </div>
        <!-- 支付方式 -->
        <h3 class="box-title">支付方式</h3>
        <div class="box-body">
          <a class="my-btn active" href="javascript:;">在线支付</a>
          <a class="my-btn" href="javascript:;">货到付款</a>
          <span style="color: #999">货到付款需付5元手续费</span>
        </div>
        <!-- 金额明细 -->
        <h3 class="box-title">金额明细</h3>
        <div class="box-body">
          <div class="total">
            <dl>
              <dt>商品件数：</dt>
              <dd>{{ checkInfo.summary?.goodsCount }}件</dd>
            </dl>
            <dl>
              <dt>商品总价：</dt>
              <dd>¥{{ checkInfo.summary?.totalPrice.toFixed(2) }}</dd>
            </dl>
            <dl>
              <dt>
                运
                <i />
                费：
              </dt>
              <dd>¥{{ checkInfo.summary?.postFee.toFixed(2) }}</dd>
            </dl>
            <dl>
              <dt>应付总额：</dt>
              <dd class="price">
                {{ checkInfo.summary?.totalPayPrice.toFixed(2) }}
              </dd>
            </dl>
          </div>
        </div>
        <!-- 提交订单 -->
        <div class="submit">
          <el-button type="primary" size="large" @click="submitOrder">
            提交订单
          </el-button>
        </div>
      </div>
    </div>
  </div>
  <!-- 切换地址 -->
  <el-dialog v-model="toggleFlag" title="切换收货地址" width="30%" center>
    <div class="addressWrapper">
      <div
        class="text item"
        v-for="item in checkInfo.userAddresses"
        :key="item.id">
        <ul @click="upDataAddresses(item)">
          <li>
            <span>
              收
              <i />
              货
              <i />
              人：
            </span>
            {{ item.receiver }}
          </li>
          <li>
            <span>联系方式：</span>
            {{ item.contact }}
          </li>
          <li>
            <span>收货地址：</span>
            {{ item.fullLocation + item.address }}
          </li>
        </ul>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="toggleFlag = false">取消</el-button>
        <el-button type="primary" @click="toggleFlag = false">确定</el-button>
      </span>
    </template>
  </el-dialog>
  <!-- 添加地址 -->
  <el-dialog v-model="addFlag" title="添加地址" width="50%" center>
    <div style="height: 300px; overflow-y: auto">
      <el-form :model="userForm" :inline="true" size="default">
        <el-form-item label="收货人名">
          <el-input v-model="userForm.receiver" />
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="userForm.contact" />
        </el-form-item>
        <el-form-item label="省份编码">
          <el-input v-model="userForm.provinceCode" />
        </el-form-item>
        <el-form-item label="城市编码">
          <el-input v-model="userForm.cityCode" />
        </el-form-item>
        <el-form-item label="地区编码">
          <el-input v-model="userForm.countyCode" />
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input v-model="userForm.address" />
        </el-form-item>
        <el-form-item label="邮政编码">
          <el-input v-model="userForm.postalCode" />
        </el-form-item>
        <el-form-item label="地址标签">
          <el-select
            v-model="userForm.addressTags"
            class="m-2"
            placeholder="家，公司，学校"
            size="large">
            <el-option label="家" value="家" />
            <el-option label="公司" value="公司" />
            <el-option label="学校" value="学校" />
          </el-select>
        </el-form-item>
        <el-form-item label="地址默认">
          <el-select
            v-model="userForm.isDefault"
            class="m-2"
            placeholder="默认0:,不默认1"
            size="large">
            <el-option label="1" value="1" />
            <el-option label="0" value="0" />
          </el-select>
        </el-form-item>
        <el-form-item label="完整地址">
          <el-input v-model="userForm.fullLocation" />
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <span>
        <el-button @click="addFlag = false">取消</el-button>
        <el-button type="primary" @click="addAddress">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss">
.xtx-pay-checkout-page {
  margin-top: 20px;

  .wrapper {
    background: #fff;
    padding: 0 20px;

    .box-title {
      font-size: 16px;
      font-weight: normal;
      padding-left: 10px;
      line-height: 70px;
      border-bottom: 1px solid #f5f5f5;
    }

    .box-body {
      padding: 20px 0;
    }
  }
}

.address {
  border: 1px solid #f5f5f5;
  display: flex;
  align-items: center;

  .text {
    flex: 1;
    min-height: 90px;
    display: flex;
    align-items: center;

    .none {
      line-height: 90px;
      color: #999;
      text-align: center;
      width: 100%;
    }

    > ul {
      flex: 1;
      padding: 20px;

      li {
        line-height: 30px;

        span {
          color: #999;
          margin-right: 5px;

          > i {
            width: 0.5em;
            display: inline-block;
          }
        }
      }
    }

    > a {
      color: $xtxColor;
      width: 160px;
      text-align: center;
      height: 90px;
      line-height: 90px;
      border-right: 1px solid #f5f5f5;
    }
  }

  .action {
    width: 420px;
    text-align: center;

    .btn {
      width: 140px;
      height: 46px;
      line-height: 44px;
      font-size: 14px;

      &:first-child {
        margin-right: 10px;
      }
    }
  }
}

.goods {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  .info {
    display: flex;
    text-align: left;

    img {
      width: 70px;
      height: 70px;
      margin-right: 20px;
    }

    .right {
      line-height: 24px;

      p {
        &:last-child {
          color: #999;
        }
      }
    }
  }

  tr {
    th {
      background: #f5f5f5;
      font-weight: normal;
    }

    td,
    th {
      text-align: center;
      padding: 20px;
      border-bottom: 1px solid #f5f5f5;

      &:first-child {
        border-left: 1px solid #f5f5f5;
      }

      &:last-child {
        border-right: 1px solid #f5f5f5;
      }
    }
  }
}

.my-btn {
  width: 228px;
  height: 50px;
  border: 1px solid #e4e4e4;
  text-align: center;
  line-height: 48px;
  margin-right: 25px;
  color: #666666;
  display: inline-block;

  &.active,
  &:hover {
    border-color: $xtxColor;
  }
}

.total {
  dl {
    display: flex;
    justify-content: flex-end;
    line-height: 50px;

    dt {
      i {
        display: inline-block;
        width: 2em;
      }
    }

    dd {
      width: 240px;
      text-align: right;
      padding-right: 70px;

      &.price {
        font-size: 20px;
        color: $priceColor;
      }
    }
  }
}

.submit {
  text-align: right;
  padding: 60px;
  border-top: 1px solid #f5f5f5;
}

.addressWrapper {
  max-height: 400px;
  overflow-y: auto;
}

.text {
  flex: 1;
  min-height: 90px;
  display: flex;
  align-items: center;

  &.item {
    border: 1px solid #f5f5f5;
    margin-bottom: 10px;
    cursor: pointer;

    &.active,
    &:hover {
      border-color: $xtxColor;
      background: lighten($xtxColor, 50%);
    }

    > ul {
      padding: 10px;
      font-size: 14px;
      line-height: 30px;
    }
  }
}
</style>
