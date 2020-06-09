<template>
    <div class="swiper-container" ref="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in carouselList" :key="item.id">
                <img :src="item.imgUrl" />
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        name: 'Carousel',
        //声明接收属性数据
        props:{
            carouselList:Array, //轮播的数组数据
            autoplay: Boolean
        },
        watch: {
            carouselList:{
                handler(value){
                    if (this.carouselList.length === 0) return
                    //利用nextTick()延迟到界面更新之后才去创建swiper对象
                    this.$nextTick(() => {
                        this.initSwiper()
                    })
                },
                // immediate: true, //初始显示就会调用第一次
            }
        },
        //在初始页面显示执行后
        mounted () {
            //如果初始显示已经有数据了，就创建一个对应的swiper对象
            if (this.carouselList.length > 0) { //已经显示了
                this.initSwiper() //立即创建swiper，不需要用什么nextTick()/定时器
            }  
        },
        methods: {
            initSwiper() {
                //创建swiper实例对象，必须在列表数据显示之后创建才有正常轮播效果
                // new Swiper ('.swiper-container', {
                new Swiper(this.$refs.swiper, {
                    // direction: 'horizontal', // 水平切换选项
                    loop: true, // 循环模式选项

                    autoplay: this.autoplay, //是否自动轮播

                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                    },

                    // 如果需要前进后退按钮
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                })
            }
        }
    }
</script>

<style lang="less" scoped>

</style>