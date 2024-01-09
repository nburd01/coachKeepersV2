<template>
  <div>
    <section>
      <HeaderFirst />
    </section>
    <section class="center">
      <div class="container small">
        <MTextBubbleHorizontal
          bubble="test"
          description="CoachKeepers propose des services d’audit, sur mesure pour les structures souhaitant gagner en expertise et créer de la valeur dans le domaine des gardiens de but."
        />
      </div>
    </section>
    <section>
      <div class="container">
        <div class="offerDiv">
          <div class="offerDiv__container__offerPic"></div>
          <div class="offerDiv__container__offerText">
            <blockquote>
              CoachKeepers propose des services d’audit, sur mesure pour les
              structures souhaitant gagner en expertise et créer de la valeur
              dans le domaine des gardiens de but.
            </blockquote>
            <ReadMore class="offerDiv__readMoreDiv" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="bannerDiv">
        <div class="bannerDiv__content">
          <div class="bannerDiv__content__container">
            <div class="promise">
              CoachKeepers propose des services d’audit, sur mesure pour les
              structures souhaitant gagner en expertise et créer de la valeur
              dans le domaine des gardiens de but.
            </div>
            <ContactUs contactUs="Notre méthodologie" />
          </div>
        </div>
      </div>
    </section>
    <section></section>

    <!-- <section>
      <h1>Cards</h1>
      <CardElements />
    </section> -->
    <!-- <h1>Pics</h1> -->
    <section>
      <div class="container">
        <div class="aboutUs">
          <div class="aboutUsDiv__promiseDiv">
            <BubbleElement />
            <ATitle2 title="Un fondateur au plus proche des terrains" />
          </div>
          <div class="aboutUsDiv__block">
            <div class="aboutUsDiv__block__offerPic">
              <div class="aboutUsDiv__block__offerPic__1"></div>
              <div class="aboutUsDiv__block__offerPic__2"></div>
            </div>
            <div class="aboutUsDiv__block__offerText">
              <blockquote>
                CoachKeepers propose des services d’audit, sur mesure pour les
                structures souhaitant gagner en expertise et créer de la valeur
                dans le domaine des gardiens de but.
              </blockquote>
              <ReadMore
                class="aboutUsDiv__block__offerText__offerDiv__readMoreDiv"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <PicsCollage />
    <!-- <OFullPagePic /> -->
    <!-- <h1>offer</h1> -->
  </div>
</template>

<script>
//layout
definePageMeta({
  layout: "default",
});
</script>
<style lang="scss"></style>
