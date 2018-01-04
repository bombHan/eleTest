<template>
    <div id="Home">
        <Head></Head>
            <div id="Body">
                <router-view></router-view>
            </div>
        <Foot></Foot>
    </div>
</template>
<script>
import Head from "./components/Head.vue"
import Foot from "./components/Foot.vue"
export default{
	data(){
		return{

		}
	},
	methods:{

	},
	components:{
		Head,Foot
	}
}
</script>
<style lang='less'>
#Home{
    height: 400px;
    #Body{
        position: fixed;
        top: 61px;
        bottom: 60px;
        width: 100%;
        overflow: auto;
    }
}
</style>