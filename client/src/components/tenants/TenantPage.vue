
<template>
    <div id='wrapper-tenant-page'>
        <TheHeader />
        <main class="main-section">
            <!-- <v-date-picker v-model="picker"></v-date-picker> -->
            <input type="month" name="date" id="" v-model="pickedDate">
            <h1>{{pickedDate}}</h1>
            <div id="list-of-bills">
                <TenantBill class='component-tenant-bill'>
                    <template v-slot:name>
                        Rent
                    </template>

                    <template v-slot:price>
                        {{bills.priceRent}}
                    </template>
                </TenantBill>

                <TenantBill class='component-tenant-bill'>
                    <template v-slot:name>
                        Gas
                    </template>

                    <template v-slot:price>
                        {{bills.priceGas}}
                    </template>
                </TenantBill>

                <TenantBill class='component-tenant-bill'>
                    <template v-slot:name>
                        Electricity
                    </template>

                    <template v-slot:price>
                        {{bills.priceElectricity}}
                    </template>
                </TenantBill>

                <TenantBill class='component-tenant-bill'>
                    <template v-slot:name>
                        Water
                    </template>

                    <template v-slot:price>
                        {{bills.priceWater}}
                    </template>
                </TenantBill>
            </div>
        </main>
    </div>
</template>


<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import TheHeader from '@/components/the/TheHeader.vue';
    import TenantBill from '@/components/tenants/TenantBill.vue';
    import Vuetify from 'vuetify'


    @Component({
        components: {
            TheHeader,
            TenantBill
        }
    })
    export default class TenantPage extends Vue {
       bills = {
           priceRent: 100.00,
           priceGas: 20.50,
           priceElectricity: 45.00,
           priceWater: 12.12
       };
       pickedDate = ""; 
    }

</script>

<style lang='scss' scoped>
    @import '@/style/_classess.scss';

    main {
        height: 90vh;
        width: 100%;
    }

    .component-tenant-bill {
        margin: 0 1rem;
    }

    #list-of-bills {
        margin-top: 15vh;
        display: flex;
    }
</style>