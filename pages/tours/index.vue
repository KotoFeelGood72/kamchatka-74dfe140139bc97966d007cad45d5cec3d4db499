<template>
    <div class="tours">
				<src-video videoName="tours" classVideo="video"/>
        <PageHeader v-if="data && data.intro && data.intro.bannerImage" :data="data.intro.bannerImage"
                    :descriptionTitle="data.intro.bannerSubText"><span v-html="data.intro.bannerText"/>
        </PageHeader>
        <ToursComponent :data="data.tours"/>
        <div class="tours-entry activity-slug">
            <div class="container--middle-tour activity-slug__content text--small">
                    <Heading
                        tag="h2"
                        color="lightBlue"
                        size
                    >Наши программы</Heading>
                <div
                    class="text--small upper-video__content text-controller"
										v-html="toursText.pageContent"
                />
            </div>
        </div>
    </div>
</template>

<script>
import {Api} from "../../api/api";
import srcVideo from "~/components/srcVideo/srcVideo";
import PageHeader from '../../components/content/pageHeaderWithDesc';
import ToursComponent from "../../components/tours/card";
import Heading from "../../components/content/heading.vue";
import seoHead from "../../mixins/seo-head";

export default {
    name: 'Tours',
		mixins: [seoHead],
    components: {
			Heading,
			ToursComponent,
			PageHeader,
			srcVideo
		},
    props: ['columns'],
    data() {
        return {
            data: [],
            seo: '',
            toursText: {
                pageContent: `
                    <h2>Индивидуальные программы туров на Камчатку</h2>
                    <p>Для тех, кто ищет интеллектуальный отдых, для тех, кто ценит сервис и комфорт, для тех, кто ждет неповторимых ощущений и незабываемых впечатлений мы организуем туры на Камчатку и Курильские острова премиум-класса.</p>
                    <p>Вы не поверите своим глазам! Ваше сердце будет биться чаще, чем обычно! Вы увидите самые необычные чудеса, созданные природой, но для этого вам не придется преодолевать огромные расстояния с рюкзаком и иметь соответствующую физическую подготовку. Мы все сделаем за вас. Организуем уникальный тур именно под ваши пожелания, доставим на место, предложим комфортабельное проживание и питание!</p>
                    <h3>Для нас нет почти ничего невозможного!</h3>
                    <p>Мы доставим вас туда, куда другие не могут! Вы почувствуете себя частью самых  неизведанных и диких уголков Камчатки и Курильских островов!</p>
                    <p>А самое главное, мы обеспечим вам полную безопасность, в том числе, если вы путешествуете с детьми и высочайший уровень сервиса, потому что мы - эксперты по Камчатке и Курильским островам!</p>
                    <p>Мы организуем туры на действующие и спящие вулканы, вы увидите настоящих медведей и других животных, живущих в дикой природе, наши вертолеты доставят вас в самые недоступные точки Камчатки, вы сможете искупаться в горячих минеральных источниках, понаблюдать за касатками с опытными дайверами, погрузиться в народную культуру и фольклор Камчатки, а также совершить туры по рекам, озерам и океану с профессиональными гидами.</p>
                    <ul>
                        <li>Мы организуем только эксклюзивные туры на Камчатку на самом высоком уровне.</li>
                        <li>Мы максимально компетентны в том, что мы делаем!</li>
                        <li>Мы оснащены самым профессиональным оборудованием и транспортом, чтобы безопасно отвезти вас на самый край земли.</li>
                    </ul>
                    <h4>Вы никогда еще такого не ощущали!</h4>
                    <p>Мы наполним вашу жизнь и воспоминания новыми цветами и эмоциями. И мы переломим стереотип о низком уровне организации и сервиса туризма в России.</p>
                    <p>Респонденты наших уникальных туров подтвердят наши слова! Если ехать на Камчатку, то только с Enjoy Kamchatka.</p>
                    <ul>
                        <li>Мы любим Камчатку и готовы передать свою любовь и знания вам!</li>
                        <li>Мы индивидуально подходим к каждому клиенту, поэтому всегда работаем через диалог!</li>
                        <li>В туре мы учтем все ваши пожелания по отелям, питанию, локациям, уровню сложности маршрутов!</li>
                    </ul>
                    <h5>Мы поможем вам преодолеть себя, постигая красоты Камчатки!</h5>
                    <p>Бескрайняя мощь гор и вулканов позволит почувствовать себя песчинкой в огромном мире. Мы поднимемся вместе с вами над облаками и вы увидите умопомрачительные красоты камчатской природы. Мы побываем с вами на Курильских островах, в заповедниках и исторических местах, понаблюдаем за редкими птицами, китами и тюленями. Даже зимой вы сможете искупаться в горячих термальных источниках, выехать на фото-тур с дикими животными и понаблюдать за настоящим действующим вулканом.</p>
                    <h6>Вы будете</h6>
                    <p>Летать, плавать, восходить, где-то даже ползти, но все это оставит в вас самые незабываемые эмоции в вашей жизни! И мы постоянно будем рядом.</p>
                    <p>И никто другой не сможет организовать для вас тур на Камчатку на таком профессиональном уровне, как  Enjoy Kamchatka. </p>
                     <p>Пляжный и экскурсионный отдых подождет, потому что вас ждут незабываемые туры на Камчатку и Курильские острова. Не многие знают, но в советские времена туризм на Камчатку был запрещен как иностранным, так и русским гражданам. И только сейчас мы подняли уровень туров до достойного премиального уровня! И мы гордимся тем, что мы можем вам предложить!</p>
                    <p>Никакие слова не передадут те впечатления, которые вы получите от тура на Камчатку с Enjoy Kamchatka. </p>
                `,
            }
        };
    },
    asyncData({route, params, store}) {
        return Api.get(`tours?router=${route.path}`).then((response) => {
            try {
                return {
                seo: response.data.seo,
                data: response.data.data
            }
            } catch (error) {
                console.log(error);
            };

        });
    },
    created() {
        let breadCrumbs = [
            {name: this.data.intro.bannerText}
        ];
        this.$store.dispatch('changeBreadcrumbs', breadCrumbs);
    }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/mixins";
@import "~@/assets/scss/config";

.text-controller {
	/deep/h2, /deep/h3, /deep/h4, /deep/h5, /deep/h6 {
		font-size: 24px;
		padding: 15px 0;
	}
	/deep/p, /deep/span {
		display: block;
		padding: 10px 0;
	}
	/deep/ul {
		padding: 15px 0 15px 20px;
	}
}

.tours-entry {
    background: #0e121a;
		padding: 40px 0 60px 0;
    h2 {
        padding: 20px 0 40px 0;
        @include respond-to(sm) {
            margin: 0 0 20px 0;
            padding-top: 30px;
        }
    }
    .text-controller {
        font-family: "Montserrat";
        font-weight: 400;
        color: #fff;
        font-size: 14px;
    }
}
.tours {
    /deep/ .row.tours {
        margin-top: -2px;
    }

    /deep/ .home-section {
        height: 100vh;

        .tours__item {
            padding-left: 0;
            padding-right: 0;
            position: relative;
            overflow: hidden;
            max-height: 540px;
            @include respond-to(md) {
                height: 390px;
                //margin-bottom: 30px;
                text-align: center;
                display: block;
            }

            .img__container {
                height: 100%;
                @include respond-to(sm) {
                    //height: auto;
                }

                /deep/ img {
                    object-fit: contain;
                    @include respond-to(md) {
                        height: 200px;
                    }
                }
            }

            &:nth-child(odd) {
                background-color: color(grayBlue);
            }

            &:nth-child(even) {
                background-color: color(granite);
            }

            .img__container {
                @include respond-to(sm) {
                    //&:not(.hover) {
                    //    display: none;
                    //}
                }
            }

            &:hover, &.hover {
                .tours__item-title {
                    @include respond-to(md) {
                        opacity: 1;
                    }
                }

                /deep/ .img__container {
                    display: none;

                    &.hover {
                        display: inline-flex;
                    }
                }

                .tours__item-img {
                    display: none!important;
                }
            }
        }
    }
        /deep/.page-header__title {
            max-width: 70%;
            @include respond-to(lg) {
                max-width: 100%;
            }
            @include respond-to(md) {
                // margin-top: -80px;
            }
            @include respond-to(sm) {
                margin-top: 0;
            }
        }
        /deep/.tours__item {
            @include respond-to(lg) {
                //max-height: 360px;
            }
            @include respond-to(md) {
                //max-height: 216px;
                width: 33.333333%;
            }
            @include respond-to(sm) {
                width: 100%;
                //max-height: 300px;
            }
        }
    }

.tours-menu {
    width: 100%;
    height: 100vh;
    background: url("~assets/img/tours/bg.png") no-repeat;
    background-size: cover;
    padding: 100px 0;
    @include respond-to(custom425) {
        padding-top: 0 !important;
        padding-bottom: 190px;
    }
}

.tours-menu__container {
    display: flex;
    justify-content: space-between;
    @include respond-to(custom425) {
        flex-direction: column;
    }
}

.tours__header {
    padding-top: 0;
}

.tours-menu__left {
    width: 100%;

    .headline {
        color: color(white);
        margin-bottom: 25px;
    }

    @include respond-to(lg) {
        padding-left: 90px;
    }
    @include respond-to(sm) {
        padding-left: 50px;
    }
    @include respond-to(custom425) {
        width: 100%;
        padding-top: 50px !important;
        padding-left: 25px
    }
}

.tours-menu__right-text {
    font-weight: 800;
}

.video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: relative;
    top: 0;
    left: 0;
    display: block;
}

.page-header {
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    @include respond-to(md) {
        // top: -50px;
    }
    @include respond-to(sm) {
        top: 0;
        min-height: 100vh;
    }

    /deep/ .img__container img, /deep/ .img__container {
        display: none !important;
        @include respond-to(md) {
            height: 300px;
        }
    }

    @include respond-to-min(sm) {
        /deep/ .container {
            margin: 0 auto;
            padding: 0;
        }
    }
}
</style>
