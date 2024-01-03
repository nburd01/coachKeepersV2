<template>
  <footer>
    <div class="container">
      <div class="imgDiv"></div>
      <div class="containerDiv">
        <div class="topDiv">
          <div class="topDiv__imgDiv"></div>
          <div class="topDiv__menuDiv">
            <h3 class="menuTitles">Menu</h3>
            <ul>
              <li><a href="">A propos</a></li>
              <li><a href="">Méthodologie</a></li>
              <li><a href="">Offres</a></li>
            </ul>
            <div class="topDiv__flagsDiv">
              <img
                src="assets/images/france-flag-round-circle-icon.svg"
                alt=""
                srcset=""
              />
              <img
                src="assets/images/uk-flag-round-circle-icon.svg"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
        <div class="infoDiv">
          <div class="infoDiv__adress">
            Martin House, Downs Road, London, E5 8QJ
          </div>

          <font-awesome-icon :icon="['fas', 'facebook']" />
          <div class="infoDiv__socials">
            <font-awesome-icon
              class="rotate45__large"
              :icon="['fas', 'arrow-right']"
            />
          </div>
          <div class="infoDiv__contactDetails">
            <div class="infoDiv__contactDetails__tel">02072548499</div>
            <div class="infoDiv__contactDetails__email">INFO@STIMLER.COM</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
