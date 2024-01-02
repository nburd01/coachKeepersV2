<template>
  <div>
    <section>
      <HeaderFirst />
    </section>
    <section>
      <div class="container">
        <div class="promiseDiv">
          <div class="bubbleDiv">
            <BubbleElement />
          </div>
          <div class="promise">
            CoachKeepers propose des services d’audit, sur mesure pour les
            structures souhaitant gagner en expertise et créer de la valeur dans
            le domaine des gardiens de but.
          </div>
        </div>
        <div class="offerDiv">
          <div class="offerDiv__offerPic"></div>
          <div class="offerDiv__offerText">
            <blockquote>
              CoachKeepers propose des services d’audit, sur mesure pour les
              structures souhaitant gagner en expertise et créer de la valeur
              dans le domaine des gardiens de but.
            </blockquote>
            <ReadMore class="offerDiv__readMoreDiv" />
          </div>
        </div>
        <h1 class="title-main title-purple">coachkeepers</h1>
        <h1 class="title-secondary title-info">
          une methodologie de travail fruit de 20 ans d’experience
        </h1>

        <BubbleElement />
        <ContactUs />
        <h2>Nos objectifs</h2>
        <h3>Menu</h3>
        <blockquote>
          CoachKeepers propose des services d’audit, sur mesure pour les
          structures souhaitant gagner en expertise et créer de la valeur dans
          le domaine des gardiens de but.
        </blockquote>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio at,
          molestias nemo animi dolorem dignissimos, omnis iure alias saepe
          quidem illum illo tempora assumenda facere voluptatibus eius iusto
          quo? Iste!
        </p>
        <ReadMore />
      </div>
    </section>
    <section>
      <h1>Cards</h1>
      <CardElements />
    </section>
    <h1>Pics</h1>
    <PicsCollage />
    <FullPagePic />
    <h1>offer</h1>
    <section>
      <OfferElement />
    </section>
  </div>
</template>

<script setup lang="ts"></script>
