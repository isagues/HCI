Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
   <div class="product">
        
      <div class="product-image">
        <img :src="image" />
      </div>

      <div class="product-info">
          <h1>{{ product }}</h1>
          <p v-if="inStock">In Stock</p>
          <p v-else>Out of Stock</p>
          <p>Shipping: {{ shipping }}</p>

          <product-details :details="details"></product-details>

          <div class="color-box"
               v-for="(variant, index) in variants" 
               :key="variant.variantId"
               :style="{ backgroundColor: variant.variantColor }"
               @mouseover="updateProduct(index)"
               >
          </div> 

          <button v-on:click="addToCart" 
            :disabled="!inStock"
            :class="{ disabledButton: !inStock }"
            >
          Add to cart
          </button>

          <div class="cart">
            <p>Cart({{ cart }})</p>
          </div>

       </div>  
    
    </div>
   `,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['80% cotton', '20% polyester', 'Gender-neutral'],
            variants: [
                {
                    variantId: 2234,
                    variantColor: 'green',
                    variantImage:  'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: 'blue',
                    variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
                    variantQuantity: 0
                }
            ],
            cart: 0
        }
    },
    methods: {
        addToCart: function() {
            this.cart += 1
        },
        updateProduct: function(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
            return 2.99
        }
    }
})

Vue.component('tarjeta',{
    props: {
        dispositivo:{
            type: Object,
            required: true
        }
    },
    template: `
        <v-card >
            <v-conteiner >
                <v-row dense>
                    <v-col cols="12" class="px-5">
                        
                    </v-col>
                    <v-col cols="12" class="px-5">
                        <v-container fluid class="py-0 px-0"> <!--class="px-3 py-0" -->
                            <v-row align="center" dense justify="space-around"><!--class="my-0 py-0" -->
                                <v-col>
                                    <v-switch dense></v-switch><!--class="px-3 my-auto" -->
                                </v-col>
                                <v-col>
                                    <v-btn icon >
                                        <v-icon>mdi-skip-previous</v-icon>
                                    </v-btn>
                                </v-col>
                                <v-col>
                                    <v-btn icon >
                                        <v-icon>mdi-play</v-icon>
                                    </v-btn>
                                </v-col>
                                <v-col>
                                    <v-btn icon >
                                        <v-icon>mdi-skip-next</v-icon>
                                    </v-btn>
                                </v-col>
                                <v-col ><!--class="pr-10" -->
                                    <v-btn text >Menos</v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-col>
                    <v-col cols="12" class="px-5">
                        <v-slider dense v-model="media"  prepend-icon="mdi-volume-medium"></v-slider>
                    </v-col>
                    <v-col cols="12" class="px-5">
                        <v-container fluid class="py-0">
                            <v-row align="center" justify="left">
                                <v-col class="py-0 px-0">
                                    <v-list-item class="px-0">
                                        <v-list-item-content>
                                            <v-list-item-title class="title">Genero:</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-col>
                                <v-col md="8" class="py-0"> <!--class="pr-10" -->
                                    <v-select :items="items" dense value="Pop"></v-select>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-col>
                    <v-col cols="12" class="px-5">
                        <v-container fluid class="py-0">
                            <v-row>
                                <v-col class="py-0 px-0">
                                    <v-list > <!--class="px-7" -->
                                        <v-list-item-title class="title">Lista de reporduccion:</v-list-item-title>
                                        <v-list-item-group v-model="item" color="primary">
                                            <v-list-item v-for="i in (0,3)" :key="i">
                                                <v-list-item-icon>
                                                    <v-icon>mdi-minus</v-icon>
                                                </v-list-item-icon>
                                                <v-list-item-content>
                                                    <v-list-item-title>Nombre de cancion</v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-list-item-group>
                                    </v-list>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-col>
                </v-row>
            </v-conteiner>
        </v-card>
        
    `
})

Vue.component('disp-info',{
    props:{
        icon : {
            required: true
        },
        name: {
            type: String,
            required: true
        },
        room:{
            type: String,
            required: true
        },
        state:{
            type: String,
            required: true
        },
        fav:{
          type: Boolean,
          required: true,
        }
    },
    template:`
    <v-container fluid class="py-0 px-0">
        <v-row align="center">
            <v-col cols="9" class="py-0 px-0" align="start">
                <v-list-item class="pr-0">
                    <v-list-item-avatar>
                        <v-img :src="icon"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-subtitle>{{room}}</v-list-item-subtitle>
                        <v-list-item-title class="title d-inline-block text-truncate">{{name}}</v-list-item-title>
                        <v-list-item-subtitle class="text--primary">{{state}}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-col>

            <v-col align="end" class="pl-0">
                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
    `
})