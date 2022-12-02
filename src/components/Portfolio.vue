<template>
    <section class="portfolio" id="portfolio">
        <div class="container portfolio__container">
            <div class="section-title section-title--dublicated">
                <h2>Портфолио</h2>
            </div>
            <div style="position: relative;">
                <filter-component :tags="this.tags" :checked="this.checked" @tags="updateCheckedList"></filter-component>
            
                <PortfolioList :items="this.items" :initial="this.initialArray" @open-gallery="openGallery"></PortfolioList>
                <div class="portfolio__footer">
                    <LoadMoreButton @load="loadMoreItems" :disabled="this.isLoadMoreButtonDisabled"></LoadMoreButton>
                    <CollapseButton :state="this.isCollapseButtonDisabled" @collapse="collapsePortfolioList"></CollapseButton>
                </div>
            </div>
        </div>
        <Gallery v-if="isGalleryOpened" :items="initialArray" :start-index="galleryStartIndex" @close-gallery="closeGallery"/>
    </section>
</template>
  
<script>
    import json from "@/assets/portfolio.json";
    import Filter from "../components/Filter.vue";
    import PortfolioList from "../components/PortfolioList.vue";
    import LoadMoreButton from "../components/LoadMoreButton.vue";
    import CollapseButton from "../components/CollapseButton.vue";
    
    import Gallery from './Gallery.vue'
  
    export default {
        name: 'Portfolio',
        components: {
            'filter-component': Filter,
            PortfolioList,
            LoadMoreButton,
            CollapseButton,
            Gallery
        },
    
        data() {
            return {
                initialArray: [],
        
                items: [],
                tags: [],
                checked: [],
        
                STEP: 6,
                count: 0,
                isLoadMoreButtonDisabled: false,
                isCollapseButtonDisabled: false,
                isGalleryOpened: false,
                galleryStartIndex: 0,
            }
        },
    
        methods: {
            openGallery(index) {
                this.isGalleryOpened = true;
                this.galleryStartIndex = index;
                this.$emit('body-locker');
            },

            closeGallery() {
                this.isGalleryOpened = false;
                this.$emit('body-locker');
            },

            init() {
                let tags = [];
        
                this.initialArray.forEach(item => {
                    tags = [...tags, ...item.tags];
                });
        
                this.tags = [...new Set(tags)];
                this.checked = this.tags;
                this.count += this.STEP;
        
                this.fillPortfolioItems();
            },
    
            fillPortfolioItems() {
                this.items = [];
                let currentCount = 0;
        
                this.initialArray.forEach(item => {
                    let isExist = item.tags.filter(it => this.checked.indexOf(it) !== -1);
        
                    if(currentCount < this.count && isExist.length) {
                        this.items.push(item)
                        currentCount++;
                    }
                })
        
                this.setLoadMoreButtonStatus();
                this.setCollapseButtonStatus();
            },
    
            setLoadMoreButtonStatus() {
                this.items.length < this.count || this.initialArray.length === this.items.length ?
                this.isLoadMoreButtonDisabled = true :
                this.isLoadMoreButtonDisabled = false
            },
    
            setCollapseButtonStatus() {
                this.count > this.STEP ?
                this.isCollapseButtonDisabled = true :
                this.isCollapseButtonDisabled = false;
            },
    
            collapsePortfolioList() {
                this.count = this.STEP;
                this.fillPortfolioItems();
            },
    
            loadMoreItems() {
                if(this.initialArray.length > (this.count + this.STEP) ) {
                    this.count += this.STEP;
                } else {
                    this.count = this.initialArray.length;
                }
                
                this.fillPortfolioItems();
            },
    
            updateCheckedList(list) {
                this.count = this.STEP;
                this.checked = list;
                this.fillPortfolioItems();
            },
    
            removeTag(except) {
                this.count = this.STEP;
                this.checked = this.checked.filter(item => item !== except);
                this.fillPortfolioItems();
            },
        },
    
        mounted() {
            this.initialArray = [...json.data];
            this.init();
        },

        watch: {
            /*items: function() {
                setTimeout(() => {
                    this.ScrollTrigger.refresh();
                }, 100);
            }*/
        }
    }
</script>

<style lang="scss">
    .portfolio {
        @extend .section-offset;

        &__container {
            position: relative;
            @extend .flex-column;
        }

        &.hidden {
            display: none;
        }

        &__footer {
            @extend .flex-wrap;
            align-items: center;
            justify-content: center;

            @include m-b-down(635px) {
                justify-content: space-between;
            }

            @include m-b-down(435px) {
                justify-content: center;
            }
        }
    }

</style>