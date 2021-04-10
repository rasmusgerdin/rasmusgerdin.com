<template>
  <h1 class="portfolio-header">Portfolio</h1>
  <div class="portfolio-container">
    <div class="portfolio-item">
      <div class="portfolio-details">
        <div>
          <h2 class="portfolio-title">RTBYTE</h2>
          <p>RTByte is an open-source modular multipurpose Discord bot built on the incredible <a href="">Sapphire framework</a> for <a href="">discord.js</a>.</p>
          <p>It brings a ton of features to help you run and manage your server. With an easy setup, you'll be up and running within minutes.</p>
        </div>
        <div class="portfolio-links">
          <a id="portfolio-link" href="https://rtbyte.xyz/" target="_blank">
            <fa :icon="['fas', 'external-link']" transform="shrink-7" :mask="['fas', 'square']" />
          </a>
          <a id="portfolio-link" href="https://github.com/RTByte/" target="_blank">
            <fa :icon="['fab', 'github']" transform="shrink-6" :mask="['fas', 'square']" />
          </a>
          <a id="portfolio-link" href="https://rtbyte.xyz/discord/" target="_blank">
            <fa :icon="['fab', 'discord']" transform="shrink-7" :mask="['fas', 'square']" />
          </a>
          <a id="portfolio-link" href="mailto:developers@rtbyte.xyz" target="_blank">
            <fa :icon="['fas', 'envelope']" transform="shrink-6" :mask="['fas', 'square']" />
          </a>
        </div>
      </div>
      <div id="portfolio-rtbyte" class="portfolio-img"></div>
    </div>
    <div class="portfolio-item">
      <div class="portfolio-details">
        <div>
          <h2 class="portfolio-title">BARREN</h2>
          <p>Barren was a one-day project made in 2017. With this project, I wanted to create a film with something that resembled a story, but left the meaning of it up to interpretation.</p>
        </div>
        <div class="portfolio-links">
          <a id="portfolio-link" href="https://youtu.be/_vtzGsCulyI/" target="_blank">
            <fa :icon="['fab', 'youtube']" transform="shrink-7" :mask="['fas', 'square']" />
          </a>
        </div>
      </div>
      <div id="portfolio-barren" class="portfolio-img"></div>
    </div>
    <div class="portfolio-item">
      <div class="portfolio-details">
        <div>
          <h2 class="portfolio-title">SIREN</h2>
          <p>Made during the November-December period of 2016, the short film Siren was made as a project for a film class I was taking at the time.</p>
          <p>I was the co-director and location sound manager on this project.</p>
        </div>
        <div class="portfolio-links">
          <a id="portfolio-link" href="https://youtu.be/nc4vt2PRN_4/" target="_blank">
            <fa :icon="['fab', 'youtube']" transform="shrink-7" :mask="['fas', 'square']" />
          </a>
        </div>
      </div>
      <div id="portfolio-siren" class="portfolio-img"></div>
    </div>
    <div class="portfolio-item">
      <div class="portfolio-details">
        <div>
          <h2 class="portfolio-title">CONSCIOUSNESS</h2>
          <p>A video essay on the concept of consciousness using the TV show Westworld as a medium. Made in December of 2016 for a school project.</p>
        </div>
        <div class="portfolio-links">
          <a id="portfolio-link" href="https://youtu.be/STMCAWsdLe8/" target="_blank">
            <fa :icon="['fab', 'youtube']" transform="shrink-7" :mask="['fas', 'square']" />
          </a>
        </div>
      </div>
      <div id="portfolio-consciousness" class="portfolio-img"></div>
    </div>
    <div class="portfolio-item">
      <div class="portfolio-details">
        <div>
          <h2 class="portfolio-title">THE CODE</h2>
          <p>A mod for the game Fallout 4. See testemonial below.</p>
          <p class="portfolio-testemonial">
            Rasmus has been super easy to work with! He was very prompt with the delivery of his files, the quality of which had been clean enough to where all I had to do was adjust volume levels to match the projects overall (which admittedly I did not provide him). He was happy to re-record one line when asked, as well. We would happily work with Rasmus again in the future!
          </p>
          <p>- The Code Project</p>
        </div>
        <div class="portfolio-links">
          <a id="portfolio-link" href="https://www.nexusmods.com/fallout4/mods/23274/" target="_blank">
            <fa :icon="['fas', 'external-link']" transform="shrink-7" :mask="['fas', 'square']" />
          </a>
        </div>
      </div>
      <div id="portfolio-the-code" class="portfolio-img"></div>
    </div>
    <div class="portfolio-item">
      <div class="portfolio-details">
        <div>
          <h2 class="portfolio-title">HILDA HUGHES - AN INSTITUTE STORY</h2>
          <p>A mod for the game Fallout 4. See testemonial below.</p>
          <p class="portfolio-testemonial">
            Rasmus was very easy to work with. He took direction well and delivered his lines promptly, all of which were great quality. I didn't need any rerecorded but he was willing to do so if needed. Would definitely use him again.
          </p>
          <p>- Seddon4494, mod author</p>
        </div>
        <div class="portfolio-links">
          <a id="portfolio-link" href="https://www.nexusmods.com/fallout4/mods/22128/" target="_blank">
            <fa :icon="['fas', 'external-link']" transform="shrink-7" :mask="['fas', 'square']" />
          </a>
        </div>
      </div>
      <div id="portfolio-hilda-hughes" class="portfolio-img"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Portfolio'
})
</script>

<style scoped lang='scss'>
@import '@/styles/normalize.scss';
@import '@/styles/variables.scss';

.portfolio-container {
  width: 100%;
  display: flex;
  flex-flow: column;
}

.portfolio-item {
  margin-bottom: 4rem;
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 2rem;
  }
}

.portfolio-img {
  align-self: center;
  background-position: center;
  background-size: cover;

  border-radius: 12px;
  box-shadow: 0 3px 6px #00000029, 0 3px 6px #0000003b;
  min-height: 275px;
  min-width: 275px;
  max-height: 275px;
  max-width: 275px;
}

#portfolio-rtbyte { background-image: url(../assets/portfolio_rtbyte.png); }
#portfolio-barren { background-image: url(../assets/portfolio_barren.png); background-position: top; }
#portfolio-siren { background-image: url(../assets/portfolio_siren.png); }
#portfolio-consciousness { background-image: url(../assets/portfolio_consciousness.png); }
#portfolio-the-code { background-image: url(../assets/portfolio_the-code.png); }
#portfolio-hilda-hughes { background-image: url(../assets/portfolio_hilda-hughes.png); }

.portfolio-details {
  margin-right: 2rem;
  display: flex;
  flex-flow: column;
  justify-content: space-between
}

.portfolio-title {
  margin-top: 0;
}

.portfolio-testemonial {
  padding-left: 1rem;
  border-left: 2px solid $primary;
  font-style: italic;
}

.portfolio-links {
  display: flex;
}

#portfolio-link {
  color: $light;
  font-size: 2.25rem;
  margin: 0 12px;

  &:first-child {
    margin: 0;
    margin-right: 12px;
  }

  &:hover,
  &:focus-within,
  &:active {
    color: $primary;

    svg {
      transform: translateY(-3px);
    }
  }
}

@import '@/styles/media-queries.scss';
</style>
