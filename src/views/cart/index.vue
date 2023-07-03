<script setup lang="ts">
import { useCartStore } from '@/stores/cart/index'
import { watch, computed, ref } from 'vue'
import { getToken } from '@/utils/token'
import { useRouter } from 'vue-router'

const cartList: any = ref([])
const store = useCartStore()
watch(
  () => store.cartList,
  newVal => {
    cartList.value = newVal
  },
  { immediate: true }
)

const isAllChecked = computed(() => {
  return (
    cartList.value.every((item: { selected: boolean }) => item.selected) &&
    cartList.value.length !== 0
  )
})
const handleCheckAllChange = (i: { selected: boolean }) => {
  i.selected = !i.selected
}
const selectedCheck = computed(() => {
  return cartList.value.filter((item: { selected: boolean }) => item.selected)
})

const priceSelected = computed(() => {
  return cartList.value
    .filter((item: { selected: boolean }) => item.selected)
    .reduce((sum: number, cur: { price: number; count: number }) => {
      return sum + cur.price * cur.count
    }, 0)
})
const delCart = (i: { id: string }) => {
  const index = cartList.value.findIndex(
    (item: { id: string }) => item.id === i.id
  )
  cartList.value.splice(index, 1)
}

const token = getToken()
const router = useRouter()
const Orders = () => {
  token ? router.push('/checkout') : router.push('/login')
}
</script>

<template>
  <div class="xtx-cart-page">
    <div class="container m-top-20">
      <div class="cart">
        <table>
          <thead>
            <tr>
              <th width="120">
                <el-checkbox v-model="isAllChecked" />
              </th>
              <th width="400">商品信息</th>
              <th width="220">单价</th>
              <th width="180">数量</th>
              <th width="180">小计</th>
              <th width="140">操作</th>
            </tr>
          </thead>
          <!-- 商品列表 -->
          <tbody>
            <tr v-for="i in cartList" :key="i.id">
              <td>
                <el-checkbox
                  :checked="i.selected"
                  @change="handleCheckAllChange(i)" />
              </td>
              <td>
                <div class="goods">
                  <RouterLink to="/">
                    <img :src="i.picture" >
                  </RouterLink>
                  <div>
                    <p class="name ellipsis">
                      {{ i.name }}
                    </p>
                    <p class="attr ellipsis">{{ i.attrsText }}</p>
                  </div>
                </div>
              </td>
              <td class="tc">
                <p>&yen;{{ i.price }}</p>
              </td>
              <td class="tc">
                <el-input-number v-model="i.count" />
              </td>
              <td class="tc">
                <p class="f16 red">&yen;{{ (i.price * i.count).toFixed(2) }}</p>
              </td>
              <td class="tc">
                <p>
                  <el-popconfirm
                    title="确认删除吗?"
                    confirm-button-text="确认"
                    cancel-button-text="取消"
                    @confirm="delCart(i)">
                    <template #reference>
                      <a href="javascript:;">删除</a>
                    </template>
                  </el-popconfirm>
                </p>
              </td>
            </tr>
            <tr v-if="cartList.length === 0">
              <td colspan="6">
                <div class="cart-none">
                  <el-empty description="购物车列表为空">
                    <el-button type="primary">随便逛逛</el-button>
                  </el-empty>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 操作栏 -->
      <div class="action">
        <div class="batch">
          共 {{ cartList.length }} 件商品，已选择
          {{ selectedCheck.length }} 件，商品合计：
          <span class="red">¥ {{ priceSelected }}.00</span>
        </div>
        <div class="total">
          <el-button size="large" type="primary" @click="Orders">
            下单结算
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.xtx-cart-page {
  margin-top: 20px;

  .cart {
    background: #fff;
    color: #666;

    table {
      border-spacing: 0;
      border-collapse: collapse;
      line-height: 24px;

      th,
      td {
        padding: 10px;
        border-bottom: 1px solid #f5f5f5;

        &:first-child {
          text-align: left;
          padding-left: 30px;
          color: #999;
        }
      }

      th {
        font-size: 16px;
        font-weight: normal;
        line-height: 50px;
      }
    }
  }

  .cart-none {
    text-align: center;
    padding: 120px 0;
    background: #fff;

    p {
      color: #999;
      padding: 20px 0;
    }
  }

  .tc {
    text-align: center;

    a {
      color: $xtxColor;
    }

    .xtx-numbox {
      margin: 0 auto;
      width: 120px;
    }
  }

  .red {
    color: $priceColor;
  }

  .green {
    color: $xtxColor;
  }

  .f16 {
    font-size: 16px;
  }

  .goods {
    display: flex;
    align-items: center;

    img {
      width: 100px;
      height: 100px;
    }

    > div {
      width: 280px;
      font-size: 16px;
      padding-left: 10px;

      .attr {
        font-size: 14px;
        color: #999;
      }
    }
  }

  .action {
    display: flex;
    background: #fff;
    margin-top: 20px;
    height: 80px;
    align-items: center;
    font-size: 16px;
    justify-content: space-between;
    padding: 0 30px;

    .xtx-checkbox {
      color: #999;
    }

    .batch {
      a {
        margin-left: 20px;
      }
    }

    .red {
      font-size: 18px;
      margin-right: 20px;
      font-weight: bold;
    }
  }

  .tit {
    color: #666;
    font-size: 16px;
    font-weight: normal;
    line-height: 50px;
  }
}
</style>
