</<template>
    <div class="row">
        <div class="col-sm-12 col-md-6">
            <table class="table table-hover">
                <thead class="thead-default">
                    <tr>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Add to Basket</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems">
                    <tr>
                        <td><strong>{{item.name}}</strong></td>
                    </tr>
                    <tr v-for="option in item.options">
                        <td>{{option.size}}</td>
                        <td>{{option.price}}</td>
                        <td><button class="btn btn-sm btn-outline-success" 
                            type="button" @click="addToBasket(item,option)">+</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-sm-12 col-md-6">
            <div v-if="basket.length>0">
            <table class="table table-hover">
                <thead class="thead-default">
                    <tr>
                        <th>Quantity</th>
                        <th>Item</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody v-for="item in basket">
                    <tr>
                        <td><button class="btn btn-sm" type="button" @click="decreaseQty(item)">-</button>
                        <span>{{item.quantity}}</span>
                        <button class="btn btn-sm" type="button" @click="increaseQty(item)">+</button></td>
                        <td>{{item.name}} {{item.size}}</td>
                        <td>{{item.price * item.quantity}}</td>
                    </tr>
                </tbody>
            </table>
            <p>Order Total:</p>
            <button class="btn btn-success btn-block">Place Order</button>
            </div>
            <div v-else>
                <p>Your basket is empty!</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        basket:[]

      }
    },
    computed:{
      getMenuItems(){
        //return this.$store.state.menuItems
        return this.$store.getters.getMenuItems
      }
    },
    methods: {
        addToBasket: function(item,option){
            this.basket.push({
                name: item.name,
                price: option.price,
                size: option.size,
                quantity: 1
            });
        },
        removeFromBasket: function(item){
            this.basket.splice(this.basket.indexOf(item),1);
        },
        increaseQty: function(item){
            item.quantity++;
        },
        decreaseQty: function(item){
            item.quantity--;
            if(item.quantity===0){
                this.removeFromBasket(item);
            }
        }
    }
} 
</script>
