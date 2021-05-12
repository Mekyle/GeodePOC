<template>
  <div>
    <section class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">
            <router-link :to="{ name: 'nft' }">
              <b-icon
                pack="fab"
                icon="wpexplorer"
                size="is-medium">
              </b-icon>
              KodaDot NFT  {{ $t('Explorer') }}<br>
            </router-link>
          </h1><br>
          <div class="tile is-ancestor">
            <div class="tile is-parent is-vertical">
              <div class="tile is-child">
                <h2 class="title is-3">
                  <b-icon
                    pack="fas"
                    icon="camera-retro">
                  </b-icon>
                    <router-link :to="{ name: 'nftRare', }">
                      Rare solo feed
                    </router-link>
                </h2>
                <h2 class="title is-3">
                  <b-icon
                    pack="fas"
                    icon="ghost"
                  ></b-icon>
                    Creators Spotlight
                </h2>
                <h2 class="subtitle is-4">
                  <li
                    v-for="c in creators"
                    :key="c">
                      <router-link :to="{ name: 'profile', params: { id: c } }">
                        <Identity :address="c" :inline="true" />
                      </router-link>
                    </li>
                </h2>
              </div>
              <div class="tile is-child">
                <h2 class="title is-3">
                  <b-icon
                    pack="fab"
                    icon="telegram-plane"
                  ></b-icon>
                    Community
                </h2>
                <h2 class="subtitle is-4">
                  <li
                    v-for="community in publicCommunity"
                    :key="community[0]">
                      <a :href="community[1]">{{ community[0] }}</a>
                  </li>
                </h2><br>
                <h2 class="title is-4">
                  <a href="https://nft.kodadot.xyz/rmrk/collection/10D77F8B699437BB50-KODA" target="_blank">
                    <b-icon
                      pack="far"
                      icon="comment-dots">
                    </b-icon>
                    {{ $t('Tutorial: How to mint NFT') }}
                  </a>
                </h2>
                <h2 class="title is-4">
                  <a href="https://stakenode.medium.com/dont-panic-and-mint-your-nft-s-on-kodadot-kusama-polkadot-first-nft-explorer-4273f789e585" target="_blank">
                    <b-icon
                      pack="far"
                      icon="comment-dots">
                    </b-icon>
                    {{ $t('Tutorial: Mint your NFTs on KodaDot') }}
                  </a>
                </h2>
                <h2 class="title is-4">
                  <router-link :to="{ name: 'rmrkFaq' }">
                    <b-icon
                      icon="question">
                    </b-icon>
                    {{ $t('New here? We have F.A.Q.') }}
                  </router-link>
                </h2>
              </div>
            </div>
              <div class="tile is-parent is-vertical">
                <div class="tile is-child">
                  <h2 class="title">
                    <b-icon icon="flask"></b-icon>
                    We are wandering new avenues of NFT experience.<br>
                  </h2>
                  <h2 class="title">
                    <b-icon icon="leaf"></b-icon>
                    Low carbon NFT platform running on
                    <a href="https://kusama.network">Kusama.network</a> - NPoS
                  </h2>
                  <h2 class="title">
                    <b-icon icon="leaf"></b-icon>
                    <router-link :to="{ name: 'sustainability'}">
                      Sustainability program
                    </router-link>
                  </h2>
                </div>
                <div class="tile is-child">
                  <h2 class="title is-3">
                  <router-link :to="{ name: 'nft' }">
                    <b-icon
                      icon="eye">
                    </b-icon>
                    {{ $t('Gallery of NFT Tokens and Collectibles') }}
                  </router-link>
                </h2>
                <h2 class="title is-4">
                  <router-link :to="{ name: 'rmrk' }">
                    <b-icon
                      icon="print">
                    </b-icon>
                    {{ $t('Create your NFT Token & Collectibles') }}
                  </router-link>
                </h2><br>
              </div>
              <div class="tile is-child">
                <h2 class="title">
                  <a href="https://t.me/kodadot" target="_blank">
                    <b-icon
                      pack="fab"
                      icon="telegram">
                    </b-icon>
                    KodaDot
                  </a>
                </h2>
                <h2 class="title">
                  <a href="https://www.reddit.com/r/KodaDot/" target="_blank">
                    <b-icon
                      pack="fab"
                      icon="reddit-alien">
                    </b-icon>
                    r/KodaDot
                  </a>
                </h2>
                <h2 class="title">
                  <a href="https://twitter.com/KodaDot" target="_blank">
                    <b-icon
                      pack="fab"
                      icon="twitter">
                    </b-icon>
                    @KodaDot
                  </a>
                </h2>

                <h2 class="title">
                  <a href="https://calendar.google.com/calendar/u/0/embed?src=c_eu96e3mq6ov7oj0eaadgbbvjvk@group.calendar.google.com" target="_blank">
                    <b-icon
                      icon="calendar">
                    </b-icon>
                    {{ $t('Community Events') }}
                  </a>
                </h2>
                <h2 class="title">
                  <a href="https://twitter.com/metaprime_net" target="_blank">
                    <b-icon
                      pack="fab"
                      icon="twitter">
                    </b-icon>
                    {{ $t('Building on @Metaprime_net') }}
                  </a>
                </h2>
                <h2 class="title">
                  <a href="https://medium.com/kodadot/kodadot-nft-explorer-f2c3a326a856" target="_blank">
                    <b-icon
                      pack="fab"
                      icon="medium">
                    </b-icon>
                    {{ $t('Read our story, how we started.') }}
                  </a>
                </h2>
                <h2 class="title">
                  <a href="https://medium.com/kodadot/traverse-to-the-prime-show-733d6046d3f5" target="_blank">
                    <b-icon
                      pack="fab"
                      icon="medium">
                    </b-icon>
                    {{ $t('Traverse to the prime show') }}
                  </a>
                </h2>
                </div>
              </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
const components = {
  Identity: () => import('@/components/shared/format/Identity.vue'),
};
</script>

<style scoped>
.subtitle {
  text-decoration: underline;
}

.truncate {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

li {
  list-style-type: square;
}
</style>
